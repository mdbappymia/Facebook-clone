// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: 'AIzaSyDRDW9XeeaYL2S50yZ2RQi2imiAuTNwVtg',
    authDomain: 'facebook-21563.firebaseapp.com',
    projectId: 'facebook-21563',
    storageBucket: 'facebook-21563.appspot.com',
    messagingSenderId: '654571519560',
    appId: '1:654571519560:web:b6d664b8db214503b8627d',
    measurementId: 'G-SZ2TC6ZFGY',
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db