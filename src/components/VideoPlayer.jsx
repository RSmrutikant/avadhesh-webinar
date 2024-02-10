import React, { useEffect } from 'react';

const VideoPlayer = (props) => {

  useEffect(() => {
    const videoScroll = () => {
      if (document.querySelectorAll("video[autoplay]").length > 0) {
        const windowHeight = window.innerHeight;
        const videoEl = document.querySelectorAll("video[autoplay]");

        for (let i = 0; i < videoEl.length; i++) {
          const thisVideoEl = videoEl[i];
          const videoHeight = thisVideoEl.clientHeight;
          const videoClientRect = thisVideoEl.getBoundingClientRect().top;

          if (
            videoClientRect <= windowHeight - videoHeight * 0.5 &&
            videoClientRect >= 0 - videoHeight * 0.5
          ) {
            thisVideoEl.play();
          } else {
            thisVideoEl.pause();
          }
        }
      }
    };

    if (window.innerWidth > 600) {
      console.log("function get called");
      window.addEventListener("load", videoScroll);
      window.addEventListener("scroll", videoScroll);

      return () => {
        window.removeEventListener("load", videoScroll);
        window.removeEventListener("scroll", videoScroll);
      };
    }
  }, []);

  return (
    <div>
      <video controls autoPlay muted playsInline="playsinline" loop={true} style={{width: "-webkit-fill-available"}}>
                <source src={props.srcLink} type="video/mp4"></source>
        </video>
    </div>
  );
};

export default VideoPlayer;
