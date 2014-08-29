$(document).ready(function() {
	
	if (localStorage.tabify_url) {
		$('#tabify-url').val(localStorage.tabify_url);
	}
	
	$('#tabify-url').keyup(function(event) {
		if(event.keyCode ==13) {
			var url = $(this).val();
			localStorage.tabify_url = url;
			chrome.tabs.executeScript({
				code: 'alert("Now when you open a new tab, " + localStorage.tabify_url + " will open.");'
			});	
			chrome.tabs.update({ active: true });
		}
	});

});	

