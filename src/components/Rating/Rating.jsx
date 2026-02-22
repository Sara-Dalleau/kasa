import starActive from "../../assets/images/star-active.svg"
import starInactive from "../../assets/images/star-inactive.svg"
import "./Rating.scss"

function Rating({ value }) {
  const rating = parseInt(value)

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starActive : starInactive}
          alt="star"
        />
      ))}
    </div>
  )
}

export default Rating