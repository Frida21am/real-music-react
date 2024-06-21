function WhatsAppIcon() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=79943336688"
      target="_blank"
      title="Написать в Whatsapp"
      rel="noopener noreferrer"
    >
      <div className="whatsapp-button">
        <img src="/whatsappIcon.png" alt="WhatsApp" />
      </div>
    </a>
  )
}

export default WhatsAppIcon
