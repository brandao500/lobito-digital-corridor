"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useState } from 'react'

const data = [
  { name: 'Angola', value: 55, color: '#ef4444' },
  { name: 'Zâmbia', value: 30, color: '#22c55e' },
  { name: 'Congo', value: 15, color: '#3b82f6' }
]

export function OriginCountriesChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p className="text-blue-600">
            <span className="font-medium">Participação: </span>
            {payload[0].value}%
          </p>
        </div>
      )
    }
    return null
  }

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
        className="animate-in fade-in-0 duration-1000"
        style={{ 
          animationDelay: `${800 + index * 200}ms`,
          opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.7 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          onMouseMove={(state) => {
            if (state && state.activeIndex !== undefined) {
              setHoveredIndex(state.activeIndex)
            }
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            innerRadius={40}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationBegin={200}
            animationDuration={1000}
            className="drop-shadow-sm"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                className="transition-all duration-300"
                style={{
                  filter: hoveredIndex === index 
                    ? 'brightness(1.1) drop-shadow(0 4px 12px rgba(0,0,0,0.3))' 
                    : hoveredIndex !== null 
                    ? 'brightness(0.8)' 
                    : 'none',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            className="animate-in slide-in-from-bottom-4 duration-800 delay-500"
            formatter={(value, entry) => (
              <span 
                style={{ color: entry.color }}
                className="transition-all duration-300 hover:font-semibold"
              >
                {value}: {entry.payload?.value}%
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
