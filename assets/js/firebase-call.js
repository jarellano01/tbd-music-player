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

// function addVideoToDatabase(youtubeId, name, shoutout, songTitle) {
//     database.ref("queue").push({
//         "youtubeId": youtubeId,
//         "name": name,
//         "shoutout": shoutout,
//         "songTitle": songTitle
//     });
// }

function addVideoToDatabase(youtubeId, name, dedication, title) {
    var adaRankRef = firebase.database().ref('itemsInQueue');
    adaRankRef.transaction(function(currentData) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        if (currentData === null) {
            return currentData;
        } else {
            var numObjects = Object.keys(currentData).length;
            currentData[numObjects] = { "itemId": numObjects, "queueID": numObjects, "name": name, "title": title, "id": youtubeId, "dedication": dedication };
            currentData.numItems = numObjects;
            return currentData;
        }
    });

}

function swap(upId, downId) {
    var adaRankRef = firebase.database().ref('itemsInQueue');
    adaRankRef.transaction(function(currentData) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        if (currentData === null) {
            return currentData;
        } else {
            console.log(Object.keys(currentData).length);

            var downQueueId = currentData[downId].queueID;
            var upQueueID = currentData[upId].queueID;

            currentData[upId].queueID = downQueueId;
            currentData[downId].queueID = upQueueID;

            return currentData;
        }
    });

}

//on value change, update queue array

function logArray() {
    console.log(queueArray);
}

$(function() {

    database.ref("itemsInQueue").orderByChild("queueID").on("value", function(snapshot) {
        queueArray = [];
        snapshot.forEach(function(childSnapshot) {
            queueArray.push(childSnapshot.val());
        })
        qId = snapshot.numChildren();
        try {
            getFromDatabase(queueArray);
        } catch (error) {
            console.log(error);
        }

        logArray();
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    // addVideoToDatabase("asdfas", "Jonathan", "awesomeness", "Adele's Song");
})
