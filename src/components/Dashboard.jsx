import React from 'react'
import Category from './Category'

export default function Dashboard({data,search}){
  return (
    <div className="space-y-6">
      {data.map(cat=>(
        <div key={cat.id} className="bg-white rounded-2xl shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{cat.title}</h2>
            <button className="px-3 py-1.5 rounded bg-indigo-600 text-white">+ Add Widget</button>
          </div>
          <Category category={cat} search={search} />
        </div>
      ))}
    </div>
  )
}