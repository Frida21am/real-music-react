import React from "react";

function Notification(props: {
  activeNotification: boolean;
  onNotificationClosing: (activeNotification: boolean) => void;
  name: string;
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
      <p>{props.name} добавлено в корзину / избранное</p>
    </div>
  );
}

export default Notification;
