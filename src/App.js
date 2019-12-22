import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='search'>
        <input type='search' placeholder='Digite o nome do usuário no Github'/>
      </div>

      <div className='user-info'>
        <img src='https://avatars0.githubusercontent.com/u/1053242?v=4'/>
        <h1>
          <a href='https://github.com/mauraodev'>Mauro Nunes</a>
        </h1>

        <ul className='repos-info'>
          <li>Repositórios: 11</li>
          <li>Seguirdores: 11</li>
          <li>Seguindo: 11</li>
        </ul>

        <div className='actions'>
          <button>Ver repositórios</button>
          <button>Ver favotiros</button>
        </div>

        <div className='repos'>
          <h2>Repositórios</h2>
          <ul>
            <li>
              <a href='#'>Nome do repositório</a>
            </li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Favoritos</h2>
          <ul>
            <li>
              <a href='#'>Nome do repositório</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
