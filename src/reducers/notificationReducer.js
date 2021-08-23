

const notificationReducer = (state = '', action) => {
  console.log(state.notification)
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    default :
    return state
  }
}

export const addNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    data: notification
  }
}

export default notificationReducer