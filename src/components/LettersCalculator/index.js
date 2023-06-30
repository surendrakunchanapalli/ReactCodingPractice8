import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeSearchInput = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="container-2">
          <div className="card">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="paragraph" className="paragraph">
              Enter the phrase
            </label>
            <br />
            <input
              type="search"
              id="letter"
              className="search-input"
              placeholder="Enter the phrase"
              onChange={this.onChangeSearchInput}
            />
            <br />
            <p className="paragraph-2">No.of letters: {count.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
