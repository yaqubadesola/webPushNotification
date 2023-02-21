// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
// Initialize the Firebase app in the service worker by passing the generated config
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
  const app = initializeApp(firebaseConfig);
  
  // Retrieve firebase messaging
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  