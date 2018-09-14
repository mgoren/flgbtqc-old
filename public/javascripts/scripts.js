$(document).ready(function() {
  $('.minute p').addClass('hidden');

  $('#view-all').click(function() {
    if($(this).text() === 'View all') {
      $('.minute').addClass('well');
      $('.minute p').removeClass('hidden');
      $(this).text('Hide all')
    } else {
      $('.minute').removeClass('well');
      $('.minute p').addClass('hidden');
      $(this).text('View all')
    }
  });

  $('.minute').click(function() {
    $(this).toggleClass('well');
    $(this).children('p').toggleClass('hidden');
  });
})
