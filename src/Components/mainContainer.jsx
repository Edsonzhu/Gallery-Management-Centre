import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';

import NavBar from './navBar';
import Footer from './footer';
import '../index.css';

class MainContainer extends Component {
  render() {
    return (
      <MDBContainer>
        <NavBar navHighlight={this.props.navHighlight} />
        <br />
        {this.props.children}
        <br />
        <Footer />
      </MDBContainer>
    )
  } 
}

export default MainContainer;