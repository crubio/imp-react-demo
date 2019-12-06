import React from 'react'
import logo from '../logo.svg'
import ConfigList from '../components/ConfigList'
import ServerStatus from '../components/ServerStatus'

export default class MainContainer extends React.Component {

  render() {
    return (
      <div className="App-header row">
        <div className="col s4">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>impCentral UI react components</code>
          </p>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header blue-grey darken-2"><i className="material-icons">cloud</i>impCentral config dropdown</div>
              <div className="collapsible-body">
                <div className="">
                  <div className="card-content white-text">
                    <ConfigList title="config features" />
                  </div>
                </div> 
              </div>
            </li>
          </ul>
        </div>
        <div className="col s4">
          <div className="card config-list-card hoverable">
            <div className="card-content white-text">
              <ConfigList title="impCentral app" />
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card config-list-card hoverable">
            <div className="card-content white-text">
              <ServerStatus />
            </div>
          </div>
        </div>
      </div>
    )
  }
}