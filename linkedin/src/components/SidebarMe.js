import React, { useEffect, useState } from 'react'
import { ListGroup, Image } from 'react-bootstrap'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import '../App.css'
import Skeleton from '@material-ui/lab/Skeleton';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { Avatar } from '@material-ui/core';

export const SidebarMe = ({ name, description, profileViewers, connections, profilePic, profileBackground}) => {


    const [currentUser, setCurrentUser] = useState({})

    const user = useSelector(selectUser)
    useEffect(()=>{
        db.collection('linkedInUsers').where('id','==',user.uid).get().then((docs) => {
            docs.forEach((doc)=>{
                setCurrentUser(doc.data());
            })
        })
    },[user.uid])

    const setBGColor = () => {
        return `rgb(${(0.8-Math.random())*255},${(0.8-Math.random())*255},${(0.8-Math.random())*255})`
    }

    return (
        <ListGroup style={{ width:'27vh' }}>
            {!profileBackground && profileBackground!=='' 
            ? <Skeleton variant='rect' animation='wave' style={{ width:'27vh', height:'8vh' }}/> 
            : profileBackground!=='' 
            ? <Image src={profileBackground} style={{ width:'27vh', height:'8vh', borderTopRightRadius:10, borderTopLeftRadius:10 }}/>
            : <div style={{ width:'27vh', height:'8vh', backgroundColor:setBGColor(), borderTopRightRadius:10, borderTopLeftRadius:10  }}></div>
            }
            <ListGroup.Item style={{ alignItems:'center', textAlign:'center' }}>
                <div style={{ textAlign:'center', alignItems:'center', marginTop:'-30%'}} className='mb-3'>
                    {!profilePic && profilePic!=='' 
                    ? <Skeleton variant='circle' animation='wave' style={{marginLeft:'25%', width:'10vh', height:'10vh', border:'0.4vh solid white' }}/> 
                    : profilePic!==''
                    ?<Image roundedCircle src={profilePic} style={{ width:'10vh', height:'10vh', border:'0.4vh solid white' }}/>
                    :<Avatar style={{ width:'10vh', height:'10vh', marginLeft:'26%', border:'0.4vh solid white', backgroundColor:setBGColor() }}>{currentUser.userName[0].toUpperCase()}</Avatar>
                    }
                </div>
                <div style={{ fontWeight:500 }} className='mb-2'>{name}</div>
                <div style={{ fontSize:'1.6vh', fontWeight:350 }} >{description}</div>
            </ListGroup.Item>
            <ListGroup.Item className='px-0'>
                <div style={{ fontSize:'1.6vh', display: 'flex', flexDirection:'row', justifyContent: 'space-between'}} className='who_viewed_sidebar px-4'>
                    <div style={{ color:'gray', fontWeight:450 }}>Who viewed your profile</div> 
                    <div style={{ fontWeight:500, color:'rgb(69,125,204)' }}>{profileViewers}</div>
                </div>
                <div style={{ fontSize:'1.6vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}} className='connection_sidebar px-4'>
                    <div style={{ fontSize:'1.6vh', display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                        <div style={{ color:'gray', fontWeight:450 }}>Connections</div>
                        <div style={{ fontWeight:500, color:'rgb(69,125,204)' }}>{connections}</div>
                    </div>
                    <div style={{ fontWeight:500, color:'black' }}>Grow your network</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize:'1.55vh' }} className='access_sidebar'>
                <div style={{ color:'gray' }} className='mb-1'>Access exclusive tools & insights</div>
                <div style={{ display:'flex', flexDirection:'row', alignItems: 'center', paddingLeft:'-1%'}}>
                    <div style={{ width:'1.5vh', height:'1.5vh', backgroundColor:'gold' }} className='rounded' ></div>
                    <div style={{ fontWeight:500, color:'black', fontSize:'1.49vh' }}><a href='/' style={{ color:'black' }}>Try Premium Free for 1 Month</a></div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ display: 'flex', flexDirection:'row', alignItems: 'center', borderBottomRightRadius:10, borderBottomLeftRadius:10 }} className="items_sidebar">
                <div>
                    <BookmarkIcon style={{ fontSize:'3vh', color:'darkgray' }} className='mr-2'/>
                </div>
                <div style={{ fontWeight:500, color:'black', fontSize:'1.6vh' }}>
                    My items
                </div>
            </ListGroup.Item>
        </ListGroup>
    )
}
