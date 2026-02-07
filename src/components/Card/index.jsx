import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ title, cover, id }) {
  return (
    <div className='card'>
      <Link to={`/housing/${id}`}>
      <p>{title}</p>
      <img src={cover} alt={title} />
      </Link>
    </div>
  )
}

export default Card