import React from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';

const Albums = (props) => {
  return (
    <MainContainer>
      <h1 className="page-header">Albums</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Photographer</th>
          </tr>
        </thead>
        <tbody>
          {props.albums.map(album => (
            <tr key={album.id}>
              <td><Link to={`/albums/${album.id}`}>{album.title}</Link></td>
              <td><Link to={`/users/${album.userId}`}>{props.users.find((user) => album.userId === user.id).name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainContainer>
  )
}

export default Albums;