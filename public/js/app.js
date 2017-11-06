
// -- -- GLOBAL VARIABLES -- --

var userId = 1;

// -- -- EVENT HANDLERS -- --

// Materialize Datepicker
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 20, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false // Close upon selecting a date,
});

//When Save Button clicked, User form data udpated in db
$(document).on('click', '.save-user-btn', function(){

	var newData = $('#info').serializeArray();

  // send an AJAX POST-request with jQuery
  $.ajax({
  	url: "/api/user/"+userId, 
  	type: 'PUT',
  	data: newData,
  	// on success, run this callback
  	success: function(data) {
      updateUser();
      // tell the user we're adding a character with an alert window
      Materialize.toast('Info Updated', 2000);
    }
  });
});

// When card clicked, toggle to editor
$(document).on('click', '.card-display', function(){
	$(this).addClass('hide');
	$(this).next().removeClass('hide');
	Materialize.updateTextFields();
});

// -- -- GLOBAL FUNCTIONS -- -- 

//If user exists in database, populates the info fields
function updateUser(){

	$.get("/api/user/"+userId)

		.done(function(data){

			console.log(data);

			$('#user-card').html(`

				<div id="card1" class="card">
					
					<div class="card-content">
						<span class="card-title">Personal Info</span>
						
							<div class="row card-display center">			
								<p>${data.Name}</p>
								<p>${data.Street}</p>
								<p>${data.City}, ${data.State} ${data.Zip_Code}</p>
								<p>${data.Email}</p>
								<p>${data.Phone}</p>
							</div>	
			
							<div class="row card-editor hide">
								<form id="info" class="col s12">

									<div class="row">
										<div class="input-field col s12">
											<input value="${data.Name}" id="info-fullname" name="Name" type="text" class="validate">
											<label for="info-fullname">Full Name</label>
										</div>
									</div>

									<div class="row">
										<div class="input-field col s12">
											<input value="${data.Street}" id="info-street-address" name="Street" type="text" class="validate">
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
											<input value="${data.Zip_Code}" id="info-zipcode" name="Zip_Code" type="text" class="validate">
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
	})
};

// -- -- MAIN LOGIC -- --

updateUser();