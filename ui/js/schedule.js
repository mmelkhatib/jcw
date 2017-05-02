// JavaScript Document
var thursdayData ="https://spreadsheets.google.com/feeds/list/1m-ln_QmMLW23tvmUfWbSagkZ43RNzVEj8yzSBi5Bf6I/1/public/values?hl=en_US&alt=json";
var fridayData ="https://spreadsheets.google.com/feeds/list/1m-ln_QmMLW23tvmUfWbSagkZ43RNzVEj8yzSBi5Bf6I/2/public/values?hl=en_US&alt=json";
var saturdayData ="https://spreadsheets.google.com/feeds/list/1m-ln_QmMLW23tvmUfWbSagkZ43RNzVEj8yzSBi5Bf6I/3/public/values?hl=en_US&alt=json";
var sundayData ="https://spreadsheets.google.com/feeds/list/1m-ln_QmMLW23tvmUfWbSagkZ43RNzVEj8yzSBi5Bf6I/4/public/values?hl=en_US&alt=json";


$.getJSON(thursdayData)
    .done(function(response) {
		var numberOfEvents = response.feed.entry.length;
		var eventRow = '';
		for(i=0; i<numberOfEvents; i++){
      var eventName = response.feed.entry[i].title.$t;
      var eventContent = response.feed.entry[i];
      var eventurl = eventContent['id']['$t'];
      var eventId = "thurs"+eventurl.substr(eventurl.length - 5);
      var startTime = eventContent['gsx$starttime']['$t'];
      var endTime = eventContent['gsx$endtime']['$t'];
      var people = eventContent['gsx$panelists']['$t'];
      var description = eventContent['gsx$description']['$t'];
      var location = eventContent['gsx$location']['$t'];
      var price = eventContent['gsx$price']['$t'];
      var iconClass = eventName.toLowerCase();
      if(eventName == "Hospitality" || eventName == "Registration" || eventName == "Mass"){
        eventRow += '<div class="row  event icon"><div class="col-xs-12 col-sm-2 time '+iconClass+' ">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 title">'+eventName+'</div><div class="col-xs-12 col-sm-3">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
			} else if(description === "") {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      } else {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><a href="#'+eventId+'" data-toggle="collapse"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description collapse" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      }

		}
			$('#thursday').append(eventRow);
    });
$.getJSON(fridayData)
    .done(function(response) {
	var numberOfEvents = response.feed.entry.length;
		var eventRow = '';
		for(i=0; i<numberOfEvents; i++){
			var eventName = response.feed.entry[i].title.$t;
			var eventContent = response.feed.entry[i];
      var eventurl = eventContent['id']['$t'];
      var eventId = "fri"+eventurl.substr(eventurl.length - 5);
			var startTime = eventContent['gsx$starttime']['$t'];
			var endTime = eventContent['gsx$endtime']['$t'];
			var people = eventContent['gsx$panelists']['$t'];
			var description = eventContent['gsx$description']['$t'];
			var location = eventContent['gsx$location']['$t'];
			var price = eventContent['gsx$price']['$t'];
      var iconClass = eventName.toLowerCase();
      if(eventName == "Hospitality" || eventName == "Registration" || eventName == "Mass"){
        eventRow += '<div class="row  event icon"><div class="col-xs-12 col-sm-2 time '+iconClass+' ">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 title">'+eventName+'</div><div class="col-xs-12 col-sm-3">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      } else if(description === "") {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      } else {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><a href="#'+eventId+'" data-toggle="collapse"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description collapse" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';

      }
		}
			$('#friday').append(eventRow);
	});

$.getJSON(saturdayData)
    .done(function(response) {
		var numberOfEvents = response.feed.entry.length;
		var eventRow = '';
		for(i=0; i<numberOfEvents; i++){
      var eventName = response.feed.entry[i].title.$t;
      var eventContent = response.feed.entry[i];
      var eventurl = eventContent['id']['$t'];
      var eventId = "sat"+eventurl.substr(eventurl.length - 5);
      var startTime = eventContent['gsx$starttime']['$t'];
      var endTime = eventContent['gsx$endtime']['$t'];
      var people = eventContent['gsx$panelists']['$t'];
      var description = eventContent['gsx$description']['$t'];
      var location = eventContent['gsx$location']['$t'];
      var price = eventContent['gsx$price']['$t'];
      var iconClass = eventName.toLowerCase();
      var iconClass = eventName.toLowerCase();
      if(eventName == "Hospitality" || eventName == "Registration" || eventName == "Mass"){
        eventRow += '<div class="row  event icon"><div class="col-xs-12 col-sm-2 time '+iconClass+' ">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 title">'+eventName+'</div><div class="col-xs-12 col-sm-3">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      } else if(description === "") {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      } else {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><a href="#'+eventId+'" data-toggle="collapse"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description collapse" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      }
    }
			$('#saturday').append(eventRow);
	});

$.getJSON(sundayData)
    .done(function(response) {
    var numberOfEvents = response.feed.entry.length;
		var eventRow = '';
		for(i=0; i<numberOfEvents; i++){
      var eventName = response.feed.entry[i].title.$t;
      var eventContent = response.feed.entry[i];
      var eventurl = eventContent['id']['$t'];
      var eventId = "sun"+eventurl.substr(eventurl.length - 5);
      var startTime = eventContent['gsx$starttime']['$t'];
      var endTime = eventContent['gsx$endtime']['$t'];
      var people = eventContent['gsx$panelists']['$t'];
      var description = eventContent['gsx$description']['$t'];
      var location = eventContent['gsx$location']['$t'];
      var price = eventContent['gsx$price']['$t'];
      var iconClass = eventName.toLowerCase();
      if(eventName == "Hospitality" || eventName == "Registration" || eventName == "Mass"){
        eventRow += '<div class="row  event icon"><div class="col-xs-12 col-sm-2 time '+iconClass+' ">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 title">'+eventName+'</div><div class="col-xs-12 col-sm-3">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
			} else if(description === "") {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      }
      else {
        eventRow += '<div class="row event"><div class="col-xs-12 col-sm-2 time">'+startTime+' - '+endTime+'</div><div class="col-xs-12 col-sm-6 event-info"><a href="#'+eventId+'" data-toggle="collapse"><div class="title">'+eventName+'</div></a><div class="speaker">'+people+'</div><div class="description collapse" id="'+eventId+'">'+description+'</div></div><div class="col-xs-12 col-sm-3 location">'+location+'</div><div class="col-xs-12 col-sm-1 price">'+price+'</div></div>';
      }
    }
			$('#sunday').append(eventRow);
	});



//Make the Weekday bar sticky//
  navtop = $('#day-toggle').offset().top;
  console.log(navtop);

$(window).scroll(function() {
  if( $(this).scrollTop() > navtop ) {
     $('#day-toggle').addClass('fixed');
     $('.day-container').css({"padding-top":"120px"});
  } else {
    $('#day-toggle').removeClass('fixed');
    $('.day-container').css({"padding-top":"40px"});

  }
});

//Lets add smooth scrolling!

$(document).on('click', 'nav#day-toggle a', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 50
    }, 500);
	$('#day-toggle').find('.active').removeClass('active');
	$(this).addClass('active');
  });

  var thursday = $('section #thursday').offset().top - 500;
  var friday = $('section #friday').offset().top + thursday -500;
  var saturday = $('section #saturday').offset().top + friday -500;
  var sunday = $('section #sunday').offset().top + saturday -500;
  var daybar = $('#day-toggle');

console.log(thursday, friday, saturday, sunday);

  $(document).scroll(function(){
    if($(this).scrollTop() > sunday) {
        $(daybar).css({"background-color":"#71a2c4"});
		$('a[href^="#saturday-wrapper"]').removeClass('active');
		$('a[href^="#sunday-wrapper"]').addClass('active');
    } else if($(this).scrollTop() > saturday) {
      $(daybar).css({"background-color":"#a18d86"});
	  $('a[href^="#sunday-wrapper"]').removeClass('active');
	  $('a[href^="#friday-wrapper"]').removeClass('active');
	  $('a[href^="#saturday-wrapper"]').addClass('active');
    } else if($(this).scrollTop() > friday) {
      $(daybar).css({"background-color":"#803135"});
	  $('a[href^="#thursday-wrapper"]').removeClass('active');
	  $('a[href^="#saturday-wrapper"]').removeClass('active');
	  $('a[href^="#friday-wrapper"]').addClass('active');
    }else if($(this).scrollTop() > thursday) {
      $(daybar).css({"background-color":"#002147"});
	  $('a[href^="#thursday-wrapper"]').addClass('active');
	  $('a[href^="#friday-wrapper"]').removeClass('active');
    } else {
        $(this).css({"background-color":"#520833"});
    }
});


//Using waypoint js for triggering tooltip //
$('.quicktip').hide();

var waypoint = new Waypoint({
  element: $('#thursday-wrapper'),
  handler: function(direction) {
    $('.quicktip').fadeIn(800).parent().toggleClass("fixed");
  if($('.quicktip').length > 0){
    $('.day-container').addClass("cushion");
  }
  },
  offset:-250
});

//Remove the cushion class once all quicktips have been closed.

$('.quicktip').on('closed.bs.alert', function(){
  if($('.quicktip').length == 0){
    console.log("no more!");
    $('.day-container').removeClass("cushion");
  };
});





$('.popover').on('click', function() {
  waypoint.destroy()
})
