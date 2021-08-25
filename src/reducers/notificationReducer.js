

const notificationReducer = (state = '', action) => {
  console.log(state)
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      return action.data
    default :
    return state
  }
}

export const createNotification = content => {}
export const addNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    data: notification
  }
}

export const removeNotification = notification => {
  return {
    type: 'REMOVE_NOTIFICATION',
    data: ''
  }
}

export default notificationReducer