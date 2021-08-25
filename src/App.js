import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { upvote, newAnecdote } from './reducers/anecdoteReducer'
import { addNotification, removeNotification } from './reducers/notificationReducer'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id, content) => {
    console.log('vote', id)

    dispatch(upvote(id))
    dispatch(addNotification(`You have voted "${content}"`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(newAnecdote(content))
    dispatch(addNotification(`You added '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
    console.log(content)
  }

  const handleFilter = (e) => {
    let filtered = anecdotes.filter(anecdote =>
       new RegExp(e.target.value, 'i').test(anecdote.content))
    console.log('filter', filtered)
  }
  const filterForm = () => {
    return (
      <form>
        <label>Filter</label>
        <input type='text' id='filter' onChange={handleFilter} />
      </form>
    )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      {filterForm()}
      <AnecdoteList vote={vote} anecdotes={anecdotes} />
      <AnecdoteForm addAnecdote={addAnecdote}/>
    </div>
  )
}

export default App