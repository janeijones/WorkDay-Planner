// elements selecting buttons and date 
var saveBtnEl = $('.btn')
var dateEl = $('#currentDay')

  
    var today = moment().format('dddd, MMMM Do'); 
    dateEl.text(today); //displaying date on page

    var actualTime = moment().hour(); //saving time to webpage
    
    $('.time-block').each(function(){
    
        var plannerTime = parseInt($(this).attr('id')); //planner string variable converted to int 
        
        if (plannerTime < actualTime)  //comparing planner time to actual time
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

    saveBtnEl.on("click", function() {   //on click button for all buttons 
        var timeId = $(this).parent().attr('id');         //getting time ID attr
        var textAreaVal = $(this).siblings('textarea').val(); //getting text area value 
        localStorage.setItem(timeId, textAreaVal);   // set item to local stroage
       });

        $('#9 textarea').val(localStorage.getItem('9')); //get item frm local storage
        $('#10 textarea').val(localStorage.getItem('10'));
        $('#11 textarea').val(localStorage.getItem('11'));
        $('#12 textarea').val(localStorage.getItem('12'));
        $('#13 textarea').val(localStorage.getItem('13'));
        $('#14 textarea').val(localStorage.getItem('14'));
        $('#15 textarea').val(localStorage.getItem('15'));
        $('#16 textarea').val(localStorage.getItem('16'));
        $('#17 textarea').val(localStorage.getItem('17'));

      