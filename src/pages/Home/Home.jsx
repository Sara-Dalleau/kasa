import Banner from "../../components/Banner/index.jsx"
import Card from "../../components/Card"
import logements from "../../data/logements.json"
import bannerHome from "../../assets/images/banner.svg"
import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <div className="home-content">

        {/* Banner reçoit une image et un titre via props */}
        <Banner
          img={bannerHome}
          title="Chez vous, partout et ailleurs"
        />

        {/* On parcourt le tableau logements pour créer une Card par logement */}
        <div className="cards-container">
          {logements.map((logement) => (

            // key obligatoire pour que React identifie chaque élément de la liste
            <Card
              key={logement.id}
              id={logement.id} // utilisé pour la navigation vers /housing/:id
              title={logement.title} // affiché dans la carte
              cover={logement.cover} // image du logement
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home