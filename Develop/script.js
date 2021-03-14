// save the user input to local storage using the save button - eventListener - onlick 
// function save:
// setItem - saves to local storage - using dom traversal 

//select id from text area - getItem - persisted data 

// update color based on time of day - div using class

// if past - gray, else if - current red , else - future green .addClassList .removeClassList 2. moment(); comparison 

var dateEl = $('#currentDay');
var textAreaEl = $('
var timeEl =

function displayDate() {    // function to show date at top of page
    var today = moment().format('dddd, MMMM Do');
    dateEl.text(today);
}

    var actualTime = moment().format('h');
    
//   var plannerTime = textAreaEl.dataset.time;
//     console.log(plannerTime);

//     if (plannerTime < actualTime)
//     {
//         textAreaEl.addClass('past');
//         textAreaEl.removeClass('future');
//         textAreaEl.removeClass('present');
//     }
//     else if (plannerTime === actualTime)
//     {
//         textAreaEl.addClass('present');
//         textAreaEl.removeClass('future');
//         textAreaEl.removeClass('past');
//     }
//     else 
//     {
//         textAreaEl.addClass('future');
//         textAreaEl.removeClass('past');
//         textAreaEl.removeClass('present');
//     }
    
    








setInterval(displayDate, 1000);

