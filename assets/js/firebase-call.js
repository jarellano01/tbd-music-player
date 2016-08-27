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


function addVideoToDatabase(youtubeId, name, dedication, title) {
    var queue = firebase.database().ref('itemsInQueue');
    queue.transaction(function(currentData) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        if (currentData === null) {
            return currentData;
        } else {
            var numObjects = Object.keys(currentData).length;
            currentData[numObjects] = { "itemId": numObjects, "queueID": numObjects, "name": name, "title": title, "id": youtubeId, "dedication": dedication, played: false};
            currentData.numItems = numObjects;
            return currentData;
        }
    });

}

function videoPlayed(itemId) {
    var queue = firebase.database().ref('itemsInQueue');
    queue.transaction(function(currentData) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        if (currentData === null) {
            return currentData;
        } else {
            currentData[itemId].played = true;
            return currentData;
        }
    });
}

function swap(upId, downId) {
    var queue = firebase.database().ref('itemsInQueue');
    queue.transaction(function(currentData) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        if (currentData === null) {
            return currentData;
        } else {

            var downQueueId = currentData[downId].queueID;
            var upQueueID = currentData[upId].queueID;

            currentData[upId].queueID = downQueueId;
            currentData[downId].queueID = upQueueID;

            return currentData;
        }
    });

}

function resetQueued(){
    database.ref("itemsInQueue").set({
        numItems: 0
    }).then(function(){
        window.location = "collaborator.html";
    });
}

function resetPlayed(){
        var queue = firebase.database().ref('itemsInQueue');
    queue.transaction(function(currentData) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        if (currentData === null) {
            return currentData;
        } else {
            console.log(currentData);

            var numObjects = Object.keys(currentData).length;
            console.log(numObjects);
            for(i = 1; i < numObjects; i++)
            {
                console.log(currentData[i]);
                currentData[i].played = false;
            }
            return currentData;
        }
    },
    function(){
        window.location = "index.html";
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

            if(!childSnapshot.val().played)
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

})
