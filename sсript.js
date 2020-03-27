
$(function () {
         
    $('.btn-m').click(function () {
      var action = $(this).attr('data-action');
      if (action.indexOf('to') >= 0) {
        var action = parseInt(action.substring(5))-1;
      }
      $('#carousel').carousel(action);
    });
  });

