import React, { createContext } from 'react'
import { useState } from 'react'

export const UserDataContext = createContext()

const UserContext = ({children}) => {

    const [User, setUser] = useState({
        email:'',
        fullName:{
            firstname:'',
            lastname:''
        }
    })

  return (
    <div>
      <UserDataContext.Provider value={{User, setUser}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
