import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

function VideoFrame(props: { frameUrl?: string | TrustedHTML }) {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="detail-card__video">
        <p
          className={
            props.frameUrl
              ? "detail-card__video-button detail-card__video-button_showed"
              : "detail-card__video-button"
          }
          onClick={() => setIsVideoOpen(true)}
        >
          <span>Оценить звучание</span>
          <p className="detail-card__video-button__img">
            <StaticImage src="../images/play.png" alt="" />
          </p>
        </p>
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
  frameUrl?: string | TrustedHTML;
}) {
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
          <StaticImage src="../images/close.png" alt="" />
        </span>
        <div
          className="detail-card__video-popup__frame"
          dangerouslySetInnerHTML={
            props.frameUrl
              ? {
                  __html: props.frameUrl,
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}

export default VideoFrame;
