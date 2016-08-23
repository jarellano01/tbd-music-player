function getFromDatabase(queueArray) {
    generateTable(queueArray)
}

function generateTable(queueArray) {
    $("#queue").empty();
    jQuery.each(queueArray, function(i, queueItem) {
        var newRow = $("<tr>");
        newRow.attr('class', 'selector')


        var tdTitle = $("<td>");
        tdTitle.text(queueItem.name);
        console.log(queueItem);

        var tdName = $("<td>");
        tdName.text(queueItem.songTitle);

        var tdDedication = $("<td>");
        tdDedication.text(queueItem.shoutout);

        newRow.append(tdTitle).append(tdName).append(tdDedication);

        $("#queue").append(newRow);
        // test the ability to grab item from queue list. check console.log

        $(".selector").on('click', function() {
           
           var testing = $(this).queueItem
           console.log(testing);
           selectRow(this);

        });


    });

function selectRow(selectedRow){

    $(".selector").attr("class", "selector");
    $(selectedRow).attr("class", "selector active");
}

$("#delete-song").click(function(){
    console.log($(".active"))
})


// SELECT ROW FUNCTION 
}
