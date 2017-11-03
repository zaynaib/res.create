$(document).ready(function() {

var nameInput = $('#fullname');
var addressInput = $('#streetaddress');
var cityinput = $('#city');
var stateInput = $('#state');
var zipcodeInput = $('#zipcode');

$('bioSaveBtn');
// Bio save button id #biosavebtn

var schoolName = $('#ed1-name');
var degree = $('#ed1-degree');
var edAddress = $('#ed1-streetaddress');
var edCity = $('edcity');
var edState = $('edstate');
var edZip = $('edzipcode');

$('edSaveBtn');

 // Adding event listeners to the form to create a new object after save is clicked
  $(document).on("done", ".col s12", bioSave);
  $(document).on("done", ".col s12", eduSave);


  function bioSave(){
    event.preventDefault();

    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim() || 
        !addressInput.val().trim().trim() ||
        !cityInput.val().trim().trim() ||
        !stateInput.val().trim().trim() ||
        !zipcodeInput.val().trim().trim()
    ) {
        return;
        }
  }

  function eduSave(){
    event.preventDefault();

  }

})