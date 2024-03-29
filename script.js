// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function(){
    var hourBlock = $(this).parent().attr('id');
    var message = $(this).prev().val();
    localStorage.setItem(hourBlock, message);
  });
    
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var time = dayjs().format('HH');
  console.log(time);
  var timeblock = $('.container-lg').children('div');

  for(i = 0; i < timeblock.length; i++ ){
    var tbid = '#' + timeblock[i]['id'];
    var idnum = tbid.split('-');

    if(idnum[1] < time){
      //console.log('past');
      $(tbid).addClass('past');
  } else if (idnum[1] == time) {
      //console.log('present');
      $(tbid).addClass('present');
  }else if (idnum[1] > time ){
      //console.log('future');
      $(tbid).addClass('future');

  }
}
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for(i = 0; i < timeblock.length; i++ ){
    var getID = timeblock[i]['id'];
    //console.log(getID);
    var oldMessage = localStorage.getItem(getID);
    //console.log(oldInfo);
    if(oldMessage != null){
        $('#'+getID).children('textarea').val(oldMessage);
    }}
  // TODO: Add code to display the current date in the header of the page.
  var currentday = dayjs().format('MM/DD/YYYY');
  $('#currentDay').text(currentday);
  

});
