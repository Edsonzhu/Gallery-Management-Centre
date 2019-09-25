import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainContainer from './mainContainer';
import SearchPage from './searchPage';

class Photos extends Component{
	componentDidMount() {
    this.props.onReset();
  }
	
	render() {
		return (
			<MainContainer navHighlight="Photos">
			<h1 className="page-header">Photos</h1>
			<SearchPage onFilter={this.props.onFilter}/>
			<table className="table table-image table-striped table-bordered table-md" width="100%" >
				<thead>
					<tr>
						<th scope="col">Photo</th>
						<th scope="col">Title</th>
						<th scope="col">Album</th>
					</tr>
				</thead>
				<tbody>
					{this.props.photos.map(photo => (
						<tr key={photo.id}>
						<td>
							<Link to={`/photos/${photo.id}`}>
								<img src={photo.thumbnailUrl} className="img-fluid img-thumbnail" alt={photo.title}></img>
							</Link>
						</td>
						<td><Link to={`/photos/${photo.id}`}>{photo.title}</Link></td>
						<td><Link to={`/albums/${photo.albumId}`}>{this.props.albums.find((album) => album.id === photo.albumId).title}</Link></td>
					</tr>
					))}
				</tbody>
			</table>
		</MainContainer>
		)
	}
}

export default Photos;