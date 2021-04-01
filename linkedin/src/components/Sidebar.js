import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { SidebarMe } from './SidebarMe'

export const Sidebar = () => {
    return (
        <div>
            <SidebarMe 
                name='Aditya Uday Ubale' 
                education='Bachelor of Engineering - BE at Institute of Engineering and Technology DAVV Upcoming Web Developer'
                profileViewers="99"
                connections='382'
                />
        </div>
    )
}
