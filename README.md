# notification101
สำหรับ  Gettoken  ตอน  login firebase 

1. Copy file firebase-messaging-sw.js  ไปที่ root
2. แก้ไขไฟล์ file firebase-messaging-sw.js และ app.js เปลี่ยนแปลงตาม Project settings ของเรา
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
3. run make dev
4.ทดลอง login 
5.กด f12 ไปที่ console จะเจอ token  
