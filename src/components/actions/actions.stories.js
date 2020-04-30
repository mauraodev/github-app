import { storiesOf, action } from '@storybook/react'  
import React from 'react'
import Actions from '../actions'

storiesOf('Actions', module)
    .add('first story', () => (
        <Actions 
            getRepos={action('Get Repos')}
            getStarred={action('Get Starred')}
        />
    ))