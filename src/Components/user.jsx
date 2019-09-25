import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import { fetchUserbyId, fetchAlbumsbyUserId } from '../Utils/fetchHelper';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      albums: []
    };
  }

  componentDidMount() {
    fetchUserbyId(this.props.match.params.userId)
    .then(res => {
      this.setState({ user: res.data });
      fetchAlbumsbyUserId(this.state.user.id)
      .then(res => this.setState({ albums: res.data }))
    })
  }

  render() {
     return (
      <MainContainer>
      <h2>Name: {this.state.user.name}</h2>
      <br />
      <h4>Email: {this.state.user.email}</h4>

      <h4>Phone: {this.state.user.phone}</h4>

      <h4>Website: {this.state.user.website}</h4>
      <table className="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">Albums' Title</th>
		    </tr>
		  </thead>
		  <tbody>
        {this.state.albums.map(album => (
          <tr key={album.id}>
		      <td><Link to={`/albums/${album.id}`}>{album.title}</Link></td>
		    </tr>
        ))}
		  </tbody>
		</table>
    </MainContainer>
    )
  }
}

export default User;