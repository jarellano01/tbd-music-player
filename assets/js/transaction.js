  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyCv7xBTitrjB5fjlMOdoMLv1Uyqd9NhZMg",
      authDomain: "tbd-music.firebaseapp.com",
      databaseURL: "https://tbd-music.firebaseio.com",
      storageBucket: "tbd-music.appspot.com",
  };
  firebase.initializeApp(config);

  // var database = firebase.database();
  var adaRankRef = firebase.database().ref('itemsInQueue');
  adaRankRef.transaction(function(currentData) {
      // If users/ada/rank has never been set, currentRank will be `null`.
      if(currentData === null){
        return currentData;
      }
      else{
        var numObjects = Object.keys(currentData).length;
        console.log(Object.keys(currentData).length);
        adaRankRef.push({queueId: numObjects, Name: "Jonathan", id: "1242332", dedication: "shoutout"});
        

        return;
      }
      
  });


// var adaRankRef = firebase.database().ref('users/ada/rank');
// adaRankRef.transaction(function(currentRank) {
//   // If users/ada/rank has never been set, currentRank will be `null`.
//   console.log(currentRank);
//   return currentRank + 1;
// });
// var adaRef = firebase.database().ref('users/ada');
// adaRef.transaction(function(currentData) {
//   console.log(currentData);
//   if (currentData === null) {
//     return { name: { first: 'Ada', last: 'Lovelace' } };
//   } else {
//     console.log('User ada already exists.');
//     return; // Abort the transaction.
//   }
// }, function(error, committed, snapshot) {
//   if (error) {
//     console.log('Transaction failed abnormally!', error);
//   } else if (!committed) {
//     console.log('We aborted the transaction (because ada already exists).');
//   } else {
//     console.log('User ada added!');
//   }
//   console.log("Ada's data: ", snapshot.val());
// });


