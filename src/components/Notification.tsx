import React from "react";

function Notification(props: {
  activeNotification: boolean;
  onNotificationClosing: (activeNotification: boolean) => void;
}) {
  return (
    <div
      className={
        props.activeNotification ? "notification showed" : "notification"
      }
    >
      <span
        className="notification__close"
        onClick={() => props.onNotificationClosing(false)}
      >
        x
      </span>
      <p>Укулеле сопрано добавлено в корзину / избранное</p>
    </div>
  );
}

export default Notification;
