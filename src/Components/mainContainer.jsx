import React, { Component } from 'react';
import NavBar from './navBar';

class MainContainer extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer;