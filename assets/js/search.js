// function search() {

// 	console.log('Search Started');
//   var apiKey = 'AIzaSyCr7L91URLBfmHfXeUiKPnUbmL0s9gikSY';
// 	var q = $('#query').val();

//     gapi.client.setApiKey(apiKey);
//     gapi.client.load('youtube', 'v3', function() {
//         isLoad = true;
//     }); 
// 	console.log('Search Request');

//     request = gapi.client.youtube.search.list({
// 		q: q,
//         part: 'id, snippet',
//         type: 'video',
//         order: 'date'
//      });


//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     var youtubeId = response.items[0].id.videoId
//     $('#search-container').html('<iframe width="420" height="345" src="https://www.youtube.com/embed/'+youtubeId+ '"></iframe>');
//     console.log(response);
//   });

// }
$('#search-button').on('click', function() {
	var searchTerm = $('#query').val()
	
	videoArray = findYouTube(searchTerm);

	console.log(videoArray);

})

function findYouTube(searchTerm){
	var video = searchTerm;
	var videoArray;
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" + video + "&key=AIzaSyCmhc9fABzn9P5tCslboXz2AcF12NH38oM";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
     
        return response.items;
    });

}






// $('#search-button').on('click', function(){

// 		// Here we grab the text from the input box 
// 		var video = $('#search-button').val();

// 		// Here we assemble our URL 
// 		var queryURL = "https://www.googleapis.com/youtube/v3/search" + movie ;


// 		$.ajax({url: queryURL,
// 					 method: 'GET'}).done(function(response) {

// 		}); 

// 		//------

// 		return false;
// 	})
