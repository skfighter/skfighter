'use client'
import { useEffect, useRef, useState } from 'react'

export default function ConnectPage() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')
  const wsRef = useRef<WebSocket | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const socket = new WebSocket('wss://websocket-production-1b1d.up.railway.app')
    wsRef.current = socket

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data])
    }

    return () => socket.close()
  }, [])

  // 👇 Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (wsRef.current && input) {
      wsRef.current.send(input)
      setInput('')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">WebSocket Chat</h1>
      <div className="mb-4 max-h-[700px] overflow-y-auto space-y-1 border p-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className="text-gray-800">{msg}</div>
        ))}
        {/* 👇 Dummy div for auto scroll */}
        <div ref={bottomRef} />
      </div>
      <input
        className="border px-2 py-1 mr-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button className="bg-blue-500 text-white px-3 py-1" onClick={sendMessage}>
        Send
      </button>
    </div>
  )
}
