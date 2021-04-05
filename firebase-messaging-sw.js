importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBbYfnk43W1ARo63PJ-RsgSVS4mOg1tpts",
    authDomain: "notification101-16eac.firebaseapp.com",
    projectId: "notification101-16eac",
    storageBucket: "notification101-16eac.appspot.com",
    messagingSenderId: "1059761156598",
    appId: "1:1059761156598:web:120a815b94326900f157d7"
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