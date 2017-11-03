var testData = [{name: "full-name", value: "Mr Hats"},
{name: "street-address", value: "Hat Street"},
{name: "city", value: "Hat City"},
{name: "state", value: "IL"},
{name: "name", value: "60647"}];

// -- -- Event Handlers -- --

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 20, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false // Close upon selecting a date,
});

$('.save-btn').click( function(){

	var newData = $('#info').serializeArray();

  // send an AJAX POST-request with jQuery
  $.post("/api/user", newData)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding data...");
    });

	console.log($('#info').serializeArray());

});


