import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = ({ anecdotes }) => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    let filteredAnecdotes = anecdotes.filter(anecdote =>
      new RegExp(event.target.value, 'i').test(anecdote.content))

    dispatch(setFilter(filteredAnecdotes))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter