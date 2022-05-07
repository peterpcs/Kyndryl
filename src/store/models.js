export const EmployeeModel = {
  gender: '',
  name: {
    title: '',
    first: '',
    last: '',
  },
  location: {
    street: {
      name: '',
      number: 0,
    },
    city: '',
    state: '',
    postcode: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
    timezone: {
      offset: '',
      description: '',
    },
  },
  email: '',
  login: {
    uuid: '',
    username: '',
    password: '',
    salt: '',
    md5: '',
    sha1: '',
    sha256: '',
  },
  dob: {
    date: new Date(),
    age: 0,
  },
  registered: {
    date: new Date(),
    age: 0,
  },
  phone: '',
  cell: '',
  id: {
    name: '',
    value: '',
  },
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  },
  nat: '',
}
