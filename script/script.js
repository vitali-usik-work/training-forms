var SELECT_ID = ('#selector');
var SELECT_ELEMENT = $(SELECT_ID);
var SELECT_OPTIONS_ELEMENT = $('#select-options');
var TITLE_LIST = $('.title');
var HEADLINE_INPUT_ELEMENT = $('#headline-input');
var COUNTER_ELEMENT = $('#counter');
var HEADLINE_INPUT_MAXLENGTH = '/' + HEADLINE_INPUT_ELEMENT.attr('maxlength');
var ACTIVE_OPTIONS_CLASS = 'active-options';
var SAVE_BUTTON_ELEMENT = $('#save-button');
var VALIDE_CLASS = 'valide';
var REQUIRED_LIST = $('.required');

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

TITLE_LIST.click(function selectTitle() {
  var title = $(this).html();
  SELECT_ELEMENT.children().html(title);
  SELECT_ELEMENT.children().addClass(VALIDE_CLASS);
  activateButton();
});
$('input, textarea').change(function validate() {
  if ($(this).val().length > 0) {
    $(this).addClass(VALIDE_CLASS);
  } else {
    $(this).removeClass(VALIDE_CLASS);
  }
  activateButton();
});
function activateButton() {
  for (var i = 0; i < REQUIRED_LIST.length; i++) {
    var requredInput = $(REQUIRED_LIST[i]);
    if (requredInput.hasClass(VALIDE_CLASS)) {
      SAVE_BUTTON_ELEMENT.addClass('activated');
    } else {
      SAVE_BUTTON_ELEMENT.removeClass('activated');
      break;
    }
  }
}

HEADLINE_INPUT_ELEMENT.keyup(function symbolCounter() {
  number = HEADLINE_INPUT_ELEMENT.val().length;
  COUNTER_ELEMENT.html(number + HEADLINE_INPUT_MAXLENGTH);
});





