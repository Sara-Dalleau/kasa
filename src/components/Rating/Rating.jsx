import starActive from "../../assets/images/star-active.svg"
import starInactive from "../../assets/images/star-inactive.svg"
import "./Rating.scss"

function Rating({ value }) {

  // On convertit la valeur en nombre (au cas où string)
  const rating = parseInt(value)

  return (
    <div className="rating">

      {/* On crée un tableau de 5 éléments pour générer 5 étoiles */}
      {[...Array(5)].map((_, index) => (
        <img
          key={index}

          // Si l’index est inférieur à la note → étoile active
          // Sinon → étoile inactive
          src={index < rating ? starActive : starInactive}
          alt="star"
        />
      ))}
    </div>
  )
}

export default Rating