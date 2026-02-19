import Banner from "../../components/Banner/index.jsx"
import Card from "../../components/Card"
import logements from "../../data/logements.json"
import bannerHome from "../../assets/images/banner.png"
import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <Banner
          img={bannerHome}
          title="Chez vous, partout et ailleurs"
        />

        <div className="cards-container">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home