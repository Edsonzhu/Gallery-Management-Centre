import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';

import { fetchUsers, fetchAlbums, fetchPhotos } from './Utils/fetchHelper';

import Home from './Components/home';
import Users from './Components/users';
import Albums from './Components/albums';
import Album from './Components/album';
import Photos from './Components/photos';
import Photo from './Components/photo';
import User from './Components/user';

//import NotFound from './Components/notFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      albums: [],
      photos: [],
      filteredUsers: [],
      filteredAlbums: [],
      filteredPhotos: []
    };
  }

  componentDidMount() {
    fetchUsers()
    .then(res => this.setState({ users: res.data, filteredUsers: res.data }));

    fetchAlbums()
    .then(res => this.setState({ albums: res.data, filteredAlbums: res.data }));
    
    fetchPhotos()
    .then(res => this.setState({ photos: res.data , filteredPhotos: res.data }));
  }

  //handleSomething
  handleFilter = (event) => {    
    let exp = event.target.value.toLowerCase();

    let filteredUsers = this.state.users.filter((user) => {
      return (user.name.toLowerCase().includes(exp));
    });
    let filteredAlbums = this.state.albums.filter((album) => {
      return (album.title.toLowerCase().includes(exp));
    });
    let filteredPhotos = this.state.photos.filter((photo) => {
      return (photo.title.toLowerCase().includes(exp));
    });

    this.setState({ filteredUsers, filteredAlbums, filteredPhotos });
  }

  handleResetFilter = () => {
    this.setState({ filteredUsers: this.state.users, filteredAlbums: this.state.albums, filteredPhotos: this.state.photos });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Home 
          onReset={this.handleResetFilter}
          onFilter={this.handleFilter}
          albums={this.state.filteredAlbums} 
          users={this.state.filteredUsers}
          photos={this.state.filteredPhotos} 
          />
        )} />

        <Route exact path='/users' render={() => (
          <Users 
          onReset={this.handleResetFilter}
          onFilter={this.handleFilter}
          users={this.state.filteredUsers} 
          />
        )} />

        <Route exact path='/users/:userId' render={(props) => (
          <User 
          {...props}
          />
        )} />
        
        <Route exact path='/albums' render={() => (
          <Albums 
          onReset={this.handleResetFilter}
          onFilter={this.handleFilter}
          albums={this.state.filteredAlbums} 
          users={this.state.users}
          />
        )} />

        <Route exact path='/albums/:albumId' render={(props) => (
          <Album
          {...props}
          />
        )} />

        <Route exact path='/photos' render={() => (
          <Photos 
          onReset={this.handleResetFilter}
          onFilter={this.handleFilter}
          albums={this.state.albums} 
          photos={this.state.filteredPhotos} 
          />
        )} />

        <Route exact path='/photos/:photoId' render={(props) => (
          <Photo
          {...props}
          />
        )} />

        {/* TODO : /login routes and components (inside the sign in components has another link to sign up) */}
      </Switch>
    );
  }
}

export default App;