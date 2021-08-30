import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}
export const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}
export const incrementVote = async (id) => {
  const anecdote = await getOne(id)
  anecdote.votes += 1 
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}