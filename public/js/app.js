var testData = [{name: "full-name", value: "Mr Hats"},
{name: "street-address", value: "Hat Street"},
{name: "city", value: "Hat City"},
{name: "state", value: "IL"},
{name: "name", value: "60647"}];

var userID = 1;

// -- -- Event Handlers -- --

// Materialize Datepicker
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 20, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false // Close upon selecting a date,
});

//When Save Button clicked, User form data added to db
$('.save-user-btn').click( function(){

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

	//console.log($('#info').serializeArray());

});

//If user exists in database, populates the info fields

$.get("/api/user/"+userID)

	.done(function(data){

		console.log(data);

		$('#body-container').html(`
			<div id="card1" class="card">
			
				<div class="card-content">
					<span class="card-title">Personal Info</span>

						<div class="row">
							<form id="info" class="col s12">

								<div class="row">
									<div class="input-field col s12">
										<input value="${data.Name}" id="info-fullname" name="Name" type="text" class="validate">
										<label for="info-fullname">Full Name</label>
									</div>
								</div>

								<div class="row">
									<div class="input-field col s12">
										<input value="${data.Address}" id="info-street-address" name="Address" type="text" class="validate">
										<label for="info-street-address">Street Address</label>
									</div>
								</div>

								<div class="row">
									<div class="input-field col s6">
										<input value="${data.City}" id="info-city" name="City" type="text" class="validate">
										<label for="info-city">City</label>
									</div>
									<div class="input-field col s3">
										<input value="${data.State}" id="info-state" name="State" type="text" class="validate">
										<label for="info-state">State</label>
									</div>
									<div class="input-field col s3">
										<input value="${data.Zipcode}" id="info-zipcode" name="Zipcode" type="text" class="validate">
										<label for="info-zipcode">ZIP Code</label>
									</div>
								</div>

								<div class="row">
									<div class="input-field col s6">
										<input value="${data.Email}" id="info-email" name="Email" type="text" class="validate">
										<label for="info-email">Email Address</label>
									</div>
									<div class="input-field col s6">
										<input value="${data.Phone}" id="info-phone-number" name="Phone" type="text" class="validate">
										<label for="info-phone-number">Phone Number</label>
									</div>
								</div>
				
								<div class="row">
									<a class="waves-effect waves-light right save-user-btn btn"><i class="material-icons right">done</i>Save</a>
								</div>

							</form>
						</div>
					
				</div>
			</div>

		</div>
	`);
});


