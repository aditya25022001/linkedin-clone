import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Body } from './components/Body'

function App() {
  return (
    <div className="App_header">
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
      {/* feed */}
      {/* right sidebar or the widgets */}
    </div>
  );
}

export default App;
