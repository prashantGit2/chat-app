// import sockedIO from 'socket.io-client'
import './App.css';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

import Join from './components/join/Join'
import Chat from './components/chat/Chat';



function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
