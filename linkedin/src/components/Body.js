import React, {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ListGroup } from 'react-bootstrap'
import { StartPost } from './StartPost'
import { Post } from './Post'
import { db } from '../firebase'
import { Loader } from './Loader'

export const Body = () => {
    
    const [posts,setPosts] = useState([])
    
    useEffect(() =>{
        db.collection('posts').orderBy('added','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        })
    },[])

    return (
        <ListGroup style={{ width:'100%' }}>
            <StartPost/>
            {posts.length===0 
            ?<Loader/> 
            :
             posts.map(post => (
                <Post key={uuidv4()}
                    image={post.data.image}
                    name={post.data.name}
                    description={post.data.description}
                    postDescription={post.data.postDescription}
                    postContent={post.data.postContent}
                />
            ))}
        </ListGroup>
    )
}
