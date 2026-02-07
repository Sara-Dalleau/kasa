import Banner from "../../components/Banner/index.jsx"
import Card from "../../components/Card/index.jsx"
import logements from '../../data/logements.json'

console.log(logements)

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card 
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}>
          </Card>
        ))}
      </div>
      </div>
  )
}

export default Home