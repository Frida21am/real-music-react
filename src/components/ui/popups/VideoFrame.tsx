import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import PlayVideoIcon from "../icons/PlayVideoIcon";
import Image from "next/image";

function VideoFrame(props: { frameUrl?: string }) {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="detail-card__video">
        <div
          className={
            props.frameUrl
              ? "detail-card__video-button detail-card__video-button_showed"
              : "detail-card__video-button"
          }
          onClick={() => setIsVideoOpen(true)}
        >
          <span>Оценить звучание</span>
          <p className="detail-card__video-button__img">
            <Image src="/images/play.png" alt="" fill />
          </p>
        </div>
      </div>
      <VideoFramePopup
        isVideoOpen={isVideoOpen}
        onPopupClosing={setIsVideoOpen}
        frameUrl={props.frameUrl}
      />
    </>
  );
}

function VideoFramePopup(props: {
  isVideoOpen: boolean;
  onPopupClosing: (isVideoOpen: boolean) => void;
  frameUrl?: string;
}) {
  const url = props.isVideoOpen ? props.frameUrl : undefined;
  return (
    <div className="detail-card__video-popup">
      <div
        className={props.isVideoOpen ? "popup__shadow showed" : "popup__shadow"}
        onClick={() => props.onPopupClosing(false)}
      ></div>
      <div
        className={
          props.isVideoOpen ? "popup__content showed" : "popup__content"
        }
      >
        <span
          className="popup__close"
          onClick={() => props.onPopupClosing(false)}
        >
          <Image src="/images/close.png" alt="" fill />
        </span>
        <ReactPlayer
          className="detail-card__video-popup__frame"
          light
          url={url}
          playIcon={<PlayVideoIcon />}
          playing
          width="900px"
          height="500px"
        />
      </div>
    </div>
  );
}

export default VideoFrame;
