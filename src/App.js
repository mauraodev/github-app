import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
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
        name: 'Repo',
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
