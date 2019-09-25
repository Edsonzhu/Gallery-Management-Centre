import React, { Component, Fragment } from 'react';
import { MDBContainer } from 'mdbreact';

import NavBar from './navBar';
import Footer from './footer';
import '../index.css';

class MainContainer extends Component {
  render() {
    return (
      <Fragment>
        <MDBContainer>
          <br />
          <NavBar navHighlight={this.props.navHighlight} />
          {this.props.children}
          <br />
        </MDBContainer>
        <Footer />
      </Fragment>
    );
  } 
}

export default MainContainer;