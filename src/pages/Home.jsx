import Banner from "../components/Banner"
import Card from "../components/Card"
import logements from '../data/logements.json'

console.log(logements)

function Home() {
  return (
    <>
      <Banner />
      <div>
        {logements.map((logement) => (
          <Card 
            key={logement.id}
            title={logement.title}
            cover={logement.cover}>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home