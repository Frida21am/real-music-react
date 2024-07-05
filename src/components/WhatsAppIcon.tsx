import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function WhatsAppIcon() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=79943336688"
      target="_blank"
      title="Написать в Whatsapp"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-button">
        <StaticImage src="../images/whatsappIcon.png" alt="WhatsApp" />
      </div>
    </a>
  )
}

export default WhatsAppIcon
