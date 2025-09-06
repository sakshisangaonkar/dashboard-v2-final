import React,{useState,useEffect} from 'react'
import Dashboard from './components/Dashboard'
import dataset from './data.json'

export default function App(){
  const [data,setData]=useState([])
  const [search,setSearch]=useState('')
  useEffect(()=>{setData(dataset)},[])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard V2</h1>
      <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
        placeholder="Search anything..." className="w-full mb-6 p-3 rounded-lg border" />
      <Dashboard data={data} search={search} />
    </div>
  )
}