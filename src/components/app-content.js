import React from 'react'
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userInfo, repos, starred}) => (
    <div className="app">
        <Search />

        {!!userInfo && <UserInfo />}

        {!!userInfo && <Actions />}

        {!!repos.length &&
        <Repos
            className='repos'
            title='Repositórios'
            repos={[{
                name: 'Nome do repositório',
                link: '#'
            }]} />
        }

        {!!starred.lenght &&
        <Repos
            className='starred'
            title='Favoritos'
            repos={[{
                name: 'Nome do repositório',
                link: '#'
            }]} />
        }
    </div>
)

AppContent.propTypes = {
    userInfo: PropTypes.object
}

export default AppContent