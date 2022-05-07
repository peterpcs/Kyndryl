import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import AddButton from '../Buttons/AddButton'
import RefreshButton from '../Buttons/RefreshButton'
import { NavLink, Outlet, useOutletContext } from 'react-router-dom'

export default function EmployeeList() {
  const { data, setReset } = useOutletContext()

  return (
    <>
      <Card sx={{ width: '30%' }}>
        <CardActions>
          <AddButton />
        </CardActions>
        <CardContent sx={{ height: '65vh', overflowY: 'auto' }}>
          <nav className="employees-nav">
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              {data.map(
                ({
                  name: { first: fName, last: lName },
                  picture: { thumbnail },
                  gender,
                  email,
                }) => {
                  const fullName = `${fName} ${lName}`
                  return (
                    <NavLink key={email} to={`/employees/${email}`}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={fullName} src={thumbnail} />
                        </ListItemAvatar>
                        <ListItemText primary={fullName} secondary={gender} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </NavLink>
                  )
                }
              )}
            </List>
          </nav>
        </CardContent>
        <CardActions>
          <RefreshButton setReset={setReset}/>
        </CardActions>
      </Card>
      <Outlet />
    </>
  )
}
