import React from 'react'
import WidgetCard from './WidgetCard'

export default function Category({category,search}){
  const widgets=category.widgets.filter(w=>w.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {widgets.length===0?<p className="text-gray-400">No widgets found</p>:
        widgets.map(w=>(<WidgetCard key={w.id} widget={w} />))}
    </div>
  )
}