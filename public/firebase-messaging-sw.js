importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBGmCFepMcxKG2XrNLw_6qgZO3NhxOSOmA",
  authDomain: "clarks-dev.firebaseapp.com",
  projectId: "clarks-dev",
  storageBucket: "clarks-dev.firebasestorage.app",
  messagingSenderId: "11253718631",
  appId: "1:11253718631:web:b2b7eb4bf43b86a8e1bec2",
  measurementId: "G-E4CKNQ4S98"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
