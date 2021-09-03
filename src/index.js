import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js'

// import { createStore } from 'redux'
// import reducer from './reducer'

// const store = createStore(reducer)

// const App = () => {
//   const good = () => {
//     store.dispatch({
//       type: 'GOOD'
//     })
//   }
//   const ok = () => {
//     store.dispatch({
//       type: 'OK'
//     })
//   }
//   const bad = () => {
//     store.dispatch({
//       type: 'BAD'
//     })
//   }
//   const zero = () => {
//     store.dispatch({
//       type: 'ZERO'
//     })
//   }

//   return (
//     <div>
//       <button onClick={good}>good</button> 
//       <button onClick={ok}>neutral</button> 
//       <button onClick={bad}>bad</button>
//       <button onClick={zero}>reset stats</button>
//       <div>good {store.getState().good}</div>
//       <div>neutral {store.getState().ok}</div>
//       <div>bad {store.getState().bad}</div>
//     </div>
//   )
// }

// const renderApp = () => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

// renderApp()
// store.subscribe(renderApp)
// store.dispatch({type: 'GOOD'})
// console.log(store.getState().good)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
 document.getElementById('root'))
