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
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Pulse Navigaion on hover
$(function(){
  $("#bs-example-navbar-collapse-1").hover(
    function() {
      $(this).addClass("pulse");
    },
    function() {
      $(this).removeClass("pulse");
    });
});
// Logo fade out on heart click
// $(function(){
//   $("#heart-interaction").click(
//     function(){
//       $('.ro-logo').css("display", "none");
//       $('.header-ba-container').fadeIn("fast");
//       $('.header-ba-button').fadeIn("fast");
//       $('.header-b').delay("slow").fadeIn("slow");
//     });
// });
// Toggle header before/after
// $(function(){
//   $('.header-ba-button').click(
//     function(){
//       if($(this).attr('data-click-state') == 1){
//         $(this).attr('data-click-state', 0),
//         $('.header-b').fadeOut("fast"),
//         $('.header-a').fadeIn("slow");
//       } else {
//         $(this).attr('data-click-state', 1),
//         $('.header-a').fadeOut("fast"),
//         $('.header-b').fadeIn("slow");
//       }
//     }
//   );
// });
//jQuery to reveal before and after images
$(function() {
  // Before and After Pair 1 Dual Reveal
  $("#reveal-button-1").click(
    function(){
      $('.before1 > .reveal-before-top').slideToggle();
      $('.after1 > .reveal-after-top').slideToggle();
    }
  );
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
});

$(function() {
  // Before and After Pair 2 Dual Reveal
  $("#reveal-button-2").click(
    function(){
      $('.before2 > .reveal-before-bottom').slideToggle();
      $('.after2 > .reveal-after-bottom').slideToggle();
    }
  );
  // Before and After Pair 2
  $('.before2').hover(
    function() {
      $('.before2 > .reveal-before-bottom').slideToggle();
    },
    function() {
      $('.before2 > .reveal-before-bottom').slideToggle();
    }
  );
  $('.after2').hover(
    function() {
      $('.after2 > .reveal-after-bottom').slideToggle();
    },
    function() {
      $('.after2 > .reveal-after-bottom').slideToggle();
    }
  );
});

$(function() {
  // Before and After Pair 3 Dual Reveal
  $("#reveal-button-3").click(
    function(){
      $('.before3 > .reveal-before-top').slideToggle();
      $('.after3 > .reveal-after-top').slideToggle();
    }
  );
  // Before and After Pair 3
  $('.before3').hover(
    function() {
      $('.before3 > .reveal-before-top').slideToggle();
    },
    function() {
      $('.before3 > .reveal-before-top').slideToggle();
    }
  );
  $('.after3').hover(
    function() {
      $('.after3 > .reveal-after-top').slideToggle();
    },
    function() {
      $('.after3 > .reveal-after-top').slideToggle();
    }
  );
});

$(function() {
  // Before and After Pair 4 Dual Reveal
  $("#reveal-button-4").click(
    function() {
      $('.before4 > .reveal-before-bottom').slideToggle();
      $('.after4 > .reveal-after-bottom').slideToggle();
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
});