import React from 'react'
import Body from './Body/Body'
import HOC from './HOC/HOC'
import Navigation from './Navigation/Navigation'

const web = () => {
    return (
        <HOC>
            <Navigation></Navigation>
            <Body></Body>
        </HOC>

    )
}

export default web
