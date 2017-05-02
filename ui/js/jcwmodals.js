//Contains all code related to creating the modal popups.

var advisoryComm = "https://spreadsheets.google.com/feeds/list/19s4K4dX5aEmT0mm8NgSmB6NIUvbQsLl1_qqupRBMs6c/1/public/basic?hl=en_US&alt=json";
var sponsors = "https://spreadsheets.google.com/feeds/list/19s4K4dX5aEmT0mm8NgSmB6NIUvbQsLl1_qqupRBMs6c/2/public/values?hl=en_US&alt=json";
var specialThanks = "https://spreadsheets.google.com/feeds/list/19s4K4dX5aEmT0mm8NgSmB6NIUvbQsLl1_qqupRBMs6c/3/public/basic?hl=en_US&alt=json";



//AJAX Functions

//Settings up the AJAX requests for each of the containers //
$.ajax({
    type: 'GET',
    url: advisoryComm,
    success: function(data) {
        //Instantiating Variables //
        var row = "";
        var title = "";
        var markup = ""; //default value of markup//
        if (data.feed.entry != undefined) {
            title = '<h3>' + data.feed.title.$t + '</h3>';
            var datalength = data.feed.entry.length;
            for (var i = 0; i < datalength; i++) {
                row = data.feed.entry[i].title.$t;
                //find subtitle
                if (data.feed.entry[i].title.$t === '<h3>Committee:</h3>') {
                    var nextSection = i + 1;
                    markup += '<div class="row"><div class="col-sm-6">';
                }
                //skip first section then start new column
                if (i === nextSection) {
                    markup += '<div class="row"><div class="col-sm-6">';
                    var halfway = datalength - i;
                    halfway = Math.floor(halfway / 2);
                }
                //find the middle and create second column
                if (halfway + nextSection === i) {
                    markup += '</div><div class="col-sm-6">';
                }
                markup += '<p class="small">' + row + '</p>';
            }
            markup += '</div></div>';
            $('#thanks-1').append(title, markup + '<p><br></p>');
        } else {
            $('#thanks-1').append('<p></p>')
        }
    }
});

$.ajax({
    type: 'GET',
    url: sponsors,
    success: function(data) {
        //Instantiating Variables //
        var markup = '';

        title = data.feed.title.$t;
        var datalength = data.feed.entry.length;
        for (var i = 0; i < datalength; i++) {
            var sponsorRow = data.feed.entry[i];
            var row = data.feed.entry[i].title.$t;
            var category = sponsorRow['gsx$category']['$t'];
            var catClass = category.replace(/\s+/g, '').toLowerCase();
            markup += '<p class="' + catClass + '">' + row + ' <span style="display:none">' + category + '</span></p>';
        }
        $('#sponsors .modal-header h2').append(title);
        $('#sponsors .modal-body').append(markup + '<p><br></p>');

        //Loops for creating the Sponsor Categories //
        var listItem = $("#sponsors .modal-body  p"); //fetch list item from "markup" above
        var bucket = {}; //instantiate object for storing categories

        $.each(listItem, function(i, item) { //Start loop for creating objects
            var row = $(item).find('span').text(); //fetch items by value inside span
            if (bucket[row] == null) {
                bucket[row] = new Array();
            }
            bucket[row].push(item);
        });

        $("#sponsors .modal-body").empty(); //Empty out the container created earlier.
        //start loop for appending the markup!
        $.each(bucket, function(i, item) {
            var header = $("<h3>" + i + "</h3>");
            var container = $("<div></div>");
            $(container).append(header); //header = category taken from the hidden span
            $(container).append(item); //item = each list item//
            $("#sponsors .modal-body").append(container); //dump it all in!

        });

    }
});


$.ajax({
    type: 'GET',
    url: specialThanks,
    success: function(data) {
        //Instantiating Variables //
        var row = "";
        var title = "";
        var markup = ""; //default value of markup//
        if (data.feed.entry != undefined) {
            title = '<h3>' + data.feed.title.$t + '</h3>';
            var datalength = data.feed.entry.length;
            for (var i = 0; i < datalength; i++) {
                row = data.feed.entry[i].title.$t;
                markup += '<p class="small">' + row + '</p>';
            }
            $('#thanks-3').append(title, markup);
        } else {
            $('#thanks-3').append('<p></p>');
        }
    }
});
