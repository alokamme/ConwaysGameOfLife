// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require_tree .


$(function(){
  $(document.body).on('click', '#run', function(e){
    var load = true;
    var count = 1;

    var cells = [];
    $('.active').each(function(){
      var col = parseInt($(this).attr('col'));
      var row = parseInt($(this).attr('row'));
      cells.push([row,col]);
		});

    (function loop() {
      e.preventDefault();	

      if (window.clear) {
        window.clear = false;
        return false;
      }

      $.post('/start', {load: load, cells: cells});
      $('#run').addClass('disabled').text(count);
      count ++;
      setTimeout(function(){
        load = false;
        loop();
     }, 600);	
    }());
  });
});

$(function(){
  $(document.body).on('click', '.cell', function(){
    $('.clear').fadeIn();
    $('#run').removeClass('disabled');
    if(!$(this).hasClass("active")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

$(function(){
  $(document.body).on('click', '.clear', function(){
    $(this).fadeOut();
    window.clear = true;
    $.post('/clear', {});
  });
});
