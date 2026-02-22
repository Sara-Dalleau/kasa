import "./Tags.scss"

function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  )
}

export default Tags