import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB8jeo8YTnricXjglj3RT6llBK4Bih5SPQ",
    authDomain: "phone-verification-83d9e.firebaseapp.com",
    projectId: "phone-verification-83d9e",
    storageBucket: "phone-verification-83d9e.appspot.com",
    messagingSenderId: "12678153483",
    appId: "1:12678153483:web:03ca67a2f61ac94267ce0e",
    measurementId: "G-BQHD1E4124"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default firebase;
export {auth};