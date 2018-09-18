$(document).ready(function() {
  $('.minute p').addClass('hidden');

  $('#view-all').click(function() {
    if($(this).text() === 'View all') {
      $('.minute').addClass('well');
      $('.minute').addClass('expanded');
      $('.close').removeClass('hidden')
      $('.minute p').removeClass('hidden');
      $(this).text('Hide all')
    } else {
      $('.minute').removeClass('well');
      $('.minute').removeClass('expanded');
      $('.close').addClass('hidden')
      $('.minute p').addClass('hidden');
      $(this).text('View all')
    }
  });

  $('.minute h6').click(function() {
    $(this).parent().toggleClass('well');
    $(this).parent().toggleClass('expanded')
    $(this).children('.close').toggleClass('hidden')
    $(this).parent().children('p').toggleClass('hidden');
  });
})
