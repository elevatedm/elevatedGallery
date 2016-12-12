var charterAutoPack = (function() {
  var _charterGalleryCount = 0;

  var createGallery = function() {
    var charterVideoUrls = [];
    createGallery = function() {};
    createGallery.videoGallery = function(videoUrls) {
      createGallery.newGallery();
      createGallery.setVideoUrls(videoUrls);
      renderGallery.videoGallery(charterVideoUrls);
    };
    createGallery.setVideoUrls = function(videoUrls) {
      var _videoUrls = Array.from(videoUrls);
      _videoUrls = _videoUrls.join("");
      var charterGalleryUrls = _videoUrls.split(' ');
      for (i = 0; i < charterGalleryUrls.length; i++) {
        charterVideoUrls.push(charterGalleryUrls[i]);
      }
    };
    createGallery.newGallery = function(){
      charterVideoUrls = [];
      return charterVideoUrls;
    };
    return createGallery;
  };
  var renderGallery = function() {
    renderGallery = function() {

    };
    renderGallery.videoGallery = function(charterVideoUrls) {
      _charterGalleryCount++;
      var galleryId = 'cA_gallery' + _charterGalleryCount;
      renderGallery.renderGrid(galleryId); //create the element to append grid items
      renderGallery.renderItems(galleryId, charterVideoUrls);
    };
    renderGallery.renderGrid = function(galleryId) {
      var newGallery = '<div id="' + galleryId + '" class="cA_grid"></div>';
      $(".cdk_charterAutoTv").append(newGallery);
      //console.log('grid rendered');
    };
    renderGallery.renderItems = function(galleryId, charterVideoUrls) {
      for (i = 0; i < charterVideoUrls.length; i++) {
        var galleryItemUrl = charterVideoUrls[i];
        var galleryItemIndex = [i];
        renderGallery.newVideoItem(galleryItemUrl, galleryItemIndex, galleryId);

      }

    };
    renderGallery.newVideoItem = function(videoUrl, videoIndex, galleryId) {
      var videoId = videoUrl;
      var videoIndex = videoIndex;
      var galleryId = galleryId;
      var charterAutoMixin = '<script>var myPlayer = videojs(".scplus-player-' + videoIndex + '"); var videoTitle = "Getting+Financing+With+Bad+Credit+Or+No+Credit+";</scr' + 'ipt>'
      var gAnalytics = "<script>ga('create', 'UA-48046390-94', 'auto', {'name': 'scplusTracker'});ga('scplusTracker.require', 'displayfeatures');ga('scplusTracker.send', 'pageview');</scr" + "ipt>";
      var videoTemplate = '<div class="charterAutoVideo">' + charterAutoMixin + gAnalytics + '<video oncontextmenu="return false;" id="scplus-player-' + videoIndex + '" data-src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" class="scplus-player-' + videoIndex + ' video-js vjs-default-skin" controls="" preload="none" width="520" height="380" poster="http://video.charterauto.tv/johnnylondoffc/auto-financing.com/thumbs/KeysToSuccessfulAutoFinancing_large_16x9.jpg" data-setup="{}"><source src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" type="video/mp4"></video></div>';
      var galleryWrapper = $('#' + galleryId);
      galleryWrapper.append(videoTemplate);
      //console.log('items rendered');
    };
    return renderGallery;
  };

  return {
    createGallery: createGallery(),
    renderGallery: renderGallery()

  }

})();