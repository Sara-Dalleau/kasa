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
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse







  //Note pour moi meme:

  // Au clic, on inverse la valeur avec !isOpen, ce qui permet d’ouvrir ou fermer le composant sans écrire de condition supplémentaire.
  // collapse--open sert de signal au CSS, collapse--open > classe d’état, ajoutée uniquement si isOpen === true

  // on previligie un booleen quand un état n'a que deux possibilité. Ici ouvert, fermé.

  // <div className={`collapse ${isOpen ? "collapse--open" : ""}`}> 
  //Cette syntaxe permet de transmettre l’état du composant au CSS via une classe. La classe de base est toujours présente, et une classe d’état est ajoutée uniquement lorsque le Collapse est ouvert.
  //le CSS ne connaît pas isOpen, react seul le connait il faut donc traduire l’état React en quelque chose que le CSS comprend donc ici une className. 