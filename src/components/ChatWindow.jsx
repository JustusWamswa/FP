import React, { useEffect, useState } from 'react'
import { Alert, Box, LinearProgress } from '@mui/material'
import Message from './Message'
import MessageInput from './MessageInput'
import { deleteMessage, getMessages, sendMessage } from '../services/api'


const ChatWindow = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [fail, setFail] = useState(false)
  const [success, setSuccess] = useState(false)

  console.log(messages)

  useEffect(() => {
    setLoading(true)
    getMessages()
      .then((res) => {
        setMessages(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setFail(true)
        setTimeout(() => {
          setFail(false)
        }, 5000)
      })
  }, [])

  const handleSendMessage = (text) => {
    setLoading(true)
    sendMessage(text)
      .then((res) => {
        setMessages(prevMessages => [...prevMessages, res.data])
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setFail(true)
        setTimeout(() => {
          setFail(false)
        }, 5000)
      })
  }

  const handleDeleteMessage = (messageId) => {
    setLoading(true)
    deleteMessage(messageId)
      .then((res) => {
        setMessages(prevMessages => prevMessages.filter(msg => msg._id !== messageId && msg.relatedTo !== messageId))
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setFail(true)
        setTimeout(() => {
          setFail(false)
        }, 5000)
      })
    // Simulate a backend request to delete the message
    // fetch(`/api/messages/${messageId}`, { method: 'DELETE' });
  }

  // Flatten the message array for rendering
  const flattenedMessages = messages.reduce((acc, message) => {
    if (message.userMessage) {
      acc.push({ ...message, type: 'user' })
    }
    if (message.botResponse) {
      acc.push({ ...message, type: 'bot' })
    }
    return acc
  }, [])

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
        {flattenedMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((message, index) => (
          <Message key={index} message={message} onDelete={handleDeleteMessage} />
        ))}
      </Box>
      <MessageInput onSendMessage={handleSendMessage} />
      {loading && <LinearProgress />}
      {fail ? <Alert severity="error" sx={{ position: 'absolute', right: 0, bottom: 10, zIndex: 50, minWidth: "20%" }}>Failed</Alert>
        : success ? <Alert severity="success" sx={{ position: 'absolute', right: 0, bottom: 10, zIndex: 50, minWidth: "20%" }}>Success</Alert>
          : <></>}
    </Box>
  )
}

export default ChatWindow
