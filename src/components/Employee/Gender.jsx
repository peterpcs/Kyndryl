import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Gender({ gender, handleChange }) {
  return (
    <FormControl sx={{ width: '15%' }}>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={gender}
        label="Gender"
        name="gender"
        onChange={handleChange}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </Select>
    </FormControl>
  )
}
