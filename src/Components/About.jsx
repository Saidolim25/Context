import React from 'react'
import { useState, useContext, createContext  } from 'react'
import { useFormContext } from 'react-hook-form'
const Context = createContext()
const About = () => {
    const[user,setUser] = useState('Deutchland')
  return (
    <div>
       <Context.Provider>
        <h1>{`hallo ${user}`}</h1>
       </Context.Provider>
    </div>
  )
}

export default About