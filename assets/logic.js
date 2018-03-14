var database = firebase.database();


$(".btn-primary").on("click", function (event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();
    var destination = $("#role-input").val().trim();
    var first = $("#date-input").val().trim();
    var freq = $("#rate-input").val().trim();
    


    var newTrain = {
        name: name,
        destination: destination,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
        first: first,
        freq: freq,
    }
    database.ref().push(newTrain);
    $("#name-input").val("");
    $("#role-input").val("");
    $("#date-input").val("");
    $("#rate-input").val("");

});
    database.ref().on("child_added", function(childSnapshot, prevChildKey){
    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFirst = childSnapshot.val().first;
    var tFreq = childSnapshot.val().freq;
        var firstTimeConverted = moment(tFirst, "HH:mm").subtract(1, "years");

    // Current Time
    var currentTime = moment();

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % tFreq;

    // Minute Until Train
    var tMinutesTillTrain = tFreq - tRemainder;

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
    tFreq + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
    

    });

   