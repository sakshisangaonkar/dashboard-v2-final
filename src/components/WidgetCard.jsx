import React from 'react'
import {PieChart,Pie,Cell,ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,Legend} from 'recharts'

const COLORS=['#10b981','#ef4444','#3b82f6','#f59e0b','#f97316']

export default function WidgetCard({widget}){
  return (
    <div className="bg-gray-50 rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-2">{widget.title}</h3>
      <div style={{height:200}}>
        {widget.type==='donut'&&widget.data&&(
          <ResponsiveContainer><PieChart><Pie data={widget.data} dataKey="value" nameKey="name"
            innerRadius={40} outerRadius={70} label>{widget.data.map((e,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}</Pie><Legend/></PieChart></ResponsiveContainer>
        )}
        {widget.type==='semiDonut'&&widget.data&&(
          <ResponsiveContainer><PieChart><Pie data={widget.data} dataKey="value" nameKey="name"
            startAngle={180} endAngle={0} innerRadius={40} outerRadius={70} label>{widget.data.map((e,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}</Pie><Legend/></PieChart></ResponsiveContainer>
        )}
        {widget.type==='hbar'&&widget.data&&(
          <ResponsiveContainer><BarChart data={widget.data} layout="vertical"><XAxis type="number"/><YAxis dataKey="name" type="category"/><Tooltip/><Bar dataKey="value">{widget.data.map((e,i)=><Cell key={i} fill={COLORS[i%COLORS.length]} />)}</Bar></BarChart></ResponsiveContainer>
        )}
        {widget.type==='empty'&&(
          <div className="h-full flex items-center justify-center text-gray-400">No Graph data available</div>
        )}
      </div>
    </div>
  )
}