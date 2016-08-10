/*
 CODE BY ALEX YATSENKO
*/
/* BIND POPUP OPEN FOR CLICK ON #eventClickElementID */
function setPopupOpenEvent(popupElementID, eventClickElementID) {
  jQuery('#' + eventClickElementID).click(function(event) {
    $('#' + popupElementID).show();
    event.preventDefault();
    return 0;
  });
  return 1;
}

function setDropDown(labelTitleElement, variablesListElement) {
  $(labelTitleElement).click(function() {
    if ($(this).parent().parent().find(variablesListElement).css('display') == 'none')
      $(this).parent().parent().find(variablesListElement).show();
    else
      $(this).parent().parent().find(variablesListElement).hide();
    return;
  });
}

var selector = '.language-switcher a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

var selector1 = '.types a';

$(selector1).on('click', function(){
    $(selector1).removeClass('active');
    $(this).addClass('active');
});

var selector2 = '.sidebar-menu a';

$(selector2).on('click', function(){
    $(selector2).removeClass('active');
    $(this).addClass('active');
});

var selector3 = '.view a';

$(selector3).on('click', function(){
  $(selector3).removeClass('active');
  $(this).addClass('active');
  $('.tender').addClass('tender-line');
});

var selector4 = '.view a.square-view';

$(selector4).on('click', function(){
  $('.tender').removeClass  ('tender-line');
});


// $('a.lines-view').on('click', function(){
//   $('.tender').addClass('.tender-line');
// });



jQuery(document).ready(function($) {

  $('.close-popup').click(function() {
    $(this).parent().hide();
    return 0;
  });
  $('.close-popups').click(function() {
    $(this).parent().parent().hide();
    return 0;
  });
  setPopupOpenEvent('CPVPopup', 'productsIDTypePopup');
  setPopupOpenEvent('auth-popup', 'auth-button');

  setDropDown('ul.tree__list li.tree__list-item label span.item-text', 'ul.tree__list');
  setDropDown('dropdown-toggle', 'hidden-types');
});

jQuery(function() {
  jQuery('#date_timepicker_start').datetimepicker({
    format: 'Y/m/d',
    onShow: function(ct) {
      this.setOptions({
        maxDate: jQuery('#date_timepicker_end').val() ? jQuery('#date_timepicker_end').val() : false
      })
    },
    timepicker: false
  });
  jQuery('#date_timepicker_end').datetimepicker({
    format: 'Y/m/d',
    onShow: function(ct) {
      this.setOptions({
        minDate: jQuery('#date_timepicker_start').val() ? jQuery('#date_timepicker_start').val() : false
      })
    },
    timepicker: false
  });
});

$('.registration').on('click', function() {
  $('.first').hide();
  $('.second').show();
});
$('.login').on('click', function() {
  // $('.second').replaceWith($('.first'));
  $('.first').show();
  $('.second').hide();
});

$('.reg-dropdown').on('click', function() {
  if ($('.hidden-types').hasClass('active'))
    $('.hidden-types').removeClass('active');
  else
    $('.hidden-types').addClass('active');
});

// $(".location, .location-btn").click(function(){
//     $(".location-dropdown").slideToggle("fast");
// })

$(".location-dropdown").click(function(event) {
  event.stopPropagation();
});

$(".location").on("click", function(event) {
   $(".money-dropdown").hide();
   $(".calendar-picker").hide();
  event.stopPropagation();
  // $(".location-dropdown").slideToggle("fast");
  $(".location-dropdown").slideToggle("fast");
});


$(".calendar").click(function(event) {
   $(".location-dropdown").hide();
  $(".money-dropdown").hide();
  event.stopPropagation();
  $(".calendar-picker").slideToggle("fast");
})

$(".calendar-picker").click(function(event) {
  event.stopPropagation();
});

$(".money").click(function(event) {
  event.stopPropagation();
  $(".money-dropdown").slideToggle("fast");
   $(".location-dropdown").hide();
    $(".calendar-picker").hide();
})

$(".money-dropdown").click(function(event) {
  event.stopPropagation();
});
$(document).on("click", function() {
  $(".location-dropdown").hide();
  $(".money-dropdown").hide();
   $(".calendar-picker").hide();
});

// $(document).mouseup(function (e)
// {
//     var container = $(".location-dropdown, .calendar-picker, .money-dropdown");

//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//         container.hide();
//     }
// });

// ACTIVE ON SIDEBAR MENU

$(document).ready(function() {
  $('.sidebar-menu a').click(function() {
    $('.sidebar-menu a').removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function() {
  $('select').material_select();
});



var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function() {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();


  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  next_fs.show();
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      scale = 1 - (1 - now) * 0.2;
      left = (now * 50) + "%";
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale(' + scale + ')'
      });
      next_fs.css({
        'left': left,
        'opacity': opacity,
      });
    },
    duration: 0,
    complete: function() {
      current_fs.hide();
      animating = false;
    },
    easing: 'linear'
  });
});

$(".previous").click(function() {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      scale = 0.8 + (1 - now) * 0.2;
      left = ((1 - now) * 50) + "%";
      opacity = 1 - now;
      current_fs.css({
        'left': left
      });
      previous_fs.css({
        'transform': 'scale(' + scale + ')',
        'opacity': opacity,
      });
    },
    duration: 0,
    complete: function() {
      current_fs.hide();
      animating = false;
    },
    easing: 'linear'
  });
});

$('.sidebar-menu nav ul li a').click(function() {
  $('.sidebar-menu nav ul li a').removeClass("active");
  $(this).addClass("active");
});

$(".submit").click(function() {
  return false;
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}

function openNav() {
  document.getElementById("mySidenav").classList.add("main-menu");
  document.getElementById("main").classList.add("main-menu");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("main-menu");
  document.getElementById("main").classList.remove("main-menu");
}

function openSidebar() {
  document.getElementById("sidebar").classList.add("side-bar");
  document.getElementById("main").classList.add("left-bar");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("side-bar");
  document.getElementById("main").classList.remove("left-bar");
}