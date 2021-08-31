import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { upvote, createAnecdote, initialAnecdotes } from './reducers/anecdoteReducer'
import { setNotification } from './reducers/notificationReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialAnecdotes())
  }, [dispatch])
  const anecdotes = useSelector(state => state.anecdotes)
  const filteredAnecdotes = useSelector(state => state.filtered)
  // const [filtered, setFiltered] = useState([])

  const vote = (id, content) => {
    console.log('vote', id)

    dispatch(upvote(id))
    dispatch(setNotification(`You voted "${content}"`, 4))
  }

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You added '${content}'`))
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