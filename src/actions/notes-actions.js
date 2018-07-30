import { GET_NOTES } from '../action-type';
import { database } from '../firebase'; 


export function getNotes() {
  return dispatch => {
    database.on('value', snapshot => {
      const data = snapshot.val()
      const notes = Object.keys(data).map(key => data[key])
      dispatch({
        type: GET_NOTES, 
        payload: notes,
      })
    })
  }
}


export function saveNote(note) {
  return dispatch => database.push(note)
}