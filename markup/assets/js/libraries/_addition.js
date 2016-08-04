/*
 CODE BY ALEX YATSENKO
*/

/* BIND POPUP OPEN FOR CLICK ON #eventClickElementID */


function setPopupOpenEvent(popupElementID, eventClickElementID)
{
  jQuery('#'+ eventClickElementID).click(function(event)
  {
    $('#' + popupElementID).show();
    event.preventDefault();
    return 0;
  });
  return 1;
}

function setDropDown(labelTitleElement, variablesListElement)
{
  $(labelTitleElement).click(function()
  {
    if($(this).parent(). parent(). find(variablesListElement).css('display') == 'none')
      $(this).parent().parent().find(variablesListElement).show();
    else
      $(this).parent().parent().find(variablesListElement).hide();



    return ;
  });
}

jQuery(document).ready(function($)
{ 

  $('.close-popup').click(function()
  {
    $(this).parent().hide();
    return 0;
  });
  $('.close-popups').click(function()
  {
    $(this).parent().parent().hide();
    return 0;
  });
  setPopupOpenEvent('productsIDTypePopup', 'CPVPopup');
  setPopupOpenEvent('auth-popup', 'auth-button');

  setDropDown('ul.tree__list li.tree__list-item label span.item-text', 'ul.tree__list');
  setDropDown('dropdown-toggle', 'hidden-types');
});

jQuery(function(){
 jQuery('#date_timepicker_start').datetimepicker({
  format:'Y/m/d',
  onShow:function( ct ){
   this.setOptions({
    maxDate:jQuery('#date_timepicker_end').val()?jQuery('#date_timepicker_end').val():false
   })
  },
  timepicker:false
 });
 jQuery('#date_timepicker_end').datetimepicker({
  format:'Y/m/d',
  onShow:function( ct ){
   this.setOptions({
    minDate:jQuery('#date_timepicker_start').val()?jQuery('#date_timepicker_start').val():false
   })
  },
  timepicker:false
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

$('.reg-dropdown').on('click', function(){
  if($('.hidden-types').hasClass('active'))
    $('.hidden-types').removeClass('active');
  else
    $('.hidden-types').addClass('active');
});


// ACTIVE ON SIDEBAR MENU

$(document).ready(function(){
  $('.sidebar-menu a').click(function(){
    $('.sidebar-menu a').removeClass("active");
    $(this).addClass("active");
});
});

$(document).ready(function() {
    $('select').material_select();
  });

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale('+scale+')'
        // 'position': 'absolute'
      });
      next_fs.css({'left': left, 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function(){
  return false;
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}