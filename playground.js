/**
 * This HTML Playground is distributed with the Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
 * license. Simply put, it means you can share and adapt it as much as you want, as well as use it for commercial
 * projects, as long as you thank me, and distribute the resulting work under the same license.
 *
 * @see <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license</a>
 */
"use strict";

// Create a private scope for our code
(function($) {

	// The playground code
	var playground = {

		// Attach our link handler to items in this container
		initializeLinks: function(container) {
			// Select all the links
			var $links = container.find('a');

			// And the content area
			var $content = $('#content');

			// Create a click handler function
			var clickHandler = function() {

				// Wrap this in jQuery
				var $this = $(this);

				// Get the link destination URL
				var url = $this.attr('href');

				// If it begins with # and ends with .html, it's a cue for us to pick it up
				if( url.substr(0, 1)==='#' && url.substr(-5)==='.html' ) {

					// Load the content of the URL to the content area
					$content.load(url.substr(1), function() {
						// Initialize the links in the content area as well
						playground.initializeLinks( $('#content') );
					});

					// Prevent default action of this click
					return false;
				}
			};

			// Attach an on-click handler to the links
			$links.click(clickHandler);
		}
	};

	// Wait for the document to be fully loaded
	$(document).ready(function() {

		// Then initialize the links on the page
		playground.initializeLinks( $('body') );

	});

})(jQuery);
