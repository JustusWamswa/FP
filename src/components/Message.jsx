import React from 'react'
import { Box, Typography, Paper, Avatar, IconButton } from '@mui/material'
import bot from '../assets/bot.png'
import { useUser } from '@clerk/clerk-react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Message = ({ message, onDelete }) => {
  const { user } = useUser()
  const isUserMessage = message.type === 'user'

  const parseMessage = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <Box mb={2} display="flex" flexDirection={isUserMessage ? 'row-reverse' : 'row'} alignItems="end">
      <Avatar
        alt={isUserMessage ? 'User' : 'Bot'}
        src={isUserMessage ? user?.imageUrl : bot}
        sx={{ marginLeft: isUserMessage ? 2 : 0, marginRight: isUserMessage ? 0 : 2, width: 30, height: 30 }}
      />
      <Box display="flex" flexDirection="column" alignItems={isUserMessage ? 'flex-end' : 'flex-start'} >
        <Paper
          elevation={1}
          sx={{
            padding: '8px 16px',
            backgroundColor: isUserMessage ? '#e0f7fa' : '#fff',
            maxWidth: '75%',
            wordWrap: 'break-word',
            position: 'relative'
          }}
        >
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {parseMessage(isUserMessage ? message.userMessage : message.botResponse)}
          </Typography>
          <IconButton
            size="small"
            sx={{ position: 'absolute', bottom: 0, right: isUserMessage && 0, visibility: !isUserMessage && 'hidden' }}
            onClick={() => onDelete(message._id)}
          >
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </Paper>
        <Typography variant="caption" color="textSecondary" align="right">
          {new Date(message.createdAt).toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  )
}

export default Message
