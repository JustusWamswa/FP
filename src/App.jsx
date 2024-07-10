import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Home from './pages/home'
import Login from './pages/login'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Signup from './pages/signup'
import ForgotPassword from './pages/forgotPassword'
import ResetPassword from './pages/resetPassword'
import Dashboard from './pages/dashboard'
import Layout from './components/Layout'
import Support from './pages/support'
import Settings from './pages/settings'
import Appointments from './pages/appointments'
import Consultations from './pages/consultations'
import HealthRecords from './pages/healthRecords'
import EducationalResources from './pages/educationalResources'
import SingleEducationalResource from './pages/singleEducationalResource'


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
})

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <GoogleOAuthProvider clientId="<your_client_id>">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/app/dashboard' element={<Dashboard />} />
            <Route path='/app/support' element={<Support />} />
            <Route path='/app/settings' element={<Settings />} />
            <Route path='/app/appointments' element={<Appointments />} />
            <Route path='/app/consultations' element={<Consultations />} />
            <Route path='/app/healthRecords' element={<HealthRecords />} />
            <Route path='/app/educationalResources' element={<EducationalResources />} />
            <Route path='/app/educationalResources/:id' element={<SingleEducationalResource />} />
          </Routes>
        </GoogleOAuthProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
