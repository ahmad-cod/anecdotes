export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: filter
  }
}
const filterReducer = (state = "", action) => {
  const {type, data} = action

  switch(type){
    case 'SET_FILTER':
      return data
    default:
      return state
  }
}

export default filterReducer