import React from 'react'
import '../App.css'
import M from 'materialize-css'
import MainContainer from './MainContainer'

export default class App extends React.Component {
  componentDidMount() {
    M.AutoInit()
  }
  render() {
    return (
      <div className="App row">
        <nav>
          <div className="nav-wrapper blue-grey darken-2 col s12">
            <a href="/" className="brand-logo">
              impCentral components
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
        <MainContainer />
      </div>
    );
  }
}
