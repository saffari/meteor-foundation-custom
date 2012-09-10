Package.describe({
	summary : "ZURB Foundation repackaged for Meteor, including compiled CSS."
});

Package.on_use(function(api) {
	
	api.use('jquery', 'client');

	// Javascript
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.accordion.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.alerts.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.buttons.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.forms.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.mediaQueryToggle.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.navigation.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.orbit.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.reveal.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.tabs.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.foundation.tooltips.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/jquery.placeholder.js', 'client');
	api.add_files('/lib/foundation.custom/javascripts/modernizr.foundation.js', 'client');

	// Stylesheets
	api.add_files('/lib/foundation.custom/stylesheets/foundation.css', 'client');
});
