import React, { useEffect, useState } from 'react'
import AgentCard from './AgentCard'

export default  function AdminAgents() {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)

  const CallAgents =async()=>{
    try{
      const response = await fetch("/api/auth/admin/agents")
      const result = await response.json()
      if(response.ok){
        setLoading(false)
        setAgents(result.agents)
      }
      
    }catch(error){
      setLoading(false)
      console.error(error)
    }
    
  }
  useEffect(()=>{
    CallAgents()
  },[])
  if(loading === true){
    return (
      <div className='min-h-screen w-full flex justify-center items-center text-center pb-36'>
        <p className='text-2xl md:text-6xl font-semibold'>Loading...</p>
      </div>
    )
  }
  return (
    <div className='w-full min-h-screen flex justify-center md:justify-evenly flex-wrap p-5'>
      {agents.map((item, indx)=>(
          <AgentCard key={indx} name={item.name} email={item.email} phone={item.phone}/>
      ))}
    
      <AgentCard/>
      <AgentCard/>
    </div>
  )
}
