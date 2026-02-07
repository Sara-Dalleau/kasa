import { Link } from 'react-router-dom'

function Card({ title, cover, id }) {
  return (
    <div>
      <Link to={`/housing/${id}`}>
      <p>{title}</p>
      <img src={cover} alt={title} />
      </Link>
    </div>
  )
}

export default Card