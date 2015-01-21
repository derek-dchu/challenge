(function( $ ) {
  'use strict';

  /**
   * The script add click event on all images within
   * the grid. When click on image, an enlarged
   * (500 x 500) image popup on the screen along
   * with its description.
   */

  $('.image').on('click', function() {
    var imgUrl = $(this).find('img').attr('src');
    var description = $(this).find('.description p').text();
    // Prepare overlap div
    var overlap = $('#overlap');
    overlap.find('.overlap-image > img').attr('src', imgUrl);
    overlap.find('.overlap-description').html(description);

    // Show it on the screen
    overlap.removeClass('hide');
  });

  $('#overlap-close-btn').on('click', function() {
    $(this).parent().addClass('hide');
  });
})( $ );
