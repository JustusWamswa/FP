import React, { useEffect } from 'react'
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
import Landing from './pages/landing'
import AdminDashboard from './pages/adminDashboard'
import AdminUsers from './pages/adminUsers'
import AdminResources from './pages/adminResources'
import PageNotFound from './pages/pageNotFound'
import { useUser } from '@clerk/clerk-react'


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

  const {user} = useUser()
  useEffect(() => {
    localStorage.setItem("userId", user?.id)
  }, [user])
  
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <GoogleOAuthProvider clientId="<your_client_id>">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/app/dashboard' element={<Dashboard />} />
            <Route path='/app/support' element={<Support />} />
            <Route path='/app/settings' element={<Settings />} />
            <Route path='/app/appointments' element={<Appointments />} />
            <Route path='/app/consultations' element={<Consultations />} />
            <Route path='/app/healthrecords' element={<HealthRecords />} />
            <Route path='/app/educationalresources' element={<EducationalResources />} />
            <Route path='/app/educationalresources/:id' element={<SingleEducationalResource />} />
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/users' element={<AdminUsers />} />
            <Route path='/admin/resources' element={<AdminResources />} />
            <Route path='/admin/settings' element={<Settings />} />
          </Routes>
        </GoogleOAuthProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
