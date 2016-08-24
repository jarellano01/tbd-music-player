        
        //ADDED A COUNTER TO GRAB NEXT VIDEO FROM ARRAY
        var queueCounter = 2;

        function startIframeAfterFb() {
            // 2. THIS CODE LOADS THE IFRAME PLAYER API CODE ASYNCHRNOUSLY.
            var tag = document.createElement('script');

            

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        // 3. THIS FUNCTION CREATES AN <iframe> (AND YOUTUBE PLAYER)
        //AFTER THE API CODE DOWNLOADS.
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '500',
                width: '890',
                //videoId: "ij_0p_6qTss",
                videoId: queueArray[1].id,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // 4. THE API WILL CALL THIS FUNCTION WHEN THE VIDEO PLAYER IS READY.

        function onPlayerReady(event) {
            event.target.playVideo();

        }

        // 5. THE API CALLS THIS FUNCTION WHEN THE PLAYER'S STATE CHANGES.
        //  THE FUCNTION INDICATES THAT WHEN PLAYING A VIDEO (STATE=1),
        //  THE PLAYER SHOULD PLAY FOR SIX SECONDS AND THEN STOP.
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
                //UPDATE THE COUNTER ONCE FIRST SECONDS VIDEO IS DONE.
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
