import React from 'react'
import '../App.css'
import { ListGroup } from 'react-bootstrap'
import { SidebarMe } from './SidebarMe'
import { SidebarActivity } from './SidebarActivity'

export const Sidebar = () => {
    return (
        <ListGroup variant='flush' className='p-0' style={{ width:'27vh' }} >
            <ListGroup.Item className='border-0 p-0 mb-3 rounded-bottom' >
                <SidebarMe 
                    name='Aditya Uday Ubale' 
                    education='Bachelor of Engineering - BE at Institute of Engineering and Technology DAVV Upcoming Web Developer'
                    profileViewers="99"
                    connections='382'
                    />
            </ListGroup.Item>
            <ListGroup.Item sticky='top' className='p-0 rounded'>
                <SidebarActivity/>
            </ListGroup.Item>
        </ListGroup>
    )
}
