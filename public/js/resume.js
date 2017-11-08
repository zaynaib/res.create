
// -- -- GLOBAL VARIABLES -- --

var userId = 0;

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

// When card clicked, toggle to editor
$(document).on('click', '.card-display', function(){
	$(this).addClass('hide');
	$(this).next().removeClass('hide');
	Materialize.updateTextFields();
});

//When Save Button clicked, User form data udpated in db
$(document).on('click', '.save-btn', function(){

	var currentCard = $(this).data().value;
	var newData = $('#'+currentCard).serializeArray();

	if(currentCard === 'skills'){
		newData[0].value = $('#skills-area').val().replace(/\n/g,"<br>");
	}

	console.log('put data')
	console.log(newData);

  // send an AJAX PUT-request with jQuery
  $.ajax({
  	url: "/api/"+currentCard+"/"+userId, 
  	type: 'PUT',
  	data: newData,
  	// on success, run this callback
  	success: function(data) {
      	switch(currentCard){
      		case "user"	: 
      			Materialize.toast('User Info Updated', 2000);
      			refreshUser();
      			break;
      		
      		case "education": 
      			Materialize.toast('Education Info Updated', 2000);
      			refreshEducation();
      			break;

      		case "jobs": 
      			Materialize.toast('Employment Info Updated', 2000);
      			refreshEmployment();
      			break;

      		case "skills": 
      			Materialize.toast('Skills Info Updated', 2000);
      			refreshSkills();
      			break;			
      }
    }
  });
});

//When Create Button clicked, User form data udpated in db
$(document).on('click', '.create-btn', function(){

	var currentCard = $(this).data().value;
	var newData = $('#'+currentCard).serializeArray();
	console.log(newData);

	newData.push({'name':'ResumeId', 'value': userId});

  // send an AJAX PUT-request with jQuery
  $.ajax({
  	url: "/api/"+currentCard, 
  	type: 'POST',
  	data: newData,
  	// on success, run this callback
  	success: function(data) {
      	switch(currentCard){
      		case "user"	: 
      			Materialize.toast('User Info Updated', 2000);
      			refreshUser();
      			break;
      		
      		case "education": 
      			Materialize.toast('Education Info Updated', 2000);
      			refreshEducation();
      			break;

      		case "jobs": 
      			Materialize.toast('Employment Info Updated', 2000);
      			refreshEmployment();
      			break;

      		case "skills": 
      			Materialize.toast('Skills Info Updated', 2000);
      			refreshSkills();
      			break;			
      }
    }
  });
});

// -- -- GLOBAL FUNCTIONS -- -- 

//If user exists in database, populates the info fields
function refreshUser(){

	//adds user info card to DOM
	$.get("/api/user/"+userId)

		.done(function(data){

			if(data.Name===''){
				
				$('#user-card').html(`

					<div class="card">
						
						<div class="card-content">
							<span class="card-title">Personal Info</span>
							
								<div class="row card-display center">			
									<p>Click Here to Edit</p>
								</div>	
				
								<div class="row card-editor hide">
									<form id="user" class="col s12">

										<div class="row">
											<div class="input-field col s12">
												<input id="info-fullname" name="Name" value="${data.firstname + ' ' +data.lastname}" type="text" class="validate">
												<label for="info-fullname">Full Name</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s12">
												<input id="info-street-address" name="Street" type="text" class="validate">
												<label for="info-street-address">Street Address</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s6">
												<input id="info-city" name="City" type="text" class="validate">
												<label for="info-city">City</label>
											</div>
											<div class="input-field col s3">
												<input id="info-state" name="State" type="text" class="validate">
												<label for="info-state">State</label>
											</div>
											<div class="input-field col s3">
												<input id="info-zipcode" name="Zip_Code" type="text" class="validate">
												<label for="info-zipcode">ZIP Code</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s6">
												<input id="info-email" name="Email" type="text" value="${data.Email}" class="validate">
												<label for="info-email">Email Address</label>
											</div>
											<div class="input-field col s6">
												<input id="info-phone-number" name="Phone" type="text" class="validate">
												<label for="info-phone-number">Phone Number</label>
											</div>
										</div>
						
										<div class="row">
											<a class="waves-effect waves-light right save-btn btn" data-value="user"><i class="material-icons right">done</i>Save</a>
										</div>

									</form>
								</div>
							
						</div>
					</div>

				</div>
			`)

			}

			else{
				console.log(data);
				$('#user-card').html(`

					<div class="card">
						
						<div class="card-content">
							<span class="card-title">Personal Info</span>
							
								<div class="row card-display center">			
									<p>${data.Name}</p>
									<p>${data.Street}</p>
									<p>${data.City}, ${data.State} ${data.Zip_Code}</p>
									<p>${data.Email}</p>
									<p>${data.Phone}</p>
									<i class="material-icons right grey-text">edit</i>
								</div>	
				
								<div class="row card-editor hide">
									<form id="user" class="col s12">

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
											<a class="waves-effect waves-light right save-btn btn" data-value="user"><i class="material-icons right">done</i>Save</a>
										</div>

									</form>
								</div>
							
						</div>
					</div>

				</div>
			`)
		}
	})
};

function refreshEducation(){

	//adds education card to DOM
	$.get("/api/education/"+userId)

	.done(function(data){
		console.log('Education:');
		console.log(data);

			if(data.length===0){

				$('#education-card').html(`

					<div class="card">
						
						<div class="card-content">
							<span class="card-title">Education Info</span>
							
								<div class="row card-display center">			
									<p>Click Here to Edit</p>
								</div>	
				
								<div class="row card-editor hide">
								<form id="education" class="col s12">

									<div class="row">
										<div class="input-field col s12">
											<input id="education-schoolname" name="School_Name" type="text" class="validate">
											<label for="education-schoolname">School Name</label>
										</div>
									</div>

									<div class="row">
										<div class="input-field col s8">
											<input id="education-degree" name="Degree" type="text" class="validate">
											<label for="education-degree">Degree Earned</label>
										</div>
										<div class="input-field col s4">
											<input name="Graduation_Date" type="text" class="validate">
											<label for="education-graduationdate">Graduation Date</label>
										</div>
									</div>

									<div class="row">
										<a class="waves-effect waves-light right create-btn btn" data-value="education"><i class="material-icons right">done</i>Save</a>
									</div>

								</form>
							</div>

						</div>
					</div>
			`)

			}

			else{
				$('#education-card').html(`

					<div id="card-education" class="card">

						<div class="card-content">
							<span class="card-title">Education History</span>

							<div class="row card-display center">			
								<p>${data[0].School_Name}, ${data[0].Degree}, ${data[0].Graduation_Date}</p>
								<i class="material-icons right grey-text">edit</i>
							</div>	

							<div class="row card-editor hide">
								<form id="education" class="col s12">

									<div class="row">
										<div class="input-field col s12">
											<input value="${data[0].School_Name}" id="education-schoolname" name="School_Name" type="text" class="validate">
											<label for="education-schoolname">School Name</label>
										</div>
									</div>

									<div class="row">
										<div class="input-field col s8">
											<input value="${data[0].Degree}" id="education-degree" name="Degree" type="text" class="validate">
											<label for="education-degree">Degree Earned</label>
										</div>
										<div class="input-field col s4">
											<input value="${data[0].Graduation_Date}" name="Graduation_Date" type="text" class="validate">
											<label for="education-graduationdate">Graduation Date</label>
										</div>
									</div>

									<div class="row">
										<a class="waves-effect waves-light right save-btn btn" data-value="education"><i class="material-icons right">done</i>Save</a>
									</div>

								</form>
							</div>

						</div>
					</div>
				`);
			}
		})
	};

function refreshEmployment(){

		$.get("/api/jobs/"+userId)

		.done(function(data){
			console.log('Jobs:');
			console.log(data);

			if(data.length===0){
				$('#employment-card').html(`

					<div class="card">
						
						<div class="card-content">
							<span class="card-title">Employment Info</span>
							
								<div class="row card-display center">			
									<p>Click Here to Edit</p>
								</div>	
				
								<div class="row card-editor hide">
								<form id="jobs" class="col s12">

										<div class="row">
											<div class="input-field col s12">
												<input name="Company_Name" type="text" class="validate">
												<label>Company Name</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s12">
												<input name="Job_Title" type="text" class="validate">
												<label>Job Title</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s6">
												<input name="Start_Date" type="text" class="validate">
												<label>Start Date</label>
											</div>
											<div class="input-field col s6">
												<input name="End_Date" type="text" class="validate">
												<label>End Date</label>
											</div>
										</div>

									<div class="row">
										<a class="waves-effect waves-light right create-btn btn" data-value="jobs"><i class="material-icons right">done</i>Create</a>
									</div>

								</form>
							</div>

						</div>
					</div>
			`)
			}

			else{

					console.log("*****")
					console.log(data);

						$('#employment-card').html(`

						<div id="card-education" class="card">

							<div class="card-content">
								<span class="card-title">Employment History</span>

								<div class="row card-display center">			
									<p>${data[0].Company_Name}</p>
									<p>${data[0].Job_Title}</p>
									<p>${data[0].Start_Date} to ${data[0].End_Date}</p>
									<i class="material-icons right grey-text">edit</i>
								</div>	

								<div class="row card-editor hide">
									<form id="jobs" class="col s12">

										<div class="row">
											<div class="input-field col s12">
												<input value="${data[0].Company_Name}" name="Company_Name" type="text" class="validate">
												<label>Company Name</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s12">
												<input value="${data[0].Job_Title}" name="Job_Title" type="text" class="validate">
												<label>Job Title</label>
											</div>
										</div>

										<div class="row">
											<div class="input-field col s6">
												<input value="${data[0].Start_Date}" name="Start_Date" type="text" class="validate">
												<label>Start Date</label>
											</div>
											<div class="input-field col s6">
												<input value="${data[0].End_Date}" name="End_Date" type="text" class="validate">
												<label>End Date</label>
											</div>
										</div>

										<div class="row">
											<a class="waves-effect waves-light right save-btn btn" data-value="jobs"><i class="material-icons right">done</i>Save</a>
										</div>

									</form>
								</div>

							</div>
						</div>

					`);
				}
	})
};

function refreshSkills(){

	//adds skills card to DOM
	$.get("/api/skills/"+userId)

	.done(function(data){
		console.log('sklls')
		console.log(data)

		if(data.length===0){

			$('#skills-card').html(`

					<div class="card">
						
						<div class="card-content">
							<span class="card-title">Skills</span>
							
							<div class="row card-display center">			
								<p>Click Here to Edit</p>
							</div>	
			
							<div class="row card-editor hide">
								<form id="skills" class="col s12">

									<div class="row">
										<div class="input-field col s12">
											<textarea id="skills-area" name="Skills" class="materialize-textarea"></textarea>
				          		<label>Skills</label>
										</div>
									</div>

								<div class="row">
									<a class="waves-effect waves-light right create-btn btn" data-value="skills"><i class="material-icons right">done</i>Create</a>
								</div>

								</form>
							</div>

						</div>
					</div>
			`)
		}

		else{

			$('#skills-card').html(`

				<div id="card-skills" class="card">

					<div class="card-content">
						<span class="card-title">Skills</span>

						<div class="row card-display center">			
							<p>${data[0].Skills}</p>
							<i class="material-icons right grey-text">edit</i>
						</div>	

						<div class="row card-editor hide">
							<form id="skills" class="col s12">

								<div class="row">
									<div class="input-field col s12">
										<textarea id="skills-area" name="Skills" class="materialize-textarea">${data[0].Skills}</textarea>
			          		<label>Skills</label>
									</div>
								</div>

								<div class="row">
									<a class="waves-effect waves-light right save-btn btn" data-value="skills"><i class="material-icons right">done</i>Save</a>
								</div>

							</form>
						</div>

					</div>
				</div>
							
			`);
		}
	})
};

// -- -- MAIN LOGIC / INITIALIZATION-- --

//gets session id and initializes page
$.get("/sessionUserId")
.done(function(data){
		// console.log("auth:")
		// console.log(data);
		userId = data[0].id;
		console.log(userId);

		//creates a resume in db if none exists
		$.get("/api/resume/"+userId)
		.done(function(data){
			if(data.length === 0){
				$.post("/api/resume/"+userId)
			}
			console.log(data);
		})

	//populates forms	
	refreshUser();
	refreshEducation();
	refreshEmployment();
	refreshSkills();

})