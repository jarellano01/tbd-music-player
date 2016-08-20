$(function() {

    function findYouTube(searchTerm) {
        var video = searchTerm;
        var videoArray;
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" + video + "&key=AIzaSyCmhc9fABzn9P5tCslboXz2AcF12NH38oM";
        console.log(queryURL);
        
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).done(function(response) {
            SetArray(response.items);
        });

    }

    function SetArray(videoArray){
        console.log(videoArray);
    }

    findYouTube();

})
