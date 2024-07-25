import React, { useState } from 'react'
import { Box, TextField, Button, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const MessageInput = ({ onSendMessage }) => {
    const [input, setInput] = useState('')

    const handleSendClick = () => {
        if (input.trim()) {
            onSendMessage(input)
            setInput('')
        }
    }

    return (
        <Box display="flex" alignItems="center" p={1} borderTop="1px solid #ddd">
            <TextField
                variant="outlined"
                placeholder="Type a message"
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSendClick()
                    }
                }}
                sx={{ marginRight: 1 }}
            />
            {/* <Button variant="contained" color="primary" onClick={handleSendClick}>
        Send
      </Button> */}
            <IconButton sx={{ width: 40, height: 40 }}>
                <AttachFileIcon />
            </IconButton>
            <IconButton sx={{ width: 40, height: 40 }} onClick={handleSendClick}>
                <SendRoundedIcon />
            </IconButton>
        </Box>
    )
}

export default MessageInput
