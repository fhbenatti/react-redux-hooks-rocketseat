import {createStore} from 'redux'

const INTIAL_STATE = {
  data: ['React Native', 'ReactJS', 'NodeJS']
}

function courses(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return {...state, data: [...state.data, action.title]}
    default:
      return state
  }
}

const store = createStore(courses)

export default store
