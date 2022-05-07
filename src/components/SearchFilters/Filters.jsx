import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { useInput } from '../../hooks'
import { monthsOrder, getMonth, getYear } from '../../utils'
import RemoveFiltersButton from '../Buttons/RemoveFiltersButton'

export default function Filters({ reset, setReset, setData, employees }) {
  const [{ state, year, month, gender }, handleChange] = useInput({
    state: '',
    year: '',
    month: '',
    gender: '',
  })
  const [states, setStates] = useState([])
  const [years, setYears] = useState([])
  const [months, setMonths] = useState([])
  const [genders, setGenders] = useState([])

  useEffect(() => {
    if (reset) {
      removeFilters()
      setReset(false)
    }
  }, [reset])

  useEffect(() => {
    if (!(state || year || month || gender)) {
      setData([...employees])
      return
    }

    setData(() => {
      return [...employees].filter((e) => {
        const m = month ? getMonth(e) : ''
        const y = year ? getYear(e) : ''
        const g = gender ? e.gender : ''
        const s = state ? e.location?.state : ''

        return m + y + s + g === month + year + state + gender
      })
    })
  }, [state, year, month, gender])

  const getMonths = () =>
    new Set(
      employees.map((e) => {
        return getMonth(e)
      })
    )

  useEffect(() => {
    setStates([...new Set(employees.map((e) => e.location?.state))])
    setGenders([...new Set(employees.map((e) => e.gender))])
    setYears(
      [
        ...new Set(
          employees.map((e) => {
            return getYear(e)
          })
        ),
      ].sort()
    )

    setMonths(
      [...getMonths()].sort((a, b) => {
        return monthsOrder.indexOf(a) - monthsOrder.indexOf(b)
      })
    )
  }, [employees])

  const removeFilters = () => {
    handleChange({ target: { name: 'year', value: '' } })
    handleChange({ target: { name: 'month', value: '' } })
    handleChange({ target: { name: 'gender', value: '' } })
    handleChange({ target: { name: 'state', value: '' } })
  }

  return (
    <>
      <Filter
        name="gender"
        label="Gender"
        value={gender}
        values={genders}
        handleChange={handleChange}
      />
      <Filter
        name="year"
        label="Year"
        value={year}
        values={years}
        handleChange={handleChange}
      />
      <Filter
        name="month"
        label="Month"
        value={month}
        values={months}
        handleChange={handleChange}
      />
      <Filter
        name="state"
        label="State"
        value={state}
        values={states}
        handleChange={handleChange}
        sx={{ width: 300, padding: '10px' }}
      />
      <RemoveFiltersButton onClick={removeFilters} />
    </>
  )
}
