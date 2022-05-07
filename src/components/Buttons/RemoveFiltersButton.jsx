import React from 'react'
import Button from '@mui/material/Button'
import Delete from '@mui/icons-material/Delete'

export default function RemoveFiltersButton({ onClick }) {
  return (
    <Button onClick={onClick} size="small" startIcon={<Delete />}>
      Remove Filters
    </Button>
  )
}
