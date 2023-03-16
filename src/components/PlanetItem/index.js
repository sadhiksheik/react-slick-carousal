import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
