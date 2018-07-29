import { GET_NOTES } from '../action-type';
import { database } from '../firebase'; 


export function getNotes() {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: GET_NOTES, 
        playload: snapshot.val(),
      })
    })
  }
}


export function saveNote(note) {
  return dispatch => database.push(note)
}