
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  	console.log(childSnapshot);

  	 var songName = childSnapshot.val().song;
     var artistName = childSnapshot.val().artist;
     var yourName = childSnapshot.val().userName;
     var dedicationName = childSnapshot.val().dedication;
     var songLengthSec = childSnapshot.val().songLength;

     $("#adminQueue > tbody").append("<tr><td>" + songName + "</td><td>" + artistName + "</td><td>" + yourName + "</td><td>" + dedicationName + "</td><td>" + songLengthSec + "</td></tr>");

  }


