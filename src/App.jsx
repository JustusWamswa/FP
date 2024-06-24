import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './pages/home'
import Login from './pages/login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Signup from './pages/signup';


const myTheme = createTheme({
  palette: {
    primary: {
      main: '#007bff'
    },
    secondary: {
      main: '#f88379',
      contrastText: '#fff'
    },
    bgdark: {
      main: '#c4ddf7'
    },
    bglight: {
      main: '#dde9f6'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GoogleOAuthProvider clientId="<your_client_id>">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}

export default App
