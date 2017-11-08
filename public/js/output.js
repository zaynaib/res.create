var userId = 0;

function refreshUser(){
	$.get("/api/user/"+userId)
	.done(function(data){
		$('#user-name').text(data.Name);
		$('#user-street').text(data.Street);
		$('#user-city').text(data.City);
		$('#user-zipcode').text(data.Zip_Code);
		$('#user-email').text(data.Email);
		$('#user-phone').text(data.Phone);
		$('#user-website').text(data.Website);
	});
}

function refreshSkills(){
	$.get("/api/skills/"+userId)
	.done(function(data){
		$('#skills-skills').append(`<li>${data[0].Skills.replace(/<br>/g,"</li><li>")}</li>`);
	});
}

function refreshJobs(){
	$.get("/api/jobs/"+userId)
	.done(function(data){
		$('#employment-company-name').text(data[0].Company_Name);
		$('#employment-job-title').text(data[0].Job_Title);
		$('#employment-start-date').text(data[0].Start_Date);
		$('#employment-end-date').text(data[0].End_Date);
	});
}		

function refreshEducation(){
	$.get("/api/education/"+userId)
	.done(function(data){
		$('#education-school-name').text(data[0].School_Name);
		$('#education-degree').text(data[0].Degree);
		$('#education-end-date').text(data[0].End_Date);
	});		
}

// -- -- MAIN LOGIC AND INITIALIZATION -- --

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
	refreshJobs();
	refreshSkills();

})