$(document).ready(function() {
	
	if (localStorage.tabify_url) {
		$('#tabify-url').val(localStorage.tabify_url);
	}
	
	$('#tabify_url').keyup(function(event) {
		if(event.keyCode ==13) {
			var url = $(this).val();
			localStorage.tabify_url = url;
			alert("Now when you open a new tab, " + localStorage.tabify_url + " will open.");
		}
	});

});	

