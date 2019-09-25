import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import SearchPage from './searchPage';

class Users extends Component {

  componentDidMount() {
    this.props.onReset();
  }

  render() {
    return (
      <MainContainer navHighlight="Users">
        <h1 className="page-header">Photographer</h1>
        <SearchPage onFilter={this.props.onFilter} />
        <table className="table table-striped table-bordered table-md" width="100%">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city} {user.address.zipcode}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainContainer>
    );
  }
}

export default Users;