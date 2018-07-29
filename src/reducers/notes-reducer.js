import { GET_NOTES } from '../action-type'; 

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NOTES: 
      return action.playload; 
    default:
      return state;
  }
}