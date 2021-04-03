import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { StartPost } from './StartPost'

export const Body = () => {
    return (
        <ListGroup style={{ width:'100%' }}>
            <StartPost/>
        </ListGroup>
    )
}
