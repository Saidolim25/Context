import React from 'react'

export const UserContext = React.createContext();

export default function Context ()  {
  return (
    <UserContext.Provider value="Yellow">
    <User />
  </UserContext.Provider>
  )
}
function User() {
    return (
      <UserContext.Consumer>
        {value => <h1>{value}</h1>} 
        {/* prints: Reed */}
      </UserContext.Consumer>
    )
  }
// export default Context