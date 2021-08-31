

const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      return ''
    default :
    return state
  }
}

export const setNotification = (content, time) => {
  return dispatch => {
    setTimeout(() => {
      return dispatch({
        type: 'REMOVE_NOTIFICATION'
      })
    }, time * 1000)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
  }
  
}

export default notificationReducer