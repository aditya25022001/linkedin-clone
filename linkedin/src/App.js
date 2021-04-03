import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="App_header">
      <Header/>
      <div style={{ backgroundColor:'rgb(247,247,237)' }}>
        <Container className='App_sidebar py-4' >
          <Sidebar/>
        </Container>
      </div>
      {/* body */}
      {/* left sidebar */}
      {/* feed */}
      {/* right sidebar or the widgets */}
    </div>
  );
}

export default App;
