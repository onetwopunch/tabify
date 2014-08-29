$(document).ready(function () {
	chrome.tabs.onCreated.addListener(function(tab) {
		console.log(tab.url)
		if(tab.url == 'chrome://newtab/' && localStorage.tabify_power == 'on') {
			var url = localStorage.tabify_url;
			if(!url)
				url = "chrome://apps";
			chrome.tabs.update({url: url});
		}
	});
});

