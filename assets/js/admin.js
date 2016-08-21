function getFromDatabase(queueArray){
	generateTable(queueArray)
}

function generateTable(queueArray) {
    $("#queue").empty();
    jQuery.each(queueArray, function(i, queueItem) {
        var newRow = $("<tr>");
        var tdTitle = $("<td>");
        tdTitle.text(queueItem.name);
        console.log(queueItem);

        var tdName = $("<td> ");
        tdName.text(queueItem.songTitle);

        var tdDedication = $("<td>");
        tdDedication.text(queueItem.shoutout);

        newRow.append(tdTitle).append(tdName).append(tdDedication);

        $("#queue").append(newRow);
    });
}
