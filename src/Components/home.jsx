import React, { Component } from 'react';

import MainContainer from './mainContainer';

class Home extends Component {
  render () {
    return (
      <MainContainer navHighlight="home">
        <h1>Gallery Management Centre</h1>
        <p>This website was made using react.</p>
      </MainContainer>
    )
  }
}

export default Home;