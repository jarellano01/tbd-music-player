$(function() {

		function resultThumb(imageUrl, videoTitle) {

    			var newDiv = $('<div>', { id: 'newResults', });

            //$('#results').append(newDiv);

            	var a = $("<img>");

            	var imageTitle = $('<p>');

            	a.attr('src', imageUrl);

            	imageTitle.text(videoTitle);

            	$('#newResults').append(a, imageTitle);

            	$('#results').append(newDiv);

            };

   
    $('#searchBtn').on('click', function() {

    	var imageUrl = 'https://placeimg.com/300/150/any';

    	var testArray = ["bro", "yo", "hey"];

    	for (var i = 0; i < testArray.length; i++) {
    		
			resultThumb(imageUrl, testArray[i]);

    	};
    		


        return false;

    });

});
