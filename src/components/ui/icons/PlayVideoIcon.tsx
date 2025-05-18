import React from "react";
import Image from "next/image";
import playVideoImage from "@/images/playVideo.png";

function PlayVideoIcon() {
  return (
    <div className="detail-card__video-popup__frame_play">
      <Image src={playVideoImage} alt="" />
    </div>
  );
}

export default PlayVideoIcon;
