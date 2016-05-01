var id = '8cbd1787564344519867bbbc62d4e604';

//TODO - change to txt file and parse to array
var blacklist = [
  'heidysonamission',
  'escaladoresimd',
  'arasnoir',
  'ottavionava',
  'abiallen28',
  'center_designmx',
  'trioenvironments',
  'franny_lily',
  'isdnapoli',
  'darawhit3',
  'mgng1'
];

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

// Takes an array and a string to cross-reference vs the blacklist
// and slap the matching tag onto the relavant object
var filter = function(arr, tag){
  var r = []
  for (var i = arr.length - 1; i >= 0; i--) {
    if (blacklist.indexOf(arr[i].user.username) == -1) {
      //console.log(tag+": "+arr[i].user.username);
      arr[i].customTagName = tag;
      r.push(arr[i]);
    }
  }
  return r;
}

$.when(doApiCall('weareimd'), doApiCall('wearedev'), doApiCall('wearedesign')).done(function(a1, a2, a3) {
  var comPosts = a1[0].data;
  var devPosts = a2[0].data;
  var desPosts = a3[0].data;

  var results = [];

  if (window.location.href.indexOf("community") != -1){
    var results = results.concat(filter(comPosts,"tag-community"));
  }else if(window.location.href.indexOf("development") != -1){
    var results = results.concat(filter(devPosts,"tag-development"));
  }else if(window.location.href.indexOf("design") != -1){
    var results = results.concat(filter(desPosts,"tag-design"));
    console.log("design", results);
  }else{
    var results = results.concat(
      filter(comPosts,"tag-community"),
      filter(devPosts,"tag-development"),
      filter(desPosts,"tag-design")
    )
  }

  shuffle(results);

  if((length = results.length) > 0) {
    if(length > 13) { length = 12; }
      for(var i = 0; i < length; i++) {
          var captiontext = results[i].caption.text.substring(0,80);
          $("#instagram").prepend(
            '<a href="'+results[i].link+'" target="_blank">'+
            '<div class="col-md-3 col-sm-4 col-xs-6 item '+ results[i].customTagName +'">'+
              '<div class="content">'+
                '<image src="' + results[i].images.standard_resolution.url + '" alt="' + captiontext + '"/>'+
                '<div class="tags">'+
                  '<div class="yellow"></div>'+
                  '<div class="blue"></div>'+
                  '<div class="red"></div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '</a>');
      }
  }

});