/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//jQuery to reveal before and after images
$('.be-animate').hover(
  function() {
    $('.be-animate > .reveal-before').slideToggle();
  },
  function() {
    $('.be-animate > .reveal-before').slideToggle();
  }
);
$('.af-animate').hover(
  function() {
    $('.af-animate > .reveal-after').slideToggle();
  },
  function() {
    $('.af-animate > .reveal-after').slideToggle();
  }
);
