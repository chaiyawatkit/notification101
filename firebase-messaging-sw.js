importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDZ3C-BL40g6Rg9XI1QjNwntdznwzXvIHE",
    authDomain: "rotor-stg.firebaseapp.com",
    projectId: "rotor-stg",
    storageBucket: "rotor-stg.appspot.com",
    messagingSenderId: "1025993237669",
    appId: "1:1025993237669:web:14c4234686645e4513994c",
    measurementId: "G-P36E135C72"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});