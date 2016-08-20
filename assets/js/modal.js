$("#trigger-modal").on('click', function() {
            // trigger modal
            generateModal("hello", "281101");

            });

$("#submit-song").on('click', function (){



  var song = $(this).id
            var name = $('#nameinput').val().trim();
            var dedication = $('#dedicateinput').val().trim();



})

function generateModal(youTitle, youtubeID) {
  // add hidden youtube shit
  // var title from hidden value. 
  // var youtubeID
  var youTitle = $("#youTitle").val().trim();
  var youtubeID =$("#youtubeID").val().trim();

  console.log(youtubeID);




$("#modal-id").modal()

}