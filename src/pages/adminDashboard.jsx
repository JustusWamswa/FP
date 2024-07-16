import React from 'react'
import Summary from '../components/Summary'
import Chart from '../components/Chart'
import UserInfo from '../components/UserInfo'

function AdminDashboard() {
  return (
    <>
      <Summary />
      <Chart />
      <UserInfo />
    </>
  )
}

export default AdminDashboard