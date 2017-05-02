//YouTube API
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vfljsDGBQ/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}

//this function is called by the API
function onYouTubeIframeAPIReady() {
    //creates the player object
    player = new YT.Player('player', {
        videoId: 'C4PkWGBLo9g',
        events: {
            'onReady': onYouTubePlayerReady,
            'onStateChange': onYouTubePlayerStateChange
        }
    });

}

function onYouTubePlayerReady() {

}
// when video ends
function onYouTubePlayerStateChange(event) {
    if (event.data === 0) {
        var $video = $('#video-cont');
        var nextVideo = $(".list-group-item").closest('.active').next('.list-group-item');
        if (nextVideo.length == 0) {
            var nextVideo = $(".active").parent().last('.list-group').find(".list-group-item").first();
        }
        $(".list-group-item").removeClass("active");
        $(nextVideo).toggleClass("active");
        var $videoEmbed = $(nextVideo).attr('data-youtube');

        var $videoTitle = $(nextVideo).find(".videoLabel").text();
        $("#videoTitle").html($videoTitle);
        player.loadVideoById($videoEmbed)
    }
}


$(document).ready(function() {
    //tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });


    // Scroll to a anchor link
    $(document).on('click', '.navbar-jcw a, .sidebar-nav a', function(event) {
        event.preventDefault();
        //terrible click management -- a problem to solve
        if ($(this).hasClass('carousel-control') || $(this).hasClass('menu-close')){
            return;
        } else if($(this).hasClass('click-disable')){
           window.open($(this).attr('href'), '_self');
        } else{
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);}
    });

    //Increase Carousel Interval //
    $('#jcw-carousel').carousel({
        interval: 1000 * 10
    });

    $('#awardeeCarousel').carousel({
        interval: 10000
    })

    //modal vertically centered
    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modal-dialog"),
            offset = ($(window).height() - $dialog.height()) / 2,
            bottomMargin = parseInt($dialog.css('marginBottom'), 10);

        // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
        if (offset < bottomMargin) offset = bottomMargin;
        $dialog.css("margin-top", offset);
    }
    $(document).on('show.bs.modal', '.modal', centerModal);

    var $video = $('#video-cont');
    //var $leftColumn = $('#leftColumn');
    var $matchHeight = $('.match-height');
    var $rightColumn = $('#rightColumn');
    var $leftColumn = $('#leftColumn');
    var $mobileColumn = $('#mobileColumn');

    $video.find('iframe').attr("src", $videoEmbed);

    var $videoEmbed = $(this).attr('data-youtube') + "?autoplay=1&enablejsapi=1";


    var $window = $(window).on('resize', function() {
        //video gallery columns
        var height = $video.height() - 32;
        $leftColumn.height(height - $leftColumn.parent().find("h3").height() - 42);
        $rightColumn.height(height - $rightColumn.parent().find("h3").height() - 42);
        $mobileColumn.height(height - $mobileColumn.parent().find("h3").height() - 42);
        $matchHeight.height(height);
        $("#awardeeCarousel").width($(window).width());
        $("#awardeeCarousel .item div").height($($("#awardeeCarousel")).height());
        $('.modal:visible').each(centerModal);
    }).trigger('resize'); //on page load

    $(".list-group-item").click(function(e) {
        e.preventDefault();
        $(".list-group-item").removeClass("active");
        $(this).toggleClass("active");
        var $videoEmbed = $(this).attr('data-youtube');
        var $videoTitle = $(this).find(".videoLabel").text();

        $("#videoTitle").html($videoTitle);
        player.loadVideoById($videoEmbed)
    });

    // Awardee Carousel
    $('.carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('.jcw-Carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

});
