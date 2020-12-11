                    // When the window has finished loading create our google map below
                    google.maps.event.addDomListener(window, 'load', init);

                    function init() {
						'use strict'; // use strict mode
						
                        // Basic options for a simple Google Map
                        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                        var myLatlng = new google.maps.LatLng(40.712784,-74.005941);

                        var mapOptions = {
                            // How zoomed in you want the map to start at (always required)
                            zoom: 12,
                            disableDefaultUI: false,
							scrollwheel: false,

                            // The latitude and longitude to center the map (always required)

                            center: myLatlng, // New York

                            // How you would like to style the map. 
                            // This is where you would paste any style found on Snazzy Maps.
                            styles: [{"stylers":[{"hue":"#05315c"},{"visibility":"on"},{"invert_lightness":true},{"saturation":40},{"lightness":10}]}]
                        };

                        // Get the HTML DOM element that will contain your map 
                        // We are using a div with id="map" seen below in the <body>
                        var mapElement = document.getElementById('map-2');

                        // Create the Google Map using out element and options defined above
                        var map = new google.maps.Map(mapElement, mapOptions);

                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            map: map,
							icon: 'img/map-marker.png',
                            title: 'Your item position'
                        });

                    }
