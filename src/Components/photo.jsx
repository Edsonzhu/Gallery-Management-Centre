import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import { fetchUserbyId, fetchAlbumbyId, fetchPhotobyId } from '../Utils/fetchHelper';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      album: [],
      photo: []
    };
  }

  componentDidMount() {
    fetchPhotobyId(this.props.match.params.photoId)
    .then(res => {
      this.setState({ photo: res.data });
      fetchAlbumbyId(this.state.photo.albumId)
      .then(res => {
        this.setState({ album: res.data })
        fetchUserbyId(this.state.album.userId)
        .then(res => this.setState({ user: res.data }));
      });
    });
  }

  render() {
    return(
      <MainContainer>
        <h2>Photo: {this.state.photo.title}</h2>
        <br />
        <div className="row">
          <div className="img-responsive">
            <img src={this.state.photo.url} alt={this.state.photo.title} />
            <br />
            <table className="table">
              <thead>
                <tr>
                  <th>Photographer</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td><Link to={`/users/${this.state.user.id}`}>{this.state.user.name}</Link></td>
                <td><Link to={`/albums/${this.state.album.id}`}>{this.state.album.title}</Link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    )
  }
}

export default Photo;