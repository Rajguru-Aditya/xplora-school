import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import TestimonialVideos from "./TestimonialVideos";
import YouTube from "react-youtube";
import "./courseTwo.css";

export default function CourseCardOne({ link }) {
  return (
    // <div className="course__item">
    //   <div className="course__thumb-wrap">
    //     {/* <ReactPlayer
    //       url="https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios"
    //       width="100%"
    //       height="100%"
    //       className="course__video"
    //     /> */}
    //     {/* <TestimonialVideos
    //       options={videoJsOptions}
    //       onReady={handlePlayerReady}
    //     /> */}
    //     {/* <video
    //       id="vid1"
    //       className="video-js vjs-default-skin"
    //       controls
    //       autoPlay
    //       width="640"
    //       height="264"
    //       data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}], "youtube": { "iv_load_policy": 1 } }'
    //     ></video> */}
    //     {/* <YouTube
    //       videoId="soWtzfiKvOg?si=ku-yDKKFmthIh-Yd"
    //       opts={{
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     />*/}
    //   </div>
    //   {course.title && course.company && (
    //     <h3 className="course__title">
    //       {course.title}, {course.company}
    //     </h3>
    //   )}
    // </div>
    <>
      <iframe
        width="315"
        height="560"
        src="https://youtube.com/embed/ih02fPSr_-o?si=t7HvhLu4PCwy_QDR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        // id="vid1"
        z-index="10000"
      ></iframe>
    </>
  );
}
