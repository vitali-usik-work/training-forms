var SELECT_ID = ('#selector');
var SELECT_ELEMENT = $(SELECT_ID);
var SELECT_OPTIONS_ELEMENT = $('#select-options');
var TITLE_LIST = $('.title');
var HEADLINE_INPUT_ELEMENT = $('#headline-input');
var COUNTER_ELEMENT = $('#counter');
var HEADLINE_INPUT_MAXLENGTH = '/' + HEADLINE_INPUT_ELEMENT.attr('maxlength');
var ACTIVE_OPTIONS_CLASS = 'active-options';

SELECT_ELEMENT.click(function optionsDropdown() {
  if(SELECT_ELEMENT.hasClass(ACTIVE_OPTIONS_CLASS)) {
    SELECT_OPTIONS_ELEMENT.slideUp();
    SELECT_ELEMENT.removeClass(ACTIVE_OPTIONS_CLASS);
  } else {
    SELECT_OPTIONS_ELEMENT.slideDown();
    SELECT_ELEMENT.addClass(ACTIVE_OPTIONS_CLASS);
  }
});
$(document).click(function(event) {
  var target = event.target;
  if (!$(target).is(SELECT_ID) && !$(target).parents().is(SELECT_ID)) {
    SELECT_OPTIONS_ELEMENT.hide();
    SELECT_ELEMENT.removeClass(ACTIVE_OPTIONS_CLASS);
  }
});
TITLE_LIST.click(function() {
  var title = $(this).html();
  SELECT_ELEMENT.children().html(title);
});

HEADLINE_INPUT_ELEMENT.keyup(function() {
  number = HEADLINE_INPUT_ELEMENT.val().length;
  COUNTER_ELEMENT.html(number + HEADLINE_INPUT_MAXLENGTH);
});
