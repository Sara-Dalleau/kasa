import './Banner.scss'

function Banner({ img, title }) {
  return (
    <div className="banner">
      <img src={img} alt="" />
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner