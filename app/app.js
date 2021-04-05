
document.getElementById("sign-in").onclick = function(e) {
e.preventDefault();
handleSignUp();


}

var config = {
    apiKey: "AIzaSyBbYfnk43W1ARo63PJ-RsgSVS4mOg1tpts",
    authDomain: "notification101-16eac.firebaseapp.com",
    projectId: "notification101-16eac",
    storageBucket: "notification101-16eac.appspot.com",
    messagingSenderId: "1059761156598",
    appId: "1:1059761156598:web:120a815b94326900f157d7"
};
firebase.initializeApp(config);
var tokens = "";
function handleSignUp() {

    var errors = document.getElementById('errors');
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var warnings = "";


    if (email.length < 4) {
      warnings += 'You need a valid email chief <br/>';
    }
    if (password.length < 4) {
      warnings += 'You need a valid password boss <br/>';
    }

    if (warnings != "") {
      console.log(warnings);
      errors.style.display = 'block';
      errors.innerHTML = warnings;
    } else {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

      errors.style.display = "none";
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        errors.style.display = (errors.style.display === "none" || errors.style.display === "") ? "block" : "none";
        console.log(error);
        errors.innerHTML = error + "<br/>";


      });
    }

  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {

      var fireBase_name = user.displayName;
      var fireBase_email = user.email;


      var fireBase_emailVerified = user.emailVerified;
      var fireBase_uid = user.uid;
      var success = document.getElementById('success');
      success.style.display = (success.style.display === "none" || success.style.display === "") ? "block" : "none";
      success.innerHTML = "User Logged in with Credentials: <br />" +
        "<b>Name:</b> " + fireBase_name + "<br />" +
        "<b>Email: </b>" + fireBase_email + "<br />" +
        "<b>emailVerified: </b>" + fireBase_emailVerified + "<br />" +
        "<b>uid: </b>" + fireBase_uid + "<br />";
        IntitalizeFireBaseMessaging();





    }
  });


  const messaging=firebase.messaging();

  function IntitalizeFireBaseMessaging() {
      messaging
          .requestPermission()
          .then(function () {
              console.log("Notification Permission");
              return messaging.getToken();
          })
          .then(function (token) {
              console.log("Token : "+token);
              tokens = token;

          })
          .catch(function (reason) {
              console.log(reason);
          });
  }



  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });