import React from 'react'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Employee from './components/Employee/Employee'
import NewEmployee from './components/Employee/NewEmployee'
import EmployeeList from './components/Employee/EmployeeList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<EmployeeList />} />
            <Route path="employees" element={<EmployeeList />}>
              <Route path=":employeeId" element={<Employee />} />
              <Route path="add" element={<NewEmployee />} />
              <Route index element={<NewEmployee />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
