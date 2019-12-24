import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        photo: 'https://avatars0.githubusercontent.com/u/1053242?v=4',
        login: 'mauraodev',
        username: 'Mauro Nunes',
        repos: 12,
        followers: 10,
        following: 10,
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Favoritos',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App;
