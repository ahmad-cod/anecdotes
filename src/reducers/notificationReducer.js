

let notificationTimeoutId;

const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return ''
    default :
    return state
  }
}

export const setNotification = (content, time = 4) => {
  if(notificationTimeoutId){
    clearTimeout(notificationTimeoutId)
  }
  return dispatch => {
    notificationTimeoutId = setTimeout(() => {
      return dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, time * 1000)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
  }
  
}

export default notificationReducer