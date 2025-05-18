import React from "react";
import Image from "next/image";
import whatsappIcon from "@/images/whatsappIcon.png";

function WhatsAppIcon() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=79943336688"
      target="_blank"
      title="Написать в Whatsapp"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-button">
        <Image src={whatsappIcon} alt="WhatsApp" fill />
      </div>
    </a>
  );
}

export default WhatsAppIcon;
