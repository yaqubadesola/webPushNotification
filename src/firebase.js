// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQyFKVowAOThDcVIhYPO_4HHMiP8yR2tY",
  authDomain: "chatapp-53bad.firebaseapp.com",
  projectId: "chatapp-53bad",
  storageBucket: "chatapp-53bad.appspot.com",
  messagingSenderId: "301558226643",
  appId: "1:301558226643:web:7d48770190e49d47a3fe26",
  measurementId: "G-YNFW69CG54"
};

// Initialize Firebase
//firebaseConfig.initializeApp(firebaseConfig)
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = async (setTokenFound) => {
  try {
        const currentToken = await getToken(messaging, { vapidKey: 'BPPQQZMNhBGg8ZhlUB59JfoG1ay_aFj1cuVa3zFRITQtYJDZCnHsyl2UC9JczaT8km5iNrqVZo8Mwvj1W7Dix-Q' });
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    } catch (err) {
        console.log('An error occurred while retrieving token. ', err);
    }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});