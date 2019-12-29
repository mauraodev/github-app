import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
    <div className='actions'>
        <button onClick={getRepos}>Ver repositórios</button>
        <button onClick={getStarred}>Ver favotiros</button>
    </div>
)

export default Actions