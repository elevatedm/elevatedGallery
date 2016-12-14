var charterAutoGallery = (function(){
    var _charterGalleryCount = 0;
	var createGallery = function(){
		var _galleryObjects = [];
		createGallery = function(){};
        createGallery.videoGallery = function(videoDetails, videoBgColor){
            createGallery.getVideoDetails(videoDetails, videoBgColor);
            renderGallery.videoGallery(_galleryObjects);
            
        };
		createGallery.getVideoDetails = function(videosDetails, videoBgColor){
            var _videosDetails = Array.from(videosDetails);
			_videosDetails = _videosDetails.join("");
			_videosDetails = _videosDetails.split('^');
			for(var i=0;i<_videosDetails.length;i++){
				if(_videosDetails[i] == ""){
				_videosDetails.pop();	
				}else{
				var _videoDetails = _videosDetails[i];
				_videoDetails = _videoDetails.split(" ");
				var galleryVideo = new createGallery.NewVideoItem(_videoDetails, videoBgColor);
				_galleryObjects.push(galleryVideo);
				
				}
			}
			//console.log(_galleryObjects);
			
			};
		createGallery.NewVideoItem = function(videoDetails,videoBgColor){
				this.urlProp = videoDetails[0];
				this.title = videoDetails[1];
                this.bgColor = videoBgColor;
				};
		return createGallery;
	};
    
    var renderGallery = function(){
        renderGallery = function(){};
        renderGallery.videoGallery = function(_galleryObjects){
            _charterGalleryCount++;
            var galleryId = 'cA_gallery' + _charterGalleryCount;
            renderGallery.renderGrid(galleryId);
            renderGallery.renderItems(galleryId,_galleryObjects);
            
        };
        renderGallery.renderGrid = function(galleryId){
            var newGallery = '<div id="' + galleryId + '" class="cA_grid"></div>';
            $(".cdk_charterAutoTv").append(newGallery);
        };
        renderGallery.renderItems = function(galleryId,_galleryObjects){
            for (i = 0; i < _galleryObjects.length; i++) {
            var galleryItem = _galleryObjects[i];
            var galleryItemIndex = [i];
                renderGallery.renderVideoItem(galleryItem, galleryItemIndex, galleryId);
            }
            
            
        };
        renderGallery.renderVideoItem = function(galleryItem,galleryItemIndex, galleryId){
            //define/pull gallery Item variable
            var videoId = galleryItem.urlProp;
            var videoIndex = galleryItemIndex;
            var galleryId = galleryId;
            var videoBgColor = galleryItem.bgColor;
            var videoTitle = galleryItem.title;
            videoTitle = videoTitle.replace(/-/g, ' ');
            var videoTemplate = '<div class="charterAutoVideo"><video oncontextmenu="return false;" onplay="charterAutoGallery.renderGallery.videoPlay(this);" id="scplus-player-' + videoIndex + '" data-src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" class="scplus-player-' + videoIndex + ' video-js vjs-default-skin" controls="" preload="none" width="520" height="380" poster="http://i.imgur.com/1szlNi8.png" data-setup="{}"><source src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" type="video/mp4"></video><div class="cA_videoTitle"><h5>'+videoTitle+'</h5></div></div>';
            var galleryWrapper = $('#' + galleryId);
            galleryWrapper.append(videoTemplate);
            $('.charterAutoVideo > video').css({
            "background":"'+videoBgColor+'"
            })
            //console.log(galleryItem.urlProp);returns url property of item
            console.log(galleryItem.poster);
            console.log(videoTitle);
            };
	    renderGallery.videoPlay = function(videoScope){
        videoScope = $(videoScope);
        var _videoScopedTitle = videoScope.closest('.charterAutoVideo').find('.cA_videoTitle');
        _videoScopedTitle.fadeOut("slow");
        };
	    
        return renderGallery;
        };
        
   
	return {
	createGallery:createGallery(),
    renderGallery:renderGallery()
	};
	
	})();
