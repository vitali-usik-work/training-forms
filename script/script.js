var SELECTOR_ID = ('#selector')
var SELECTOR = $(SELECTOR_ID);
var SELECT_OPTIONS = $('#select-options');
var TITLE_LIST = $('.title');
var HEADLINE_INPUT = $('#headline-input');
var COUNTER = $('#counter')

var selectObj = {
  active: false,
  displayMenu: function() {
    SELECT_OPTIONS.slideDown();
    $(document).click(function(event) { //не уверен что правильно эту функцию расположил, но вроде работает, мгновенно сворачивает select если тыкнуть в любом месте
      var target = event.target;
      if (!$(target).is(SELECTOR_ID) && !$(target).parents().is(SELECTOR_ID)) {
        SELECT_OPTIONS.hide();
        selectObj.active = false;
      }
    });
    selectObj.active = true;
  },
  hideMenu: function() {
    SELECT_OPTIONS.slideUp();
    selectObj.active = false;
  }
}

SELECTOR.click(function() {
  if(selectObj.active) {
    selectObj.hideMenu();
  } else {
    selectObj.displayMenu();
  }
});

TITLE_LIST.click(function() {
  var title = $(this).html();
  SELECTOR.children().html(title);
});

HEADLINE_INPUT.keyup(function() {
  number = HEADLINE_INPUT.val().length;
  COUNTER.html(number + '/40');
});
