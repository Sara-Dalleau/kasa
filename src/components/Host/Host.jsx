import "./Host.scss"

function Host({ name, picture }) {
  return (
    <div className="host">
      <p>{name}</p>
      <img src={picture} alt={name} />
    </div>
  )
}

export default Host