import React, { createContext } from 'react'

const initialState = {
  userName: "",
  isLoggedIn: false,
}

export const Context = createContext(initialState)

export const Auth = ({ children }) => {
  return (
    <Context.Provider value={[initialState]}>
      {children}
    </Context.Provider>
  )
}
