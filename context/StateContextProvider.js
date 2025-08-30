'use client'
import { createContext, useState } from "react"

export const StateContext = createContext()

export default function StateContextProvider({children}) {
  const [loading, setLoading] = useState(false)
  return (
    <StateContext.Provider value={{ loading, setLoading }}>
      {children}
    </StateContext.Provider>
  )
}
