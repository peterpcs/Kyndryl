import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchEmployees } from '../../services'
import Button from '@mui/material/Button'
import Refresh from '@mui/icons-material/Refresh'

import { useNavigate, useLocation } from 'react-router-dom'

export default function RefreshButton({ setReset }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleRefresh = (e) => {
    e.preventDefault()
    navigate('/employees' + location.search)
    dispatch(fetchEmployees())
    setReset(true)
  }

  return (
    <Button onClick={handleRefresh} size="small" startIcon={<Refresh />}>
      Load Employees
    </Button>
  )
}
