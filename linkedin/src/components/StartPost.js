import React, {useEffect, useState} from 'react'
import { ListGroup,InputGroup, FormControl, Button, Alert } from 'react-bootstrap'
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import Avatar from '@material-ui/core/Avatar';
import '../App.css'
import { db } from '../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export const StartPost = () => {
    
    const [currentUser, setCurrentUser] = useState({})

    const user = useSelector(selectUser)

    const setBGColor = () => {
        return `rgb(${(0.8-Math.random())*255},${(0.8-Math.random())*255},${(0.8-Math.random())*255})`
    }

    useEffect(()=>{
        db.collection('linkedInUsers').where('id','==',user.uid).get().then((docs) => {
            docs.forEach((doc)=>{
                setCurrentUser(doc.data());
            })
        })
    },[user.uid])

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
        console.log(currentUser);
        if(postLinear===''){
            setLinearValidation('Post cannot be empty')
        }
        else{
            db.collection('posts').add({
                name:currentUser.userName,
                description:currentUser.catchyLine,
                postDescription:`Casual post by ${currentUser.userName}`,
                postContent:postLinear,
                postedBy:currentUser.id,
                image:currentUser.photo,
                added:firebase.firestore.FieldValue.serverTimestamp()
            })
            setPostLinear('') 
            setLinearValidation('')           
        }
    }

    const submitHandler = () => { 
        if(postHeading==='' || postContent===''){
            setPostValidation("Article heading or content cannot be empty")
        }
        else{
            db.collection('posts').add({
                name:currentUser.userName,
                description:currentUser.catchyLine,
                postDescription:postHeading,
                postContent:postContent,
                postedBy:currentUser.id,
                image:currentUser.photo,
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
            <ListGroup.Item className='border-bottom-0 pt-4' style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}} >
                {currentUser.photo!==''
                ?<Avatar src={currentUser.photo}/>
                :<Avatar style={{ backgroundColor:setBGColor() }}>{currentUser.userName[0].toUpperCase()}</Avatar> 
                }
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
                        Article
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
