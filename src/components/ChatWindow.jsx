import React, { useState } from 'react'
import { Box } from '@mui/material'
import Message from './Message'
import MessageInput from './MessageInput'

const ChatWindow = () => {
  const [messages, setMessages] = useState([])

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, sender: 'You', timestamp: new Date() }])
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'white'
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </Box>
      <MessageInput onSendMessage={handleSendMessage} />
    </Box>
  )
}

export default ChatWindow
