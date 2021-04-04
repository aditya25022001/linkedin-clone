import { Avatar } from '@material-ui/core'
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import ShareIcon from '@material-ui/icons/Share';   
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const Post = ({ image, name, description, postDescription, postContent  }) => {
    
    const setResponses = (icon, title) => {
        return (
            <div id='post_responses' className='d-flex flex-direction-row align-items-center p-2 mr-2 rounded'>
                <div>{icon}</div>
                <div className='font-weight-bold text-secondary' style={{ fontSize:14 }} >{title}</div>
            </div>
        )
    }

    return (
        <ListGroup className='mb-3 rounded'>
            <ListGroup.Item className='border-bottom-0 d-flex flex-direction-row pb-1'>
                <Avatar src={image}/>
                <div className='ml-3'>
                    <div className='font-weight-bold pb-0 mb-0' id='name_post' style={{ color:'rgb(71,71,71)' }}>{name}</div>
                    <div className='font-weight-light text-secondary pt-0 mt-0'><small>{description}</small></div>
                </div>
                <MoreHorizIcon id='show_more_post' className='ml-auto roundedCircle' color='action' />
            </ListGroup.Item>
            <ListGroup.Item className='px-3' style={{ fontSize:14 }}>
                {postDescription}               
            </ListGroup.Item>
            <ListGroup.Item>
                {postContent}
            </ListGroup.Item>
            <ListGroup.Item className='d-flex flex-direction-row px-2 py-1'>
                {setResponses(<ThumbUpAltIcon className='mr-1' style={{ fontSize:20 }} color='action'/>, 'Like')}
                {setResponses(<CommentIcon className='mr-1' style={{ fontSize:20 }} color='action'/>,'Comment')}
                {setResponses(<ShareIcon className='mr-1' style={{ fontSize:20 }} color='action'/>,'Share')}
                {setResponses(<SendIcon className='mr-1' style={{ fontSize:20 }} color='action'/>,'Send')}
            </ListGroup.Item>

        </ListGroup>
    )
}
