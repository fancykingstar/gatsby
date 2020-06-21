import React from "react"
import { any } from "prop-types";

const Video = ({ videoSrcURL, videoTitle, videoWidth, videoHeight, ...props }) => (
  <div className="video">
    
    <video autoplay playinline loop muted title={videoTitle} width={videoWidth} height={videoHeight}>
      <source src={videoSrcURL} type="video/mp4"/>
      {/* <source src="https://www.wavecitycenter.in/wp-content/themes/citycenter/images/video/amore-video.ogv" type="video/ogv"/>
      <source src="https://www.wavecitycenter.in/wp-content/themes/citycenter/images/video/amore-video.webm" type="video/webm"/> */}
    </video>

  </div>
)
export default Video