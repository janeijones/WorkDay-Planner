// save the user input to local storage using the save button - eventListener - onlick 
// function save:
// setItem - saves to local storage - using dom traversal 

//select id from text area - getItem - persisted data 

// update color based on time of day - div using class

// if past - gray, else if - current red , else - future green .addClassList .removeClassList 2. moment(); comparison 

var saveBtnEl = $('.btn')

  
    var today = moment().format('dddd, MMMM Do');
    dateEl.text(today);

    var actualTime = moment().hour();
    
    $('.time-block').each(function(){
    
        var plannerTime = parseInt($(this).attr('id')); //planner string variable
         console.log(plannerTime)
        console.log(actualTime + "actual time");
        
        if (plannerTime < actualTime)
        {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (plannerTime === actualTime)
        {
            $(this).addClass('present');
            $(this).removeClass('future');
            $(this).removeClass('past');
        }
        else {
            
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('past');
        }
    
 
    }); 

    saveBtnEl.on("click", function() {
        
       });
