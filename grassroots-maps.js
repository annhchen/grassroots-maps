jQuery(document).ready(function($) {

  var images = [];

  var display = function(item) {
    var image = item.image.replace(/_small/,'');
    $('html').css('backgroundImage',"url(" + image + ")");
    $('#title a').html(item.title);
    $('#title a').attr('href',item.id);
    //$('#description').html(item.description);
  }

  // prompt for a URL, with a default, first time, store in localStorage

  // consider switch to JSON! 
  // Or we need a way to create arbitrary image fields, plus lat/lon
  jQuery.getFeed({
     url: 'http://mapknitter.org/feeds/all',
     //url: 'all.rss',
     success: function(feed) {

      var n = Math.floor(Math.random()*feed.items.length);
      var item = feed.items[n];

      display(item);

      // got to store the images in localStorage 
      // or something so we don't have to download that much quickly 
      $.each(feed.items,function(i,item) {

      });
    }
  });

});
