import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import SearchPage from './searchPage';


class Home extends Component {
  componentDidMount() {
    this.props.onReset();
  }

  render () { 
    return ( 
      <MainContainer navHighlight="Home">
			<h1 className="page-header">Overview</h1>
			<SearchPage onFilter={this.props.onFilter}/>
			<table className="table table-striped table-bordered table-md" width="100%" >
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Type</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map(user => (
						<tr key={user.id*1}>
						<td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
						<td>Photographer</td>
					</tr>
          ))}
          {this.props.albums.map(album => (
						<tr key={album.id*2}>
						<td><Link to={`/albums/${album.id}`}>{album.title}</Link></td>
						<td>Album</td>
					</tr>
          ))}
          {this.props.photos.map(photo => (
						<tr key={photo.id*3}>
						<td><Link to={`/photos/${photo.id}`}>{photo.title}</Link></td>
						<td>Photo</td>
					</tr>
					))}
				</tbody>
			</table>
		</MainContainer>
    )
  }
}

export default Home;