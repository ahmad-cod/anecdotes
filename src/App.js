import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { upvote, newAnecdote } from './reducers/anecdoteReducer'
import { addNotification, removeNotification } from './reducers/notificationReducer'
import { getAll } from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getAll().then(anecdotes => dispatch({type: 'INIT_ANECDOTES', data: anecdotes}))
  }, [dispatch])
  const anecdotes = useSelector(state => state.anecdotes)
  const filteredAnecdotes = useSelector(state => state.filtered)
  console.log('filtered', filteredAnecdotes)
  // const [filtered, setFiltered] = useState([])

  const vote = (id, content) => {
    console.log('vote', id)

    dispatch(upvote(id))
    dispatch(addNotification(`You voted "${content}"`))
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

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter anecdotes={anecdotes} />
      <AnecdoteList vote={vote} filtered={filteredAnecdotes} anecdotes={anecdotes} />
      <AnecdoteForm addAnecdote={addAnecdote}/>
    </div>
  )
}

export default App