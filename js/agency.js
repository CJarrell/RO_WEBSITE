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
    $('.before1 > .reveal-before-top').slideToggle();
  },
  function() {
    $('.before1 > .reveal-before-top').slideToggle();
  }
);
$('.after1').hover(
  function() {
    $('.after1 > .reveal-after-top').slideToggle();
  },
  function() {
    $('.after1 > .reveal-after-top').slideToggle();
  }
);

// Before and After Pair 2
$('.before2').hover(
  function() {
    $('.before2 > .reveal-before-top').slideToggle();
  },
  function() {
    $('.before2 > .reveal-before-top').slideToggle();
  }
);
$('.after2').hover(
  function() {
    $('.after2 > .reveal-after-top').slideToggle();
  },
  function() {
    $('.after2 > .reveal-after-top').slideToggle();
  }
);

// Before and After Pair 3
$('.before3').hover(
  function() {
    $('.before3 > .reveal-before-bottom').slideToggle();
  },
  function() {
    $('.before3 > .reveal-before-bottom').slideToggle();
  }
);
$('.after3').hover(
  function() {
    $('.after3 > .reveal-after-bottom').slideToggle();
  },
  function() {
    $('.after3 > .reveal-after-bottom').slideToggle();
  }
);

// Before and After Pair 4
$('.before4').hover(
  function() {
    $('.before4 > .reveal-before-bottom').slideToggle();
  },
  function() {
    $('.before4 > .reveal-before-bottom').slideToggle();
  }
);
$('.after4').hover(
  function() {
    $('.after4 > .reveal-after-bottom').slideToggle();
  },
  function() {
    $('.after4 > .reveal-after-bottom').slideToggle();
  }
);
