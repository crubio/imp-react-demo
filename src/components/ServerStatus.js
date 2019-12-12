import React from 'react'
import LoadingState from './LoadingState'
import services from '../services/request'

class ServerStatusRow extends React.Component {

  render() {
    const status = this.props.status
    let className = 'material-icons'

    if (status.status === 'operational') {
      className += ' online'
    } else {
      className += ' offline'
    }
    return (
      <li className="card-panel blue-grey darken-2">
        <i className={className}>brightness_1</i><strong>{status.name}</strong>
        <p className="description text-caption">{status.description}</p>
        <p className="updated_at text-caption">last update: {status.updated_at}</p>
      </li>
    )
  }
}

class MaintenanceItem extends React.Component {
  render() {
    if (this.props.maintenance.length === 0) {
      return(
        <li><p>No scheduled maintenance</p></li>
      )
    }
    return(
      <li className="card-panel blue-grey darken-2">
        <i className="material-icons">schedule</i><span className="">{this.props.maintenance.scheduled_for}</span>
        <p>{this.props.maintenance.name}</p>
        <p className="text-caption">{this.props.maintenance.incident_updates[0].body}</p>
        <a href={this.props.maintenance.shortlink} target="_blank" rel="noreferrer noopener" >More info</a>
      </li>
    )
  }
}

export default class ServerStatus extends React.Component {
  async getServerStatus() {
    return await services.getServerStatus()
  }

  async getMaintenanceStatus() {
    return await services.getMaintenanceStatus()
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      components: [],
      maintenance: []
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true})

    setTimeout(() => {
      this.getMaintenanceStatus()
        .then(response => {
          this.setState({
            isLoading: false,
            maintenance: response.data.scheduled_maintenances[0]
          })
        })
        .catch(e => {
          console.warn('error getting maintenance windows ' + e)
        })

      this.getServerStatus()
        .then(response => {
          this.setState({
            isLoading: false,
            components: response.data.components
          })
        })
        .catch(e => {
          console.warn('error getting server status ' + e)
        })
    }, 1200);
    
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingState />
      )
    }
    return (
      <div>
        <h3>scheduled maintenance</h3>
        <ul>
          <MaintenanceItem maintenance={this.state.maintenance} />
        </ul>
        <h3>imp servers</h3>
        <ul>
          {this.state.components.map((el, key) => {
            return <ServerStatusRow key={key} status={el} />
          })}
        </ul>
      </div>
    )
  }
}