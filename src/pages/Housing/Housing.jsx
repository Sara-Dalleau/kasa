// Hooks React Router : useParams pour récupérer l'id dans l'URL, Navigate pour rediriger
import { useParams, Navigate } from "react-router-dom"
// Hook React : useState pour gérer l'index de l'image du carousel
import { useState } from "react"

// Composant reutilisable
import logements from "../../data/logements.json"
import Collapse from "../../components/Collapse/index.jsx"
import Rating from "../../components/Rating/Rating"
import Tags from "../../components/Tags/Tags"
import Host from "../../components/Host/Host"

// Style
import "./Housing.scss"

function Housing() {

  // On récupère l'id dynamique dans l'URL (/housing/:id)
  const { id } = useParams()

  // Index de l'image actuellement affichée dans le carousel
  const [currentIndex, setCurrentIndex] = useState(0)

  // On cherche le logement correspondant à l'id
  const logement = logements.find((item) => item.id === id)

  // Si aucun logement n'existe pour cet id → redirection vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" />
  }

  // On récupère les images du logement
  const pictures = logement.pictures

  // Si pas d'images, la page ne peut pas fonctionner correctement donc : erreur
  if (!pictures || pictures.length === 0) {
    return <Navigate to="/error" />
  }

  // Nombre total d'images du carousel
  const totalImages = pictures.length

  // Image suivante: si on est à la dernières, retour à la première
  const nextImage = () => {
    setCurrentIndex(
      currentIndex === totalImages - 1 ? 0 : currentIndex + 1
    )
  }

  // Image precedente: si on est à la première, allé à la dernière)
  const prevImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? totalImages - 1 : currentIndex - 1
    )
  }

  return (
    <div className="housing container">

      {/* Carousel */}
      <div className="carousel">
        {/* Image affichée selon currentIndex */}
        <img
          src={pictures[currentIndex]}
          alt={logement.title}
        />
        
        {/* Compteur affiché seulement si + d'une image */}
        {totalImages > 1 && (
          <span className="carousel-counter">
            {currentIndex + 1} / {totalImages}
          </span>
        )}

        {/* Flèches affichées seulement si + d'une image */}
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

      {/* Partie haute : infos logement + tags + hôte + rating */}
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
        {/* Liste des équipements */}
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