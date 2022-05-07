import './App.css'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { fetchEmployees } from './services'
import { useDispatch, useSelector } from 'react-redux'
import SearchFilerPanel from './components/SearchFilters/SearchFilterPanel'

function App() {
  const [data, setData] = useState([])
  const [reset, setReset] = useState(false)
  const dispatch = useDispatch()
  const employees = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  useEffect(() => {
    setData(employees)
  }, [employees])

  return (
    <div className="app">
      <header>
        <section>
          <SearchFilerPanel
            reset={reset}
            setReset={setReset}
            setData={setData}
            employees={employees}
          />
        </section>
      </header>
      <main>
        <section>
          <Outlet context={{ data, setReset }} />
        </section>
      </main>
    </div>
  )
}

export default App
