import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function WhatsAppIcon() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=79943336688"
      target="_blank"
      title="Написать в Whatsapp"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-button">
        <StaticImage
          src="../images/whatsappIcon.png"
          alt="WhatsApp"
          placeholder="none"
        />
      </div>
    </a>
  );
}

export default WhatsAppIcon;
