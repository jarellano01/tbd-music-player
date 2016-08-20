$(function() {

		function resultThumb(imageUrl, videoTitle) {

			console.log(videoTitle);

    		var newDiv = $('<div class="newResults"><img src=' + imageUrl + '><p>' + videoTitle + '</p></div>');


            // $('#results').append(newDiv);

            	// var someImg = $("<img>");

            	// var imageTitle = $('<p>');

            	// someImg.attr('src', imageUrl);

            	// imageTitle.text(videoTitle);

            	// $('#newResults').append(someImg, imageTitle);

            	$('#results').append(newDiv);

        };

    var youtubeList;
    console.log(youtubeList);

   
    $('#searchBtn').on('click', function() {

    	
    	for (var i = 0; i < testArray.length; i++) {
    		var imageUrl = 'https://placeimg.com/300/150/any';

    		var testArray = ["bro", "yo", "hey"];

    		
			resultThumb(imageUrl, testArray[i]);

    	};
    		


        return false;

    });

});
