window.firebase = function () {
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyA3bEYzbsK7D_YwDQoS5DO_yFrvbK4fJ5s",
    authDomain: "edm-project-mar-10.firebaseapp.com",
    databaseURL: "https://edm-project-mar-10.firebaseio.com",
    projectId: "edm-project-mar-10",
    storageBucket: "edm-project-mar-10.appspot.com",
    messagingSenderId: "63184278874"
  };
    firebase.initializeApp(config);
    return firebase;
}()


