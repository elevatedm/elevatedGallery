charterAutoGallery = (function(){
var _charterGalleryCount = 0;

var createGallery = function(){
    var charterVideoUrls = [];
var createGallery = function(){};
    createGallery.videoGallery = function(videoUrls, charterPosterUrl){
        createGallery.newGallery();
        createGallery.setVideoUrls(videoUrls);
        renderGallery.videoGallery(charterVideoUrls, charterPosterUrl);
    };
    createGallery.setVideoUrls = function(videoUrls){
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
var renderGallery = function(){
    renderGallery = function(){};
    renderGallery.videoGallery = function(charterVideoUrls, charterPosterUrl){
        _charterGalleryCount++;
        var galleryId = 'cA_gallery' + _charterGalleryCount;
        renderGallery.writeDependencies();
        renderGallery.renderGrid(galleryId);//renders grid to append items
        renderGallery.renderItems(galleryId,charterVideoUrls,charterPosterUrl);
    };
    renderGallery.writeDependencies = function(){
        var cA_pageHead = document.getElementsByTagName('head');
        var cA_stylesheet = document.createElement('link');
        cA_stylesheet.type = 'text/css';
        cA_stylesheet.rel = 'stylesheet';
        cA_stylesheet.href = 'http://vjs.zencdn.net/5.0.0/video-js.css';
        var cA_vjsScript = document.createElement('script');
        cA_vjsScript.type = 'text/javascrupt';
        cA_vjsScript.src = 'http://vjs.zencdn.net/5.0.0/video.js';
        var cA_cmTackerScript = document.createElement('script');
        cA_cmTackerScript.type = 'text/javascript';
        cA_cmTackerScript.src = 'http://charterauto.tv/js/tools/CMTracker.min.js';
        var cA_videoJsScript = document.createElement('script');
        cA_videoJsScript.type = 'text/javascript';
        cA_videoJsScript.src = 'http://charterauto.tv/js/tools/videojs.cm.min.js';
        var cA_video_ga_script = document.createElement('script');
        cA_video_ga_script.type = 'text/javascript';
        cA_video_ga_script.src = 'http://charterauto.tv/js/tools/premiumContentLibrary/video-ga.js';
        document.getElementsByTagName('head')[0].appendChild(cA_stylesheet);
        document.getElementsByTagName('head')[0].appendChild(cA_vjsScript);
        document.getElementsByTagName('head')[0].appendChild(cA_cmTackerScript);
        document.getElementsByTagName('head')[0].appendChild(cA_videoJsScript);
        document.getElementsByTagName('head')[0].appendChild(cA_video_ga_script);
        
    };
    renderGallery.renderGrid = function(galleryId){
        var newGallery = '<div id="' + galleryId + '" class="cA_grid"></div>';
      $(".cdk_charterAutoTv").append(newGallery);
      //console.log('grid rendered');
        
    };
    renderGallery.renderItems = function(galleryId, charterVideoUrls, charterPosterUrl){
        for (i = 0; i < charterVideoUrls.length; i++) {
        var galleryItemUrl = charterVideoUrls[i];
        var galleryItemIndex = [i];
        renderGallery.newVideoItem(galleryItemUrl, galleryItemIndex, galleryId, charterPosterUrl);
      }
    };
    renderGallery.newVideoItem = function(videoUrl, videoIndex, galleryId, charterPosterUrl){
        var videoId = videoUrl;
      var videoIndex = videoIndex;
      var galleryId = galleryId;
      var charterPosterUrl = charterPosterUrl;
      var charterAutoMixin = '<script>var myPlayer = videojs(".scplus-player-' + videoIndex + '"); var videoTitle = "Getting+Financing+With+Bad+Credit+Or+No+Credit+";</scr' + 'ipt>'
      var gAnalytics = "<script>ga('create', 'UA-48046390-94', 'auto', {'name': 'scplusTracker'});ga('scplusTracker.require', 'displayfeatures');ga('scplusTracker.send', 'pageview');</scr" + "ipt>";
      var videoTemplate = '<div class="charterAutoVideo">' + charterAutoMixin + gAnalytics + '<video oncontextmenu="return false;" id="scplus-player-' + videoIndex + '" data-src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" class="scplus-player-' + videoIndex + ' video-js vjs-default-skin" controls="" preload="none" width="520" height="380" poster="http://video.charterauto.tv/'+charterPosterUrl+'" data-setup="{}"><source src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" type="video/mp4"></video></div>';
      var galleryWrapper = $('#' + galleryId);
      galleryWrapper.append(videoTemplate);
      console.log('items rendered');
        
    };
    return renderGallery();
    
};



return{
    createGallery: createGallery(),
    renderGallery: renderGallery()

};
})();


