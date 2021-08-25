import React from 'react'

const Anecdote = ({anecdote, vote}) => {
  const {id, content, votes} = anecdote
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

export default Anecdote