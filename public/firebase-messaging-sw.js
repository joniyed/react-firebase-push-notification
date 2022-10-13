// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAqNuvsSO82ivwpMURJ7mmJfZb1aUI0s6o",
  authDomain: "nagalay-demo.firebaseapp.com",
  projectId: "nagalay-demo",
  storageBucket: "nagalay-demo.appspot.com",
  messagingSenderId: "646059377887",
  appId: "1:646059377887:web:6c91286a870526befa956a",
  measurementId: "G-9MN8GHDYDM"
};

firebase.initializeApp(firebaseConfig);

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
