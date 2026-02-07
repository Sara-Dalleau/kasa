import bannerImage from '../../assets/images/banner.png'
import './Banner.scss'

function Banner () {
  return (
    <div className='banner'>
      <img src={bannerImage} alt="" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner