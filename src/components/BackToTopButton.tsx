import { useState, useEffect } from "react"

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {backToTopButton && (
        <button className="up-arrow-btn" onClick={scrollUp}>
          <img src="/up-arrow-btn.png" alt="" />
        </button>
      )}
    </>
  )
}

export default BackToTopButton
