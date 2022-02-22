import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/books'

const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const moduleExport = { getAll }

export default moduleExport
