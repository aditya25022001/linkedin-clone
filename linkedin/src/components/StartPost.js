import React, {useState} from 'react'
import { ListGroup,InputGroup, FormControl, Button, Alert, Badge } from 'react-bootstrap'
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import Avatar from '@material-ui/core/Avatar';
import '../App.css'
import { db } from '../firebase'
import firebase from 'firebase'

export const StartPost = () => {
    
    const startPostType = (color, icon, title) => {
        return (
            <div id='start_post_type' className='d-flex flex-direction-row align-items-center pl-2 pr-3 py-2 rounded' style={{ fontSize:15 }}>
                <div style={{ color }} >{icon}</div>
                <div id='start_post_title' style={{ fontWeight:500, color:'rgb(133,133,133)' }}>{title}</div>
            </div>
            )
    }

    const [postLinear, setPostLinear] = useState('')

    const [postHeading, setPostHeading] = useState('')

    const [postContent, setPostContent] = useState('')

    const [postValidation, setPostValidation] = useState('')

    const [linearValidation, setLinearValidation] = useState('')

    const submitLinearPost = (e) => {
        if(postLinear===''){
            setLinearValidation('Post cannot be empty')
        }
        else{
            db.collection('posts').add({
                name:'Aditya Uday Ubale',
                description:'2nd Year Institute of Engineering and Technology DAVV',
                postDescription:'Daily posts',
                postContent:postLinear,
                added:firebase.firestore.FieldValue.serverTimestamp()
            })
            setPostLinear('') 
            setLinearValidation('')           
        }
    }

    const submitHandler = () => { 
        if(postHeading==='' || postContent===''){
            setPostValidation("Post heading or content cannot be empty")
        }
        else{
            db.collection('posts').add({
                name:'Aditya Uday Ubale',
                description:'2nd Year Institute of Engineering and Technology DAVV',
                postDescription:postHeading,
                postContent:postContent,
                added:firebase.firestore.FieldValue.serverTimestamp()
            })
            setPostContent('')
            setPostHeading('')
            setPostValidation('')
            document.getElementById('write_article').classList='d-none';
        }
    }

    const startPostHandler = (e) => {
        document.getElementById('write_article').classList='d-block flex-1 mb-4 ';
    }
    
    return (
        <>
        <ListGroup>
            <ListGroup.Item className='border-bottom-0' style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}} >
                <Avatar src='https://yt3.ggpht.com/yti/ANoDKi5pL_cvUrjXj2_CHoonnmq4zF8Y6a3DWXJacvcq1w=s88-c-k-c0x00ffffff-no-rj-mo'/>
                <InputGroup size="lg" className='mr-2'>
                    <FormControl 
                        placeholder="Start a post" 
                        id='input_post'
                        value={postLinear} 
                        onChange={e => setPostLinear(e.target.value)} 
                        className='ml-3 py-4' 
                        type="text" 
                        style={{ borderRadius:160, fontWeight:500, fontSize:16 }}
                    />
                </InputGroup>
                <Button className='ml-auto rounded' onClick={e => submitLinearPost(e)}>POST</Button>
            </ListGroup.Item>        
            <ListGroup.Item 
                className={linearValidation==='' ? `px-5 pb-4` : `px-5 border-bottom-0 pb-2`} 
                style={{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                {startPostType('rgb(138,214,235)',<PhotoIcon/>,'Photo')}
                {startPostType('rgb(117,217,124)',<VideoLibraryRoundedIcon/>,'Video')}
                {startPostType('rgb(227,211,104)',<EventNoteRoundedIcon/>,'Event')}
                <div 
                    id='start_post_type' 
                    className='d-flex flex-direction-row align-items-center pl-2 pr-3 py-2 rounded' 
                    style={{ fontSize:15 }}
                    onClick={e => startPostHandler(e)}
                >
                    <div style={{ color:'rgb(255,161,197)' }} ><AssignmentRoundedIcon/></div>
                    <div id='start_post_title d-flex flex-direction-column' style={{ fontWeight:500, color:'rgb(133,133,133)' }}>
                        Write article
                        <Badge variant='success'>working</Badge>
                    </div>
                </div>
            </ListGroup.Item>
            {linearValidation!=='' &&             
                <ListGroup.Item className='pt-0 pb-1'>
                    <Alert variant='danger'>{linearValidation}</Alert>
                </ListGroup.Item>
            }
            <hr/>
            <div id='write_article' style={{ width:'auto' }}>
                <ListGroup>
                    <ListGroup.Item className='border-bottom-0 mb-0'>
                        <FormControl placeholder='Article heading' id='post_heading' value={postHeading} onChange={e => setPostHeading(e.target.value)}/>
                    </ListGroup.Item>
                    <ListGroup.Item className='border-bottom-0 mb-0'>
                        <FormControl as='textarea' id='post_content' value={postContent} placeholder='Article starts here...' rows={5} onChange={e => setPostContent(e.target.value)}/>
                    </ListGroup.Item>
                    <ListGroup.Item 
                        className={postValidation==='' ? `mt-0` : `mt-0 border-bottom-0`}>
                        <Button type='submit' onClick={e => submitHandler(e)} className='float-right'>POST</Button>
                    </ListGroup.Item>
                    {postValidation!=='' &&
                        <ListGroup.Item><Alert variant='danger'>{postValidation}</Alert></ListGroup.Item>
                    }
                </ListGroup>
            </div>
        </ListGroup>
    </>
    )
}
