// Hook useState pour gérer l’état ouvert / fermé
import { useState } from "react"
import arrow from "../../assets/images/arrow-back.svg"
import "./Collapse.scss"

function Collapse({ title, children }) {

  // isOpen = état du collapse (true = ouvert, false = fermé)
  // On utilise un booléen car il n’y a que deux états possibles
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Classe de base toujours présente
    // Classe supplémentaire ajoutée seulement si le collapse est ouvert
    <div className={`collapse ${isOpen ? "collapse-open" : ""}`}>
      <button
        type="button"
        className="collapse-header"

        // Au clic, on inverse l’état
        // !isOpen permet d’ouvrir si fermé et fermer si ouvert
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="collapse-title">{title}</h2>

        {/* La flèche tourne seulement si le collapse est ouvert */}
        <img
          className={`collapse-arrow ${isOpen ? "rotate" : ""}`}
          src={arrow}
          alt=""
          aria-hidden="true"
        />
      </button>
      
      {/* Le contenu est affiché uniquement si isOpen est true */}
      <div className="collapse-content">
        <div className="collapse-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Collapse