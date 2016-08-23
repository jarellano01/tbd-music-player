        // 2. This code loads the IFrame Player API code asynchronously. //R.L still working on populating queue
        var tag = document.createElement('script');

        var queueCounter = 1;

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '500',
                width: '890',
                videoId: "ij_0p_6qTss",
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        var isFirstVideo = true;

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                // setTimeout(stopVideo, 0);
                done = true;
            if (isFirstVideo == true) {
                isFirstVideo = false;
            }
            }
            if (event.data == YT.PlayerState.ENDED) { //|| event.data == -1 && !isFirstVideo
                //TODO LOOK UP THE NEXT VIDEO FROM THE ARRAY AND USE THE VIDEOID TO PASS IN TO THE QUEUE VIDEO BY ID CALL THAT WE HAVE IN THE NEXT LINE.
                videoId = queueArray[queueCounter].id;
                queueCounter++;
                console.log(queueArray[queueCounter].id);
                player.cueVideoById(videoId, 0, "large");
                player.playVideo();
                done = false;
            }
        }

        function stopVideo() {
            player.stopVideo();
        }