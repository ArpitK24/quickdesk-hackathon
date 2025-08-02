import React, { useState } from 'react'

function TicketList() {
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [sortBy, setSortBy] = useState('date')

  return (
    <div className="w-full bg-white py-4 px-4 flex flex-col md:flex-row items-center justify-between rounded-lg border border-gray-200">
      {/* Left side */}
      <div className="mb-3 md:mb-0">
        <label className="flex items-center gap-2 font-medium text-blue-700">
          <input
            type="checkbox"
            checked={showOpenOnly}
            onChange={e => setShowOpenOnly(e.target.checked)}
            className="accent-blue-600 w-4 h-4"
          />
          <span className="text-sm">Show Open Only</span>
        </label>
      </div>

      {/* Right side */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col font-medium text-blue-700 text-sm">
          <span className="font-bold mb-1 text-base">Categories</span>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="p-1 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[100px] bg-white"
          >
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="support">Support</option>
          </select>
        </div>

        <div className="flex flex-col font-medium text-blue-700 text-sm">
          <span className="font-bold mb-1 text-base">Status</span>
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="p-1 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[100px] bg-white"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="flex flex-col font-medium text-blue-700 text-sm">
          <span className="font-bold mb-1 text-base">Sort By</span>
          <div className="flex items-center gap-2">
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
      </div>
    </div>
  )
}

export default TicketList
