import React from 'react';
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Body } from './components/Body'
import { SignUp } from './components/SignUp';
import './App.css';

function App() {

  const user = useSelector(selectUser)

  return (
      <div className="App">
        {!user
        ?<SignUp/>
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
