Package.describe({
	summary : "ZURB Foundation repackaged for Meteor, including compiled CSS."
});

Package.on_use(function(api) {
	api.use('jquery', 'client');
	api.add_files([
		'foundation/js/modernizr.foundation.js', 
		'foundation/js/jquery.placeholder.js', 
		'foundation/js/jquery.foundation.accordion.js', 
		'foundation/js/jquery.foundation.alerts.js', 
		'foundation/js/jquery.foundation.buttons.js', 
		'foundation/js/jquery.foundation.forms.js', 
		'foundation/js/jquery.foundation.mediaQueryToggle.js', 
		'foundation/js/jquery.foundation.navigation.js', 
		'foundation/js/jquery.foundation.orbit.js', 
		'foundation/js/jquery.foundation.reveal.js', 
		'foundation/js/jquery.foundation.tabs.js', 
		'foundation/js/jquery.foundation.tooltips.js', 
		'foundation/css/foundation.css']
		, 'client');
});
