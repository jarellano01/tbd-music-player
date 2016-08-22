  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyCv7xBTitrjB5fjlMOdoMLv1Uyqd9NhZMg",
      authDomain: "tbd-music.firebaseapp.com",
      databaseURL: "https://tbd-music.firebaseio.com",
      storageBucket: "tbd-music.appspot.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var adaRankRef = firebase.database().ref('itemsInQueue');
  adaRankRef.transaction(function() {
      // If users/ada/rank has never been set, currentRank will be `null`.

      adaRankRef.push({queueId: 1, Name: "Jonathan", id: "1242332", dedication: "shoutout"});
      console.log(adaRankRef.val());
      return ;
  });



