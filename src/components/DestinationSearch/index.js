import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {userInput: ''}

  onChangeSearchInput = event => {
    const {userInput} = this.state
    this.setState({userInput: event.target.value})
    console.log(`user input ${userInput}`)
  }

  render() {
    const {destinationsList} = this.props
    const {userInput} = this.state
    const filteredDestinationList = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <h1>Destination Search</h1>

        <div className="input-element-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-image"
          />
        </div>
        <ul className="destination-list">
          {filteredDestinationList.map(eachItem => (
            <DestinationItem destination={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
