import './index.css'

const DestinationItem = props => {
  const {destination} = props

  const {name, imgUrl} = destination

  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="text">{name}</p>
    </li>
  )
}

export default DestinationItem
