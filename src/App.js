import React from 'react';
import './App.css';
import Search from './components/search'
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

function App() {
  return (
    <div className="app">
      <Search/>

      <UserInfo/>      

      <Actions/>

      <Repos 
        className='repos' 
        title='Repositórios' 
        repos={[{
            name: 'Nome do repositório',
            link: '#'
        }]}/>

      <div className='starred'>
        <h2>Favoritos</h2>
        <ul>
          <li>
            <a href='#'>Nome do repositório</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
