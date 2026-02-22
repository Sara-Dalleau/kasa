import { useParams, Navigate } from "react-router-dom"
import { useState } from "react"
import logements from "../../data/logements.json"
import Collapse from "../../components/Collapse/index.jsx"
import Rating from "../../components/Rating/Rating"
import Tags from "../../components/Tags/Tags"
import Host from "../../components/Host/Host"
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

      {/* Carousel */}
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
      
      <div className="housing-top">
        <div className="housing-top-left">

          {/* Header: Titre + localisation */}
          <div className="housing-header">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          {/* Tags */}
          <div className="housing-tags">
            <Tags items={logement.tags} />
          </div>
        </div>
      
        <div className="housing-top-right">

          {/* Hôte */}
          <div className="housing-host">
          <Host 
            name={logement.host.name}
            picture={logement.host.picture}/>
          </div>
          
          {/* Etoile de notation */}
          <div className="housing-rating">
            <Rating value={logement.rating} />
          </div>
        </div>
      </div>
      
      {/* Collapses: Description et équipements */}
      <div className="housing-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Housing