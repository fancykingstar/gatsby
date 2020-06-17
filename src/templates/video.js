import React from "react"
import { any } from "prop-types";

const Video = ({ videoSrcURL, videoTitle, videoWidth, videoHeight, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      width={videoWidth}
      height={videoHeight}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video