// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="buttons-container">
          <div className="card-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="card-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
