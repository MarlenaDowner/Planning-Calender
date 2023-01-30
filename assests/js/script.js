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
