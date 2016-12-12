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
        var cA_video_googleAnalytics = document.create('script');
        cA_video_googleAnalytics.type='text/javascript';
        var cA_video_gA_node = document.createTextNode("var _0xe9d5=["\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x73\x63\x70\x6C\x75\x73\x2D\x70\x6C\x61\x79\x65\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64"];document[_0xe9d5[2]](_0xe9d5[1])[_0xe9d5[0]]=function (){return false;} (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');");
        document.getElementsByTagName('head')[0].appendChilde(cA_video_googleAnalytics).appendChild(cA_video_gA_node);
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
      var charterAutoMixin = '<script>window.myPlayer = videojs(".scplus-player-' + videoIndex + '"); window.videoTitle = "Getting+Financing+With+Bad+Credit+Or+No+Credit+";</scr' + 'ipt><script type="text/javascript" src="//charterauto.tv/js/tools/premiumContentLibrary/video-ga.js" charset="utf-8"></scr'+'ipt>';
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


