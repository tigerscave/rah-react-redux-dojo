import { GET_NOTES } from '../action-type'; 

const initialState = {
  notes: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:     
      return {
        notes: action.payload
      }; 
    default:
      return state;
  }
}