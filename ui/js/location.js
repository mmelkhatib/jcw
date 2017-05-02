//initialize Google Map//
function initMap() {
    var map = new google.maps.Map(document.getElementById('jcwMap'), {
        zoom: 15,
        center: {
            lat: 30.2653106,
            lng: -97.7422399999999
        },
        scrollwheel:  false
    });
    var geocoder = new google.maps.Geocoder();
    var service = new google.maps.places.PlacesService(map);
    var infowindow = new google.maps.InfoWindow();
    var markers = new Array();
    geocodeAddress(geocoder, map);


    function geocodeAddress(geocoder, resultsMap) {

        var boxLabels = 'ABCDEF';
        var markerLabels = 'ABCDEF';
        var labelindex = 0;
        var markerIndex = 0;
        var featuredAddress = $('.featured').find('.address').text();
        var featuredTitle = $('.featured').find('h3').text();
        var normalAddress = $('.hotel-inner');

        //alter the icon of the first address//
        var image = "ui/img/featured-hotel.png";


        normalAddress.each(function(index) {
			if(index == 0){
                  $(this).prepend('<span class="star-icon hidden-xs">' + boxLabels[labelindex++ % boxLabels.length] + '</span>');
                }
			else{
				$(this).prepend('<span class="circle hidden-xs">' + boxLabels[labelindex++ % boxLabels.length] + '</span>');
			}
            var address = $(this).find('.address').text();
            var place = $(this).find('h3').text();
            var placeid = place.place_id;
             $(this).attr('data-markerid', markerIndex++);


            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status === 'OK') {
                    var markerOptions = {
                      map: resultsMap,
                      title: place,
                      position: results[0].geometry.location,
                      label: markerLabels[labelindex++ % markerLabels.length],
                      formatted_address: results[0].formatted_address,

                      place: {
                          placeId: results[0].place_id,
                          location: results[0].geometry.location,
                    }
                  };
                if(index == 0){
                  markerOptions.icon= image;
                };

                 var marker = new google.maps.Marker(markerOptions);

                    markers.push(marker);

                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
                var mapLink = 'https://www.google.com/maps/place/' + encodeURIComponent(marker.title) + '/@' + marker.place.location.toUrlValue() + ',17z/';

				$("[data-markerid="+index+"]").children(".address").children("a").attr('href', mapLink);

                marker.addListener('click', function() {
                    map.setCenter(marker.getPosition())
                    infowindow.setContent('<div><strong>' + marker.label + ' | ' + marker.title + '</strong><br><span>' + marker.formatted_address + '</span><br>' +
                        '</div><a target="_blank" href="' + mapLink + '">Open in Google Maps</a>');
                    infowindow.open(map, this);
                });


            });


        });
        normalAddress.on('click', function() {
            google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
            $('.hotel-inner').removeClass('active');
            $(this).addClass('active');
        });
    }
}
