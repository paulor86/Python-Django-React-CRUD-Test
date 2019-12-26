import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import List from './components/list';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <List token={token}/>
    </div>
  );
}

export default App;
