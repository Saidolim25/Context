import React from 'react'
import { useState, useContext, createContext } from 'react'
const Text = createContext()
const Main = () => {
    const [user,setUser] = useState('    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque!')
  return (
    <div>
        <Text.Provider>
            <h2>{`Whats is ${user}?`}</h2>
        </Text.Provider>
        
    </div>
  )
}

export default Main