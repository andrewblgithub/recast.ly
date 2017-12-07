var searchYouTube = (keyword) => {
  var keyword = keyword || 'kirby nintendo';
  let url = 'https://www.googleapis.com/youtube/v3/search/?q=' + 
      keyword + 
      '&part=snippet&maxResults=5&key=' + 
      window.YOUTUBE_API_KEY;
  $.ajax({
    url: url,
    type: 'GET', 
    success: function (data) {
      console.log(data.items);
    },
    error: function (data) {
      console.error('FAILURE!', data);
    }
  });
};

window.searchYouTube = searchYouTube;
