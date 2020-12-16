$(document).ready(function() {

  $('#flexContainer img').on('click', function() {

    $('#flexContainer').hide();
    $('#gridContainer').empty().show();

    const rover = $(this).attr('roverId');
    const sol = $('#solCount').val();

    $.getJSON(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=9igxpiYwTamUPFnOPvQdRhsrpwcH8bEEm79MgD6z`)
    .done(function(response) {
      const photos = response.photos
      const countPhotos = photos.length > 25 ? 25 : photos.length
      $('#gridContainer').css({gridTemplateRows: `repeat(${countPhotos / 5}, 1fr)`,
                               gridTemplateColumns: `repeat(${countPhotos / 5}, 1fr)`});

      for(let i = 0; i < countPhotos; i++) {
        const $photo = $(`<div><img src="${photos[i].img_src}"></div>`);
        $('#gridContainer').append($photo);
      }; // for
    }) // .done
    .fail(function(err) {
      console.warn(err.status, err.statusText);
    }); // .fail
  }) // .on click









}) //document ready
