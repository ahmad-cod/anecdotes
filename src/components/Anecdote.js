import React from 'react'
import { connect } from 'react-redux'
import { upvote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = (props) => {

  const { id, content, votes } = props.anecdote

  const vote = (id, content) => {
    console.log('vote', id)

    props.upvote(id)
    props.setNotification(`You voted "${content}"`, 3)
  }
  return (
    <div key={id}>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={() => vote(id, content)}>vote</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  upvote,
  setNotification
}

export default connect(null, mapDispatchToProps)(Anecdote)