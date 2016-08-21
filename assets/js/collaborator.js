$(function() {

    function findYouTube(searchTerm) {
        var video = searchTerm;
        var videoArray;
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" + video + "&type=video&key=AIzaSyCmhc9fABzn9P5tCslboXz2AcF12NH38oM";

        $.ajax({
            url: queryURL,
            method: 'GET',
        }).done(function(response) {
            SetArray(response.items);
        });

        function SetArray(videoArray) {
            console.log(videoArray);
            printResults(videoArray);
        }

    }
    function resultThumb(imageUrl, videoTitle) {
        var newDiv = $('<div class="resultThumb col-xs-6"><img class="img-responsive" src=' + imageUrl + '><p>' + videoTitle + '</p></div>');

        $('#results').append(newDiv);
    };


    findYouTube("adele");

    $('#searchBtn').on('click', function() {
        var videoArray = ["bro", "yo", "hey"];
        printResults(videoArray);

        return false;
    });

    function printResults(videoArray) {
        $('#results').empty();
        for (var i = 0; i < 25; i++) {
            var imageUrl = 'https://placeimg.com/300/150/any';

            imageUrl=videoArray[i].snippet.thumbnails.medium.url;
            videoTitle = videoArray[i].snippet.title;


            resultThumb(imageUrl, videoTitle);
        };
    }

});
