import React from 'react'
import { useState, createContext, useContext } from 'react'
import About from './Components/About';
import Context from './Components/Context';
import Page from './Components/Index/Page';
import Main from './Components/Main';
import Single from './Components/Single';

const UserContext = createContext();

const App = () => {
const [user,setUser] = useState('jesse hall')
  return (
    <div>
      <Single/>
      <About/>
      <Main/>
      <Page/>
      <Context/>
      <UserContext.Provider>
        <h1>{`hello ${user}!`}</h1>
      </UserContext.Provider>
    </div>
  )
}

export default App