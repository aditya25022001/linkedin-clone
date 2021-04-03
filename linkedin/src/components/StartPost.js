import React from 'react'
import { ListGroup,InputGroup, FormControl, Dropdown } from 'react-bootstrap'
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import Avatar from '@material-ui/core/Avatar';
import '../App.css'

export const StartPost = () => {
    
    const startPostType = (color, icon, title) => {
        return (
            <div id='start_post_type' className='d-flex flex-direction-row align-items-center pl-2 pr-3 py-2 rounded' style={{ fontSize:15 }}>
                <div style={{ color }} >{icon}</div>
                <div id='start_post_title' style={{ fontWeight:500, color:'rgb(133,133,133)' }}>{title}</div>
            </div>
            )
    }
    
    return (
        <ListGroup>
            <ListGroup.Item className='border-bottom-0' style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}} >
                <Avatar src='https://yt3.ggpht.com/yti/ANoDKi5pL_cvUrjXj2_CHoonnmq4zF8Y6a3DWXJacvcq1w=s88-c-k-c0x00ffffff-no-rj-mo'/>
                <InputGroup size="lg">
                    <FormControl placeholder="Start a post" className='ml-3 py-4' type="text" style={{ borderRadius:160, fontWeight:500, fontSize:16, backgroundColor:'rgb(224,224,224)' }}/>
                </InputGroup>
            </ListGroup.Item>        
            <ListGroup.Item className='px-5' style={{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                {startPostType('rgb(138,214,235)',<PhotoIcon/>,'Photo')}
                {startPostType('rgb(117,217,124)',<VideoLibraryRoundedIcon/>,'Video')}
                {startPostType('rgb(227,211,104)',<EventNoteRoundedIcon/>,'Event')}
                {startPostType('rgb(255,161,197)',<AssignmentRoundedIcon/>,'Write article')}
            </ListGroup.Item>
            <hr/>
            <div className='ml-auto'>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">Sort by</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Top</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Recent</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
        </ListGroup>
    )
}
