import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import SearchPage from './searchPage';

class Albums extends Component{
  
  componentDidMount() {
    this.props.onReset();
  }

  render () {
    return (
      <MainContainer navHighlight="Albums">
        <h1 className="page-header">Albums</h1>
        <SearchPage onFilter={this.props.onFilter}/>
        <table className="table table-striped table-bordered table-md" width="100%">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Photographer</th>
            </tr>
          </thead>
          <tbody>
            {this.props.albums.map(album => (
              <tr key={album.id} >
                <td><Link to={`/albums/${album.id}`}>{album.title}</Link></td>
                <td><Link to={`/users/${album.userId}`}>{this.props.users.find((user) => album.userId === user.id).name}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainContainer>
    )
  }
}

export default Albums;