import React from 'react'
import { ListGroup, Image } from 'react-bootstrap'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import '../App.css'

export const SidebarMe = ({ name, education, profileViewers, connections }) => {
    return (
        <ListGroup style={{ width:'27vh' }}>
            <Image className='rounded-top' src='https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png'
                style={{ width:'27vh', height:'8vh' }}
            />
            <ListGroup.Item style={{ alignItems:'center', textAlign:'center' }}>
                <div style={{ textAlign:'center', alignItems:'center', marginTop:'-30%'}} className='mb-3'>
                    <Image roundedCircle src='https://yt3.ggpht.com/yti/ANoDKi5pL_cvUrjXj2_CHoonnmq4zF8Y6a3DWXJacvcq1w=s88-c-k-c0x00ffffff-no-rj-mo' style={{ width:'10vh', height:'10vh', border:'0.4vh solid white' }}/>
                </div>
                <div style={{ fontWeight:500 }} className='mb-2'>{name}</div>
                <div style={{ fontSize:'1.6vh', fontWeight:350 }} >{education}</div>
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
            <ListGroup.Item style={{ display: 'flex', flexDirection:'row', alignItems: 'center'}} className="items_sidebar">
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
