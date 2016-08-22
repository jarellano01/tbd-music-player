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

function addVideoToDatabase(youtubeId, name, shoutout, songTitle) {
    database.ref("queue").push({
        "youtubeId": youtubeId,
        "name": name,
        "shoutout": shoutout,
        "songTitle": songTitle
    });
}
//on value change, update queue array

function logArray() {
    console.log(queueArray);
}

$(function() {

    database.ref("queue").on("value", function(snapshot) {
        queueArray = [];
        snapshot.forEach(function(childSnapshot) {
            queueArray.push(childSnapshot.val());
        })
        qId = snapshot.numChildren();
        try {
            getFromDatabase(queueArray);
        } catch (error) {

        }

        logArray();
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
})
