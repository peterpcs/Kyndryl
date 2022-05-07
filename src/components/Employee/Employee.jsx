import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const findEmployeeById = (state, id) => {
  return state.find(({ email }) => email === id)
}

export default function Employee() {
  const { employeeId } = useParams()
  const employee = useSelector((state) => findEmployeeById(state, employeeId))

  const {
    name: { first: fName, last: lName },
    picture: { large },
    gender,
    dob: { age },
    registered: { date: hiredDate },
    phone: workPhone,
    cell: cellPhone,
    email,
    location: {
      street: { name: streetName, number: streetNumber },
      city,
      state,
      postcode,
    },
  } = employee

  const fullName = `${fName} ${lName}`
  const address = `${streetNumber} ${streetName}, ${city}, ${state}, ${postcode}`

  const Information = ({ label, value }) => (
    <Typography variant="body2" color="text.secondary" sx={{ margin: '5px 0' }}>
      {label ? `${label}: ${value}` : value}
    </Typography>
  )
  return (
    <div style={{ width: '70%', paddingLeft: '60px' }}>
      <Card sx={{ maxWidth: 400, height: '100%' }}>
        <CardMedia
          component="img"
          image={large}
          alt={fullName}
          sx={{ width: 350, margin: 'auto' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>
          <Information label="Gender" value={gender} />
          <Information label="Age" value={age} />
          <Information label="Work Phone" value={workPhone} />
          <Information label="Cell Phone" value={cellPhone} />
          <Information label="Email" value={email} />
          <Information label="Address" value={address} />
          <Information label="Hired Date" value={hiredDate} />
        </CardContent>
      </Card>
    </div>
  )
}
