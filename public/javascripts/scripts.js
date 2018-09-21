$(document).ready(function() {
  $('.minute p').addClass('hidden');

  $('#view-all').click(function() {
    if($(this).text() === 'View all') {
      $('.minute').addClass('card card-body bg-light');
      $('.minute').addClass('expanded');
      $('.close').removeClass('hidden')
      $('.minute p').removeClass('hidden');
      $(this).text('Hide all')
    } else {
      $('.minute').removeClass('card card-body bg-light');
      $('.minute').removeClass('expanded');
      $('.close').addClass('hidden')
      $('.minute p').addClass('hidden');
      $(this).text('View all')
    }
  });

  $('.minute h6').click(function() {
    $(this).parent().toggleClass('card card-body bg-light');
    $(this).parent().toggleClass('expanded')
    $(this).children('.close').toggleClass('hidden')
    $(this).parent().children('p').toggleClass('hidden');
  });
})
