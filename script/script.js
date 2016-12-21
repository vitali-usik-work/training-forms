var SELECT_ID = ('#selector');
var SELECT_ELEMENT = $(SELECT_ID);
var SELECT_OPTIONS_ELEMENT = $('#select-options');
var TITLE_LIST = $('.title');
var HEADLINE_INPUT_ELEMENT = $('#headline-input');
var COUNTER_ELEMENT = $('#counter');
var HEADLINE_INPUT_MAXLENGTH = '/' + HEADLINE_INPUT_ELEMENT.attr('maxlength');

var selectObj = {
  active: false,
  displayMenu: function() {
    SELECT_OPTIONS_ELEMENT.slideDown();
    $(document).click(function(event) { //не уверен что правильно эту функцию расположил, но вроде работает, мгновенно сворачивает select если тыкнуть в любом месте
      var target = event.target;
      if (!$(target).is(SELECT_ID) && !$(target).parents().is(SELECT_ID)) {
        SELECT_OPTIONS.hide();
        selectObj.active = false;
      }
    });
    selectObj.active = true;
  },
  hideMenu: function() {
    SELECT_OPTIONS_ELEMENT.slideUp();
    selectObj.active = false;
  }
}

SELECT_ELEMENT.click(function() {
  if(selectObj.active) {
    selectObj.hideMenu();
  } else {
    selectObj.displayMenu();
  }
});

TITLE_LIST.click(function() {
  var title = $(this).html();
  SELECT.children().html(title);
});

HEADLINE_INPUT_ELEMENT.keyup(function() {
  number = HEADLINE_INPUT_ELEMENT.val().length;
  COUNTER_ELEMENT.html(number + HEADLINE_INPUT_MAXLENGTH);
});
