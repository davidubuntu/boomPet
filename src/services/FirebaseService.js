// Firebase App (the core Firebase SDK) is always required and must be listed first
import Firebase from 'firebase'
var firebaseConfig = {
  apiKey: 'AIzaSyD9wfAUcOV61PiVOvlcgu93BGi7LkFuZa4',
  authDomain: 'react-pets-ddiezr.firebaseapp.com',
  databaseURL: 'https://react-pets-ddiezr.firebaseio.com',
  projectId: 'react-pets-ddiezr',
  storageBucket: 'react-pets-ddiezr.appspot.com',
  messagingSenderId: 'sender-id'
}

const app = Firebase.initializeApp(firebaseConfig)
export const db = app.database()
