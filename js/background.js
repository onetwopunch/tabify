$(document).ready(function () {
	
	bind_redirect = function() {
		var dont_redirect_anymore = false;
		chrome.tabs.onCreated.addListener(function(tab) {
			console.log(tab.url)
			if(tab.url == 'chrome://newtab/') {
				var url = localStorage.tabify_url;
				if(!url)
					url = "chrome://apps";
				chrome.tabs.update({url: url});
				dont_redirect_anymore = true;
				bind_redirect();
			}
		});
	}
	bind_redirect();
});

