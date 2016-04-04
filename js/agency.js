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
// Before and After Pair 1
$('.before1').hover(
  function() {
    $('.before1 > .reveal-before').slideToggle();
  },
  function() {
    $('.before1 > .reveal-before').slideToggle();
  }
);
$('.after1').hover(
  function() {
    $('.after1 > .reveal-after').slideToggle();
  },
  function() {
    $('.after1 > .reveal-after').slideToggle();
  }
);

// Before and After Pair 2
$('.before2').hover(
  function() {
    $('.before2 > .reveal-before').slideToggle();
  },
  function() {
    $('.before2 > .reveal-before').slideToggle();
  }
);
$('.after2').hover(
  function() {
    $('.after2 > .reveal-after').slideToggle();
  },
  function() {
    $('.after2 > .reveal-after').slideToggle();
  }
);

// Before and After Pair 3
$('.before3').hover(
  function() {
    $('.before3 > .reveal-before').slideToggle();
  },
  function() {
    $('.before3 > .reveal-before').slideToggle();
  }
);
$('.after3').hover(
  function() {
    $('.after3 > .reveal-after').slideToggle();
  },
  function() {
    $('.after3 > .reveal-after').slideToggle();
  }
);

// Before and After Pair 4
$('.before4').hover(
  function() {
    $('.before4 > .reveal-before').slideToggle();
  },
  function() {
    $('.before4 > .reveal-before').slideToggle();
  }
);
$('.after4').hover(
  function() {
    $('.after4 > .reveal-after').slideToggle();
  },
  function() {
    $('.after4 > .reveal-after').slideToggle();
  }
);
