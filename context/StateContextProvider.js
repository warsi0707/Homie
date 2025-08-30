'use client'
import { createContext, useState } from "react"

export const StateContext = createContext()

export default function StateContextProvider({children}) {
  const [loading, setLoading] = useState(false)
  console.log("StateContextProvider rendered")
  return (
    <StateContext.Provider value={{ loading, setLoading }}>
      {children}
    </StateContext.Provider>
  )
}
