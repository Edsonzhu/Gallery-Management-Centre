import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import { fetchUserbyId, fetchPhotosbyAlbumId, fetchAlbumbyId } from '../Utils/fetchHelper';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      album: [],
      photos: []
    };
    
  }

  componentDidMount() {
    fetchAlbumbyId(this.props.match.params.albumId)
    .then(res => {
      this.setState({ album: res.data });
      fetchUserbyId(this.state.album.userId)
      .then(res => this.setState({ user: res.data }));
    });

    fetchPhotosbyAlbumId(this.props.match.params.albumId)
    .then(res => this.setState({ photos: res.data }));
  }
  
  render () { 
    return (
    <MainContainer>
      <h2>Album: {this.state.album.title}</h2>
      <br />
      <h4>Photographer: {this.state.user.name}</h4>
      <br />
      <table className="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">Photo</th>
		      <th scope="col">Title</th>
		    </tr>
		  </thead>
		  <tbody>
        {this.state.photos.map(photo => (
          <tr key={photo.id}>
		      <td>
            <Link to={`/photos/${photo.id}`}>
			        <img src={photo.thumbnailUrl} className="img-fluid img-thumbnail" alt={photo.title}></img>
            </Link>
          </td>
		      <td><Link to={`/photos/${photo.id}`}>{photo.title}</Link></td>
		    </tr>
        ))}
		  </tbody>
		</table>
    </MainContainer>
    )
  }
}

export default Album;