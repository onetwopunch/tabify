$(document).ready(function() {
	
	if (localStorage.tabify_url) {
		$('#tabify-url').val(localStorage.tabify_url);
	}
	
	if (!localStorage.tabify_power) {
		localStorage.tabify_power = 'on';
	} 
	if (localStorage.tabify_power == 'on') {
		$('#power-text').html(localStorage.tabify_power);
		$('#tabify-power').removeClass('btn-danger')
		$('#tabify-power').addClass('btn-success');

	} else {
		$('#power-text').html(localStorage.tabify_power);
		$('#tabify-power').removeClass('btn-success')
		$('#tabify-power').addClass('btn-danger');
	}


	show_dialog = function() {
		chrome.windows.create({
	        url: '../dialog.html',
	        width: 300,
	        height: 200,
	        type: 'popup',
			top: (screen.height / 2) - 100,
			left: (screen.width / 2) - 150
		    });
	}
    
	start_with = function(string, substr) {
		return string.substring(0,substr.length) == substr;
	}
	add_http = function(text) {
		if( !start_with(text, "http") && !start_with(text, 'chrome')) {
			return 'http://' + text;
		} else {
			return text;
		}
	}

	set_url = function(elem) {
		var url = $(elem).val();
		localStorage.tabify_url = add_http(url);
		show_dialog();
	}


	$('#tabify-url').keyup(function(event) {
		if(event.keyCode ==13)
			set_url(this);
	});

	$('#tabify-set').click(function() {
		set_url($('#tabify-url'));
	});

	$('#tabify-reset').click(function() {
		var url = $('#tabify-url'); 	
	   	url.val("chrome://apps");
		set_url(url); 
	});

	$('#dialog-close').click(function() {
		chrome.windows.getLastFocused(function(win) {
			chrome.windows.remove(win.id);
		});
	});

	$('#tabify-power').click(function() {
		if(localStorage.tabify_power == 'on') {
			$(this).removeClass('btn-success');
			$(this).addClass('btn-danger');
			$('#power-text').html('off');
			localStorage.tabify_power = 'off';
		} else {
			console.log('this');
			$(this).removeClass('btn-danger');
			$(this).addClass('btn-success');
			$('#power-text').html('on');
			localStorage.tabify_power = 'on';
		}
		  
	});
});	

