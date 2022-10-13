import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAqNuvsSO82ivwpMURJ7mmJfZb1aUI0s6o",
  authDomain: "nagalay-demo.firebaseapp.com",
  projectId: "nagalay-demo",
  storageBucket: "nagalay-demo.appspot.com",
  messagingSenderId: "646059377887",
  appId: "1:646059377887:web:6c91286a870526befa956a",
  measurementId: "G-9MN8GHDYDM"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BP2MZ7owKX7DmWeiqdb89xPelbox_42tZlFb9i8LatK3o0spGq6TC-6mZge_1BBXbWQx9-p-kt7sMFXbLxZ4DIY'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});