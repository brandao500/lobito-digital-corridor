"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from 'recharts'
import { useState } from 'react'

const data = [
  { name: 'Minério de Ferro', value: 2.6, color: '#3b82f6' },
  { name: 'Cobre', value: 1.8, color: '#10b981' },
  { name: 'Diamantes', value: 1.2, color: '#8b5cf6' },
  { name: 'Petróleo', value: 0.9, color: '#f59e0b' },
  { name: 'Café', value: 0.4, color: '#ef4444' }
]

export function ProductsChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
          <p className="font-semibold text-gray-900">{label}</p>
          <p className="text-blue-600">
            <span className="font-medium">Valor: </span>
            ${payload[0].value}M USD
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          onMouseMove={(state) => {
            if (state && state.activeTooltipIndex !== undefined) {
              setHoveredIndex(state.activeTooltipIndex)
            }
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#f0f0f0" 
            className="animate-in fade-in-0 duration-1000"
          />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={80}
            fontSize={12}
            stroke="#666"
            className="animate-in slide-in-from-bottom-4 duration-800 delay-200"
          />
          <YAxis 
            fontSize={12}
            stroke="#666"
            label={{ value: 'Milhões (USD)', angle: -90, position: 'insideLeft' }}
            className="animate-in slide-in-from-left-4 duration-800 delay-300"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            animationBegin={400}
            animationDuration={1200}
            className="drop-shadow-sm"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                className={`transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'brightness-110 scale-105' 
                    : hoveredIndex !== null 
                    ? 'opacity-70' 
                    : 'hover:brightness-110'
                }`}
                style={{
                  filter: hoveredIndex === index ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
                  transformOrigin: 'bottom center'
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
