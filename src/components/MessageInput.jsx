import React, { useState } from 'react'
import { Box, TextField, Button, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const MessageInput = ({ onSendMessage }) => {
    const [text, setText] = useState('')

    const handleSend = () => {
        if (text.trim() !== '') {
            onSendMessage(text)
            setText('')
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                padding: '16px',
                alignItems: 'center'
            }}
        >
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                variant="outlined"
                placeholder="Type a message"
                fullWidth
                sx={{ marginRight: '8px' }}
            />
            <IconButton sx={{width: 40, height: 40}}>
                <AttachFileIcon />
            </IconButton>
            <IconButton sx={{width: 40, height: 40}} onClick={handleSend}>
                <SendRoundedIcon />
            </IconButton>
        </Box>
    )
}

export default MessageInput
