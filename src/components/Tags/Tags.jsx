import "./Tags.scss"

function Tags({ items }) {
  // Composant reçoit un tableau de tags via props
  // Affiche chaque tag dans un <span>

  return (
    <div className="tags">
      {/* On parcourt le tableau pour générer un élément par tag */}
      {items.map((tag, index) => (

        // key nécessaire pour que React identifie chaque élément
        <span key={index}>{tag}</span>
      ))}
    </div>
  )
}

export default Tags