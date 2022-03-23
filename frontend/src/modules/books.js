import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/books'

const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(response => response.data)
}

const create = newBook => {
  const response = axios.post(baseUrl, newBook)
  return response.then(response => response.data)
}

const remove = id => {
  const response = axios.delete(`${baseUrl}/${id}`)
  return response.then(response => response.data)
}

const update = newBook => {
  const response = axios.put(`${baseUrl}/${newBook.id}`, newBook)
  return response.then(response => response.data)
}

const moduleExport = { getAll, create, remove, update }

export default moduleExport
