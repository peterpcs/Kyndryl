import React from 'react'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Gender from './Gender'
import { useInput } from '../../hooks'
import { ADD_EMPLOYEE } from '../../store/actions'

export default function NewEmployee() {
  const dispatch = useDispatch()
  const [
    {
      fName,
      lName,
      phone,
      cell,
      email,
      photo,
      gender,
      street,
      city,
      state,
      postcode,
      timezone,
    },
    handleChange,
  ] = useInput({
    fName: '',
    lName: '',
    phone: '',
    cell: '',
    email: '',
    photo: '',
    gender: '',
    street: '',
    city: '',
    state: '',
    postcode: '',
    timezone: '',
  })

  const addEmployee = (e) => {
    const employee = {
      gender,
      name: {
        first: fName,
        last: lName,
      },
      email,
      phone,
      cell,
      picture: {
        thumbnail: photo,
        medium: photo,
        large: photo,
      },
      location: {
        street: {
          name: street.split(' ')[1],
          number: street.split(' ')[0],
        },
        city,
        state,
        postcode,
      },
      timezone: {
        description: timezone,
      },
    }
    dispatch({ type: ADD_EMPLOYEE, payload: { newEmployee: employee } })
  }
  return (
    <Card sx={{ width: '70%', marginLeft: '20px' }}>
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            '& > :not(style)': { m: 1, marginBottom: '20px' },
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            sx={{ width: '40%' }}
            label="First Name"
            variant="outlined"
            name="fName"
            value={fName}
            onChange={handleChange}
          />
          <TextField
            sx={{ width: '40%' }}
            label="Last Name"
            variant="outlined"
            name="lName"
            value={lName}
            onChange={handleChange}
          />
          <Gender gender={gender} handleChange={handleChange} />
        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, marginBottom: '20px' },
            display: 'flex',
            justifyContent: 'space-between',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Street"
            variant="outlined"
            name="street"
            value={street}
            onChange={handleChange}
            sx={{ width: '40%' }}
          />

          <TextField
            label="City"
            variant="outlined"
            name="city"
            value={city}
            onChange={handleChange}
            sx={{ width: '15%' }}
          />

          <TextField
            label="State"
            variant="outlined"
            name="state"
            value={state}
            onChange={handleChange}
            sx={{ width: '15%' }}
          />

          <TextField
            label="Post Code"
            variant="outlined"
            name="postcode"
            value={postcode}
            onChange={handleChange}
            sx={{ width: '15%' }}
          />
        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': {
              m: 1,
              width: '100%',
              maxWidth: '450px',
              marginBottom: '20px',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <TextField
            label="Cell"
            variant="outlined"
            name="cell"
            value={cell}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="Photo"
            variant="outlined"
            name="photo"
            value={photo}
            onChange={handleChange}
          />
          <TextField
            label="Time Zone"
            variant="outlined"
            name="timezone"
            value={timezone}
            onChange={handleChange}
          />
        </Box>
        <CardActions>
          <Button sx={{ padding: '10px 0 0 10px' }} onClick={addEmployee}>
            ADD
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
