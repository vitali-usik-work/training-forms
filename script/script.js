var SELECT_ID = ('#selector');
var SELECT_ELEMENT = $(SELECT_ID);
var SELECT_OPTIONS_ELEMENT = $('#select-options');
var TITLE_LIST = $('.title');
var HEADLINE_INPUT_ELEMENT = $('#headline-input');
var COUNTER_ELEMENT = $('#counter');
var HEADLINE_INPUT_MAXLENGTH = '/' + HEADLINE_INPUT_ELEMENT.attr('maxlength');
var ACTIVE_OPTIONS_CLASS = 'active-options';
var SAVE_BUTTON_ELEMENT = $('#save-button');
var VALID_CLASS = 'valid';
var INVALID_CLASS = 'invalid';
var REQUIRED_LIST = $('.required');
var CHEKBOX_ELEMENT = $('#check');
var DISABLE_INPUT_LIST = $('.text');

SELECT_ELEMENT.click(_optionsDropdown);
TITLE_LIST.click(_selectTitle);
$('input, textarea').change(_validate);
HEADLINE_INPUT_ELEMENT.keyup(_symbolCounter);

$(document).click(function(event) {
  var target = event.target;
  if (!$(target).is(SELECT_ID) && !$(target).parents().is(SELECT_ID)) {
    SELECT_OPTIONS_ELEMENT.hide();
    SELECT_ELEMENT.removeClass(ACTIVE_OPTIONS_CLASS);
  }
});

function _optionsDropdown() {
  if(SELECT_ELEMENT.hasClass(ACTIVE_OPTIONS_CLASS)) {
    SELECT_OPTIONS_ELEMENT.slideUp();
    SELECT_ELEMENT.removeClass(ACTIVE_OPTIONS_CLASS);
  } else {
    SELECT_OPTIONS_ELEMENT.slideDown();
    SELECT_ELEMENT.addClass(ACTIVE_OPTIONS_CLASS);
  }
}

function _selectTitle() {
  var title = $(this).html();
  SELECT_ELEMENT.children().html(title);
  SELECT_ELEMENT.children().addClass(VALID_CLASS);
  _activateButton();
}

function _validate() {
  if ($(this).val().length > 0) {
    $(this).removeClass(INVALID_CLASS);
    $(this).addClass(VALID_CLASS);
  } else {
    $(this).removeClass(VALID_CLASS);
    $(this).addClass(INVALID_CLASS);
  }
  _activateButton();
}

function _activateButton() {
  for (var i = 0; i < REQUIRED_LIST.length; i++) {
    var requredInput = $(REQUIRED_LIST[i]);
    if (requredInput.hasClass(VALID_CLASS)) {
      SAVE_BUTTON_ELEMENT.addClass('activated');
    } else {
      SAVE_BUTTON_ELEMENT.removeClass('activated');
      break;
    }
  }
}

function _symbolCounter() {
  number = HEADLINE_INPUT_ELEMENT.val().length;
  COUNTER_ELEMENT.html(number + HEADLINE_INPUT_MAXLENGTH);
}

CHEKBOX_ELEMENT.change(function() {
  if(CHEKBOX_ELEMENT.prop('checked')) {
    DISABLE_INPUT_LIST.prop('disabled', true);
    DISABLE_INPUT_LIST.val('');
    DISABLE_INPUT_LIST.removeClass(VALID_CLASS); 
  } else {
    DISABLE_INPUT_LIST.prop('disabled', false);
  }
});





