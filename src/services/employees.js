import axios from 'axios'
import { SET_EMPLOYEES } from '../store/actions'

const GET_USERS_ENDPOINT = 'https://randomuser.me/api/?results=50'

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(GET_USERS_ENDPOINT)
      dispatch({
        type: SET_EMPLOYEES,
        payload: { employees: response.data.results },
      })
    } catch (err) {
      console.error(err)
    }
  }
}
