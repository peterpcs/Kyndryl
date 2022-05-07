import React from 'react'
import Card from '@mui/material/Card'
import Search from './Search'
import Filters from './Filters'

export default function SearchFilerPanel(props) {
  return (
    <Card variant="outlined" sx={{ display: 'flex' }}>
      <Search {...props} />
      <Filters {...props} />
    </Card>
  )
}
