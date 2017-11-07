var userId = 2;

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

