  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDL2knhBw12eUVOv1t57IY-sFScv5rYwrQ",
    authDomain: "tbd-music-player.firebaseapp.com",
    databaseURL: "https://tbd-music-player.firebaseio.com",
    storageBucket: "tbd-music-player.appspot.com",
  };
  firebase.initializeApp(config);

  // append data from the Firebase object to the admin panel

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  	console.log(childSnapshot);

  	 // var songName = childSnapshot.val().song;
    //  var artistName = childSnapshot.val().artist;
    //  var yourName = childSnapshot.val().userName;
    //  var dedicationName = childSnapshot.val().dedication;
    //  var songLengthSec = childSnapshot.val().songLength;

     $("#adminQueue > tbody").append("<tr><td>" + songName + "</td><td>" + artistName + "</td><td>" + yourName + "</td><td>" + dedicationName + "</td><td>" + songLengthSec + "</td></tr>");

  }

