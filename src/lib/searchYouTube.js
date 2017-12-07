var searchYouTube = _.debounce((keyword, searchHandler) => {
  var keyword = keyword || 'kirby nintendo';
  let url = 'https://www.googleapis.com/youtube/v3/search/?q=' + 
      keyword + 
      '&part=snippet&maxResults=5&format=5&key=' + 
      window.YOUTUBE_API_KEY;
  $.ajax({
    url: url,
    type: 'GET', 
    success: function (data) {
      searchHandler(data.items);
    },
    error: function (data) {
      console.error('FAILURE!', data);
    }
  });
}, 500);

window.searchYouTube = searchYouTube;
