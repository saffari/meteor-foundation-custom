Package.describe({
	summary : "ZURB Foundation repackaged for Meteor, including compiled CSS."
});

Package.on_use(function(api) {

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

	// Images
	api.add_files('/lib/foundation.custom/images/foundation/orbit/bullets.jpg', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/left-arrow-small.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/left-arrow.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/loading.gif', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/mask-black.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/pause-black.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/right-arrow-small.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/right-arrow.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/rotator-black.png', 'public');
	api.add_files('/lib/foundation.custom/images/foundation/orbit/timer-black.png', 'public');

});
