import { firebase, googleAuthProvider } from '../firebase/firebase';

import actionTypes from '../actions/actionTypes';

export const startLoginAction = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
}

export const startLogoutAction = () => {
  return (dispatch) => {
    return firebase.auth().signOut();
  };
}

export const loginAction = (uid) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      uid
    }
  }
}

export const logoutAction = () => {
  return {
    type: actionTypes.LOGOUT
  }
}