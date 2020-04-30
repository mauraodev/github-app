import { storiesOf } from '@storybook/react'  
import { actions } from '@storybook/addon-actions';
import React from 'react'
import Actions from '../actions'

storiesOf('Actions', module)
    .add('first story', () => (
        <Actions getRepos={actions('getRepos')} getStarred={actions('getStarred')}/>
    ))