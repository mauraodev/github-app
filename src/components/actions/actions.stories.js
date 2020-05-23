import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import React from 'react'
import Actions from '../actions'

const stories = storiesOf('Actions', module)

stories.add('first story', () => (
    <Actions getRepos={action('Get Repo')} getStarred={action('Get Starred')} />
))
stories.add('second story', () => (
    <Actions getRepos={action('Get Repo')} getStarred={action('Get Starred')} />
))