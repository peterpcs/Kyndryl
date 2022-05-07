import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CardContent from '@mui/material/CardContent'

export default function Search({ reset, setReset, setData, employees }) {
  const [searchInput, setSearchInput] = React.useState('')

  const search = () => {
    setData(() => {
      if (!searchInput) return employees

      return [...employees].filter(({ name: { first, last } }) => {
        return `${first} ${last}`
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
    })
  }

  useEffect(() => {
    if (reset) {
      setSearchInput('')
      setReset(false)
    }
  }, [reset])

  useEffect(() => {
    search()
  }, [searchInput])

  const handleChange = (e) => {
    setSearchInput(e.currentTarget.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    search()
  }

  return (
    <CardContent>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search for employees' }}
          onChange={handleChange}
          value={searchInput}
        />
        <IconButton
          onClick={handleSearch}
          type="submit"
          sx={{ p: '10px' }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </CardContent>
  )
}
