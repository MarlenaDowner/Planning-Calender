//Link HTML elements to JS
var currentDayE1 = $('#currentDay');

//Need to make the boxes highlight depending on pass present or future

let rows = document.getElementById("time");

//displaying the date at the top of the page 
//NOTE: Decided to put the time and the date considering its a planner.
//NOTE: In the UK we display the date as Monday 13th December (dddd Do MMMM),for this assessment I have kept to this format rather then the US format

function lead() {
    var rightNow = moment().format('dddd Do MMMM [at] hh:mm:ss a');
    currentDayE1.text(rightNow);
  }
  
  setInterval(lead, 1);


//Save the event in local storage when the save button is clicked in that timeblock.

//action button so when clickec ALL save-btn are proceed
//NOTE to self: To make the saveBtn work rather then adding an ID to the HTML added the saveBTn within the button class.

$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        alert("Its working");
    })

})
















// var saveButtonE1 = $("#save-btn");
// console.log(saveButtonE1);



// var saveButtonE1 = document.getElementById("save-btn");
// console.log(saveButtonE1);

// saveButtonE1.on('click', function () {
//     alert("hi");
// })


// var saveButtonE1 = document.querySelector("#save-btn");
// console.log(saveButtonE1);


// function saveButtonE1() {
//     alert("hi");
//     console.log(saveButtonE1);
// }
