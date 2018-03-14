var database = firebase.database();
var name = "";
var destination = "";
var first = "";
var freq = "";


    // First Time (pushed back 1 year to make sure it comes before current time)
   





$(".btn-primary").on("click", function () {
    event.preventDefault();
    name = $("#name-input").val().trim();
    destination = $("#role-input").val().trim();
    first = $("#date-input").val().trim();
    freq = $("#rate-input").val().trim();
    randomFormat = "MM/DD/YYYY";
    


    var newTrain = {
        name: name,
        destination: destination,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
        first: first,
        freq: freq,
    }
    database.ref().push(newTrain);
    var firstTimeConverted = moment(first, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % freq;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = freq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    var nextTrain2 = moment(nextTrain).format("hh:mm");
    
    

    $("#name-input").val("");
    $("#role-input").val("");
    $("#date-input").val("");
    $("#rate-input").val("");
    database.ref().on("child_added", function (childSnapshot, prevChildKey) {
        console.log("ARRIVAL TIME2: " + moment(nextTrain).format("hh:mm"));
    
    
        console.log(childSnapshot.val());
    
        // Store everything into a variable.
        var tName = childSnapshot.val().name;
        var tDestination = childSnapshot.val().destination;
        var tFirst = childSnapshot.val().first;
        var tFreq = childSnapshot.val().freq;
    
    $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
    tFreq + "</td><td>" + nextTrain2 + "</td><td>" + tMinutesTillTrain + "</td></tr>");
    
        
    
        });
});



// var convertedDate = moment(date, randomFormat);
// console.log("con" + convertedDate)
// console.log(moment(convertedDate).toNow());
// console.log(moment(convertedDate).diff(moment(), "years"));
// console.log(moment(convertedDate).diff(moment(), "months"));



database.ref().on("child_added", function (childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log("CA" + childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().dateAdded);
    console.log(childSnapshot.val().first);
    console.log(childSnapshot.val().freq);
    // $("#train-table > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" +
    // freq + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");

    




    // full list of items to the well
    // $("#employee-table > tbody").append("<tr><td> " + childSnapshot.val().name).append("</td>" + childSnapshot.val().role).append("</td><td> " + childSnapshot.val().date).append("months").append(" </td><td> " + childSnapshot.val().rate).append("</td><td>" + "math" + "</td></tr>")
    // .append(moment(convertedDate).diff(moment(), "months"))


    // .append("math");
    // + "</tr>";

    //   " </span><span class='member-age'> " + childSnapshot.val().date +
    //   " </span><span class='member-comment'> " + childSnapshot.val().rate + " </span></div>");

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
 // First Time (pushed back 1 year to make sure it comes before current time)
//  var firstTimeConverted = moment(first, "HH:mm").subtract(1, "years");
//  console.log(firstTimeConverted);

//  // Current Time
//  var currentTime = moment();
//  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//  // Difference between the times
//  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//  console.log("DIFFERENCE IN TIME: " + diffTime);

//  // Time apart (remainder)
//  var tRemainder = diffTime % freq;
//  console.log(tRemainder);

//  // Minute Until Train
//  var tMinutesTillTrain = freq - tRemainder;
//  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 // Next Train
//  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//  console.log("aaARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
//     var firstTimeConverted = moment(first, "HH:mm").subtract(1, "years");
//     console.log(firstTimeConverted);

//     var nextTrain = moment().add(tMinutesTillTrain, "minutes");

//     // Current Time
//     var currentTime = moment();
//     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//     // Difference between the times
//     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//     console.log("DIFFERENCE IN TIME: " + diffTime);

//     // Time apart (remainder)
//     var tRemainder = diffTime % freq;
//     console.log(tRemainder);

//     // Minute Until Train
//     var tMinutesTillTrain = freq - tRemainder;
//     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

//     // Next Train
//     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

//     // Change the HTML to reflect

// });

        // database.ref().on("value", function(snapshot) {
           

        // });