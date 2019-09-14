import React from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';

const Photos = (props) => {
  return (
    <MainContainer>
    <h1 className="page-header">Photos</h1>
		<table className="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">Photo</th>
		      <th scope="col">Title</th>
		      <th scope="col">Album</th>
		    </tr>
		  </thead>
		  <tbody>
        {props.photos.map(photo => (
          <tr key={photo.id}>
		      <td>
						<Link to={`/photos/${photo.id}`}>
			      	<img src={photo.thumbnailUrl} className="img-fluid img-thumbnail" alt={photo.title}></img>
						</Link>
		      </td>
		      <td><Link to={`/photos/${photo.id}`}>{photo.title}</Link></td>
          <td><Link to={`/albums/${photo.albumId}`}>{props.albums.find((album) => album.id === photo.albumId).title}</Link></td>
		    </tr>
        ))}
		  </tbody>
		</table>
  </MainContainer>
  )
}

export default Photos;