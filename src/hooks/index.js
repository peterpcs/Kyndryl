import { useState } from 'react'

export const useInput = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  return [
    values,
    (e) => {
      setValues((vals) => {
        return {
          ...vals,
          [e.target.name]: e.target.value,
        }
      })
    },
  ]
}
