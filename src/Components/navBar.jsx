import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class NavBar extends Component {
constructor(props) {
  super(props);
  this.state = {
    isOpen: false,
  };
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="primary-color-dark" dark expand="md" fixed="top">
      <MDBNavbarBrand>
        <strong className="white-text">Gallery</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active={this.props.navHighlight === "home"}>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active={this.props.navHighlight === "users"}>
            <MDBNavLink to="/users">Users</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active={this.props.navHighlight === "albums"}>
            <MDBNavLink to="/albums">Albums</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active={this.props.navHighlight === "photos"}>
            <MDBNavLink to="/photos">Photos</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          {/* FAZER COM QUE O SING UP E LOGIN SO APARECAM SE O USUARIO ESTIVER LOGGED OFF */}
          <MDBNavItem>
            <MDBNavLink to="/login">
            <MDBIcon icon="sign-in-alt" /> Sign In</MDBNavLink>
          </MDBNavItem>
          {/* <MDBNavItem>       FAZER COM QUE ESSE SO APARECA SE O USUARIO ESTIVER LOGGED ON
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>      <MDBIcon icon="sign-out-alt" />   <MDBIcon icon="user-circle" />      */}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
  }
}

export default NavBar;