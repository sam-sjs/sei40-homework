$(document).ready(function() {

  $('#flexContainer img').on('click', function() {

    $('#flexContainer').hide();
    $('#gridContainer').empty().show();

    const rover = $(this).attr('roverId');
    const sol = $('#solCount').val();

    $.getJSON(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=9igxpiYwTamUPFnOPvQdRhsrpwcH8bEEm79MgD6z`)
    .done(function(response) {
      const photos = response.photos
      $('#gridContainer').css({'gridTemplateRows': 'repeat(photos.length, 1fr)',
                               'gridTemplateColumns': 'repeat(photos.length, 1fr)'});

      for(let i = 0; i < photos.length; i++) {
        const $photo = $(`<div><img src="${photos[i].img_src}"></div>`);
        $('#gridContainer').append($photo);
      }; // for
    }) // .done
    .fail(function(err) {
      console.warn(err.status, err.statusText);
    }); // .fail
  }) // .on click









}) //document ready
