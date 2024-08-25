import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function PlayVideoIcon() {
  return (
    <div className="detail-card__video-popup__frame_play">
      <StaticImage src="../images/playVideo.png" alt="" />
    </div>
  );
}

export default PlayVideoIcon;
