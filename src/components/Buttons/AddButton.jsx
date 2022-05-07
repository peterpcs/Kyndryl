import React from 'react'
import Button from '@mui/material/Button'
import AddCircle from '@mui/icons-material/AddCircle'
import { useNavigate, useLocation } from 'react-router-dom'

export default function AddButton() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToNewEmployee = (e) => {
    e.preventDefault()
    navigate('/employees/add' + location.search)
  }

  return (
    <Button
      sx={{ padding: '10px 0 0 10px' }}
      onClick={goToNewEmployee}
      startIcon={<AddCircle />}
    >
      Add employee
    </Button>
  )
}
