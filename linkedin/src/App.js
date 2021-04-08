import React, {useEffect, useState} from 'react';
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Body } from './components/Body'
import { SignUp } from './components/SignUp';
import './App.css';
import { auth, db } from './firebase';
import { Loader } from './components/Loader'

function App() {

  const user = useSelector(selectUser)

  const [users, setUsers] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.profileURL,
          userDescription:userAuth.userDescription
        }))
      }
      else{
        dispatch(logout())
      }
    })
    db.collection('linkedInUsers').onSnapshot(snapshot => {
      setUsers(snapshot.docs.map(doc => ({id:doc.id, data:doc.data()})))
    })
  },[dispatch])

  return (
      <div className="App">
        {!user && Object.keys(users).length===0 
        ? <div style={{ textAlign: 'center', paddingTop: '23%'}}>
            <Loader/>
          </div>  
        : !user ? <SignUp/>
        :<>
        <Header/>
        <div id='body_posts' style={{ backgroundColor:'rgb(247,247,237)' }}>
          <Container className='App_sidebar py-4' style={{ display: 'flex', flexDirection:'row', width:'100%'}} >
            <div className='pr-4' id='sidebar_left'>
              <Sidebar/>
            </div>
            <div className='mr-2' id='app_body' style={{ flex:1 }}>
              <Body/>
            </div>
            <div className='pl-3'  id='sidebar_right'>
              <Sidebar/>
            </div>
          </Container>
        </div>
      </>
      }
      </div>
  );
}

export default App;
