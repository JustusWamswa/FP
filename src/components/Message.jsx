import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

const Message = ({ message }) => {
  return (
    <Box
      sx={{
        marginBottom: '8px',
        display: 'flex',
        justifyContent: message.sender === 'You' ? 'flex-end' : 'flex-start',
      }}
    >
      <Paper
        sx={{
          padding: '8px 16px',
          backgroundColor: message.sender === 'You' ? '#e1f5fe' : '#f1f1f1',
          borderRadius: '16px',
          maxWidth: '70%',
        }}
      >
        <Typography variant="body2">{message.text}</Typography>
      </Paper>
    </Box>
  )
}

export default Message
