import React from 'react'
import PropTypes from 'prop-types';

const Search = ({isDisabled, handleSearch}) => (
    <div className='search'>
        <input 
            type='search' 
            placeholder='Digite o nome do usuário no Github' 
            disabled={isDisabled}
            onKeyUp={handleSearch}/>
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search