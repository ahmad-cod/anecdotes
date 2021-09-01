import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = ({ anecdotes, setFilter}) => {
  const handleChange = (event) => {
    let filteredAnecdotes = anecdotes.filter(anecdote =>
      new RegExp(event.target.value, 'i').test(anecdote.content))

    setFilter(filteredAnecdotes)
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

const mapStateToProps = ({ anecdotes }) => {
  return {
    anecdotes
  }
}

export default connect(mapStateToProps, { setFilter })(Filter)