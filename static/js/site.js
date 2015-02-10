$(document).ready(function() {
  var top = $('#header').height()+10;
  console.log(top);
  $('#sidebar_nav').affix({
    offset: {
      top: top
    }
  });
});
