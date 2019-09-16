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
      photos: []
    };
  }

  componentDidMount() {
    fetchUsers()
    .then(res => this.setState({ users: res.data }));

    fetchAlbums()
    .then(res => this.setState({ albums: res.data }));
    
    fetchPhotos()
    .then(res => this.setState({ photos: res.data }));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/users' render={() => (
          <Users users={this.state.users} />
        )} />

        <Route exact path='/users/:userId' render={(props) => (
          <User 
          {...props}
          />
        )} />
        
        <Route exact path='/albums' render={() => (
          <Albums 
          albums={this.state.albums} 
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
          photos={this.state.photos} 
          albums={this.state.albums}
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