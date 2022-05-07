export const monthsOrder = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getMonth = (employee) => {
  const date = new Date(employee.dob.date)
  const monthName = Intl.DateTimeFormat('en-US', { month: 'long' }).format
  return monthName(date)
}

export const getYear = (employee) => new Date(employee.dob.date).getFullYear()
