import React from 'react'
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo }) => (
    <div className='user-info'>
        <img src={userInfo.photo} />
        <h1>
            <a href={`https://github.com/${userInfo.login}`}>
                {userInfo.username}
            </a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: {userInfo.repos}</li>
            <li>Seguirdores: {userInfo.followers}</li>
            <li>Seguindo: {userInfo.following}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo