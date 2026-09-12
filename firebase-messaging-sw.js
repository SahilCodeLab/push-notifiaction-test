importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker with the provided config
const firebaseConfig = {
    apiKey: "AIzaSyAii2t4g5DuJ7-BLm8v9-syyrtOmyWK8_8",
    authDomain: "sr-login-cef1c.firebaseapp.com",
    databaseURL: "https://sr-login-cef1c-default-rtdb.firebaseio.com",
    projectId: "sr-login-cef1c",
    storageBucket: "sr-login-cef1c.firebasestorage.app",
    messagingSenderId: "998421619255",
    appId: "1:998421619255:web:5f12b5c71ed93ac5c115b2",
    measurementId: "G-D608WM0M65"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message: ', payload);
    
    const notificationTitle = payload.notification?.title || payload.data?.title || 'New Message';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || '',
        icon: payload.notification?.icon || '/favicon.ico',
        data: payload.data || {}
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
