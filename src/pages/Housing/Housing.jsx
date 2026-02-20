import { useParams, Navigate } from "react-router-dom"
import { useState } from "react"
import logements from "../../data/logements.json"
import "./Housing.scss"

function Housing() {
  const { id } = useParams()

  const [currentIndex, setCurrentIndex] = useState(0)

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/error" />
  }

  const pictures = logement.pictures

  if (!pictures || pictures.length === 0) {
    return <Navigate to="/error" />
  }

  const totalImages = pictures.length

  const nextImage = () => {
    setCurrentIndex(
      currentIndex === totalImages - 1 ? 0 : currentIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? totalImages - 1 : currentIndex - 1
    )
  }

  return (
    <div className="housing container">
      <div className="carousel">
        <img
          src={pictures[currentIndex]}
          alt={logement.title}
        />

        {totalImages > 1 && (
          <span className="carousel-counter">
            {currentIndex + 1} / {totalImages}
          </span>
        )}

        {totalImages > 1 && (
          <>
            <button
              className="carousel-arrow left"
              onClick={prevImage}>‹</button>
              
            <button
              className="carousel-arrow right"
              onClick={nextImage}>›</button>
          </>
        )}
      </div>

      <h1>{logement.title}</h1>
    </div>
  )
}

export default Housing