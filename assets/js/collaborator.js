$(function(){

	var newDiv = $('<div>', {id: 'newResults',})

		$('#searchBtn').on('click', function(){

       		$('#results').append(newDiv);

       		console.log(newDiv);

       	 	var a = $("<img>");

       	 	var imageUrl = 'https://placeimg.com/300/150/any';

       	 	a.attr('src', imageUrl);
       	 	a.attr('alt', 'Image') ;


       		$('#newResults').append(a);

       		return false;



		});

	});