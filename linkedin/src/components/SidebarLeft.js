import React, { useEffect, useState } from 'react'
import '../App.css'
import { ListGroup } from 'react-bootstrap'
import { SidebarMe } from './SidebarMe'
import { SidebarActivity } from './SidebarActivity'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../firebase'

export const SidebarLeft = () => {

    const [currentUser, setCurrentUser] = useState({})

    const user = useSelector(selectUser)

    useEffect(()=>{
        db.collection('linkedInUsers').where('id','==',user.uid).get().then((docs) => {
            docs.forEach((doc)=>{
                setCurrentUser(doc.data());
            })
        })
    },[user.uid])

    return (
        <ListGroup variant='flush' className='p-0' style={{ width:'27vh' }} >
            <ListGroup.Item className='border-0 p-0 mb-2 rounded-bottom' >
                <SidebarMe 
                    name={user.displayName} 
                    profilePic={currentUser.photo}
                    profileBackground={currentUser.bgPhoto}
                    description={currentUser.userDescription}
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
