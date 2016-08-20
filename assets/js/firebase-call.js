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

    database.ref("test").push({
			clickCount: "clickCounter"
		});
})
