import { EmployeeModel } from './models'
import { ADD_EMPLOYEE, SET_EMPLOYEES } from './actions'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return [...action.payload.employees]
    }

    case ADD_EMPLOYEE: {
      return [...state, { ...EmployeeModel, ...action.payload.newEmployee }]
    }

    default:
      return state
  }
}
