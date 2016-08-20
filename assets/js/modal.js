$("#trigger-modal").on('click', function() {
    // trigger modal
    generateModal("hello", "281101");

});

$("#submit-song").on('click', function() {



    var name = $('#nameinput').val().trim();
    var dedication = $('#dedicateinput').val().trim();
    // var title= $("#youTitle").val();
    var youID= $("#youtubeID").val();
    addVideoToDatabase(youID, name, dedication);



})

function generateModal(youTitle, youtubeID) {
    // add hidden youtube shit
    // var title from hidden value. 
    // var youtubeID
    $("#youTitle").val("adele");
    $("#youtubeID").val("858420");

    console.log(youtubeID);
    addVideoToDatabase("Fde24313", "Jonathan", "he is awesome");




    $("#modal-id").modal()

}
