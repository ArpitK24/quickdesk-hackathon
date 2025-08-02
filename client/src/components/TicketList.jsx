import React, { useState } from 'react'

function TicketList() {
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [sortBy, setSortBy] = useState('date')

  return (
    
      <div className="flex flex-wrap items-center gap-6">
        <label className="flex items-center gap-2 font-medium text-gray-700">
          <input
            type="checkbox"
            checked={showOpenOnly}
            onChange={e => setShowOpenOnly(e.target.checked)}
            className="accent-blue-600 w-4 h-4"
          />
          Show Open Only
        </label>

        <label className="flex flex-col font-medium text-gray-700">
          <span>Categories:</span>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="support">Support</option>
          </select>
        </label>

        <label className="flex flex-col font-medium text-gray-700">
          <span>Status:</span>
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
        </label>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Sort By:</span>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="sortBy"
              value="date"
              checked={sortBy === 'date'}
              onChange={e => setSortBy(e.target.value)}
              className="accent-blue-600 w-4 h-4"
            />
            Date
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="sortBy"
              value="priority"
              checked={sortBy === 'priority'}
              onChange={e => setSortBy(e.target.value)}
              className="accent-blue-600 w-4 h-4"
            />
            Priority
          </label>
        </div>
      </div>
   
  )
}

export default TicketList
