// console.log('Running', $);


$(document).ready(function() {

    // Retrieve Index
  $('#searchButton').on('click', function() {
    const xhr = new XMLHttpRequest();
    const movieSearch = $('#movieInput').val();
    $('#searchBox').hide();

    xhr.onload = function() {
      const movieData = JSON.parse(xhr.response).results;
      const $movieList = $('#searchResults ul');

      // Loop through each result
      for(let i = 0; i < movieData.length; i++) {
        const $entry = $(`<li><h2 movieId="${movieData[i].id}">${movieData[i].title}</h2></a></li>
                          <img src="https://image.tmdb.org/t/p/w92${movieData[i].poster_path}">
                          <ul>
                            <li>Release Date: ${movieData[i].release_date}</li>
                            <li>Overview: ${movieData[i].overview}</li>
                          </ul>
                          <hr>`);
        $movieList.append($entry);
      }; //for
    }; //on load
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${movieSearch}`);
    xhr.send();
  }); //on click search

  // Retrieve Show
  $('#searchResults').on('click', 'h2', function() {
    const xhr = new XMLHttpRequest();
    const $movieId = $(this).attr('movieId');
    $('#searchResults').hide();

    xhr.onload = function() {
      const movieIdData = JSON.parse(xhr.response);
      const $movieInfo = $(`<img src="https://image.tmdb.org/t/p/w185${movieIdData.poster_path}">
                            <ul>
                              <li>Release Date: ${movieIdData.release_date}</li>
                              <li>Budget: ${movieIdData.budget}</li>
                              <li>Revenue: ${movieIdData.revenue}</li>
                              <li>Homepage: ${movieIdData.homepage}</li>
                              <li>Popularity: ${movieIdData.popularity}</li>
                              <li>Runtime: ${movieIdData.runtime}</li>
                              <li>Overview: ${movieIdData.overview}</li>
                              <li>Tagline: ${movieIdData.tagline}</li>
                            </ul>`);
      $('#movieInfo').append($movieInfo);
    }; // on load
    xhr.open('GET', `http://api.themoviedb.org/3/movie/${$movieId}?api_key=24d863d54c86392e6e1df55b9a328755`);
    xhr.send();
  }); //on click h2
}); //document ready
