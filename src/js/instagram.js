var id = '8cbd1787564344519867bbbc62d4e604';

var doApiCall = function(tag, className) { 
  return $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + id,
      success: function(response) {
        return response.data;
      }
  });
};

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$.when(doApiCall('weareimd'), doApiCall('wearedev'), doApiCall('wearedesign')).done(function(a1, a2, a3) {
  var results = [];
  results = results.concat(a1[0].data, a2[0].data, a3[0].data);

  shuffle(results);

  var className = 'tag-community';

  if((length = results.length) > 0) {
    if(length > 28) { length = 27; }
      for(var i = 0; i < length; i++) {
          var captiontext = results[i].caption.text.substring(0,80);
          $("#instagram").append('<div class="col-md-3 col-sm-4 col-xs-6 item '+ className +'"><div class="content"><image src="' + results[i].images.standard_resolution.url + '" alt="' + captiontext + '"/><div class="tags"><div class="yellow"></div><div class="blue"></div><div class="red"></div></div></div>');
      }
  }

});


