$("#trigger-modal").on('click', function() {
    // trigger modal
    generateModal("hello", "281101");

});

$("#submit-song").on('click', function() {
    var name = $('#nameinput').val().trim();
    var dedication = $('#dedicateinput').val().trim();
    var title= $("#youTitle").val();
    var youID= $("#youtubeID").val();
    addVideoToDatabase(youID, name, dedication, title);

    $('#nameinput').val("");
    $('#dedicateinput').val('');

})


function generateModal(youTitle, youtubeID) {
    $("#youTitle").val(youTitle);
    $("#youtubeID").val(youtubeID);

    $("#modal-id").modal()
}
