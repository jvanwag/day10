$(document).ready(function() {
  jQuery(document).ready(function() {
    jQuery("time.timeago").timeago();
  });

  $('#tweet-controls').hide();
  $('.tweet-compose').on('focus', function() {
    $('#tweet-controls').show();
    $('.tweet-compose').css('height', '5em');
  })
  $('.tweet-compose').on('blur', function() {

     if ($('.tweet-compose').val()) {

     }
     else {$('#tweet-controls').hide();}
     $('.tweet-compose').css('height', '2.5em')
  })

  $('.tweet-compose').on('keyup keydown', function() {

    var $charCount = $('#char-count');
    var $tweetCompose= $('.tweet-compose');

$charCount.text(140 - $tweetCompose.val().length);

      if($tweetCompose.val().length >= 130) {
        $('#char-count').css('color', 'red');

}
      else if($tweetCompose.val().length <= 130) {
        $('#char-count').css('color', 'black');
      }
      if($tweetCompose.val().length > 140) {
        $('#tweet-submit').attr('disabled', true);
      }
      else {
        $('#tweet-submit').removeAttr('disabled', false);
      }
  })

  $('#tweet-submit').on('click', function() {

    if($('.tweet-compose').val() )

    $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/jaffar.jpe" /><strong class="fullname">Jon</strong><span class="username">@jvanwag</span><p class="tweet-text">' + $('.tweet-compose').val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-more"></span> More</li></ul>' + '<div class="time">' + '<time class="timeago" datetime="2016-02-12T15:44:17Z" title="February 12, 2016">' + jQuery.timeago(new Date()) + '</time></div>')
  })
$('.tweet-actions').hide();
$(document).on('mouseenter', '.tweet', function() {
  $(this).find('.tweet-actions').show();
})
$(document).on('mouseleave', '.tweet', function() {
  $(this).find('.tweet-actions').hide();
})
$('.stats, .reply').hide();
$(document).on('click', '.tweet', function(){
  $(this).find('.stats, .reply').toggle();
})


});
