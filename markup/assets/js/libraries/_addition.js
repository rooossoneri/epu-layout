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
  $('.sidebar-menu ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});

$(document).ready(function() {
    $('select').material_select();
  });