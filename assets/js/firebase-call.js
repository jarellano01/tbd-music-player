$(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCv7xBTitrjB5fjlMOdoMLv1Uyqd9NhZMg",
        authDomain: "tbd-music.firebaseapp.com",
        databaseURL: "https://tbd-music.firebaseio.com",
        storageBucket: "tbd-music.appspot.com",
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    //global variables
    var queueArray = [];
    var qId = 0;

    database.ref("queue").on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            queueArray.push(childSnapshot.val());
        })
        qId = snapshot.numChildren();

        logArray();
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });


    function addVideoToDatabase(youtubeId, name, shoutout) {
        database.ref("queue").push({
            "youtubeId": youtubeId,
            "name": name,
            "shoutout": shoutout,
        });
    }

    //on value change, update queue array


    
    addVideoToDatabase("Fde24313", "Jonathan", "he is awesome");

    function logArray() {
        console.log(queueArray);
    }
})
