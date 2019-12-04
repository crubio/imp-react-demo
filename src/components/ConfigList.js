import React from 'react'
import $http from '../lib/api'
import LoadingState from './LoadingState'

class ConfigRow extends React.Component {
  render() {
    const item = this.props
    let className = 'label-text'
    if (item.row === 'true') {
      className += ' green-text'
    } else if (item.row === 'false') {
      className += ' red-text'
    }
    return (
      <li className="config-row">
        <span className="config-item-title">{item.title}</span>
        <span className="config-item-value"><strong className={className}>{item.row}</strong></span>
      </li>
    )
  }
}

/**
 * Main component used in import statements
 */
export default class ConfigList extends React.Component {
  async getConfigs() {
    return await $http.get('ui/config')
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: {
        customCopy: {},
        features: {}
      }
    }
  }

  // Lifecycle hook similar to mounted in vuejs
  componentDidMount() {
    this.setState({ isLoading: true})
    
    setTimeout(() => {
      this.getConfigs()
        .then(res => {
          this.setState({
            isLoading: false,
            data: {
              customCopy: res.data.customCopy,
              features: res.data.features
            }
          })
        })
        .catch(e => {
          console.warn(e)
        })
    }, 800);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingState />
      )
    }
    return (
      <div className="config-list-comp-container">
        <h3>{this.props.title || 'impCentral features'}</h3>
        <blockquote className="z-depth-1">{this.state.data.customCopy.terms}</blockquote>
        <ul>
          {Object.entries(this.state.data.features).map(([key, value]) => {
            return <ConfigRow key={key} title={key} row={value.toString()} />
          })}
        </ul>
      </div>
    )
  }
}