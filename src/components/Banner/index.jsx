import './Banner.scss'

function Banner({ img, title }) {
  return (
    <div className="banner">
      {/* Image reçue via props */}
      <img src={img} alt="" />
      {/* Le titre s'affiche seulement s'il existe */}
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner