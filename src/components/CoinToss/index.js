// Write your code here

import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (toss === 0) {
      tossImg = HEADS_IMG_URL
      updatedHeadsCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      updatedTailsCount += 1
    }
    this.setState({
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
      tossResultImg: tossImg,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultImg} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            className="toss-result-img"
            src={tossResultImg}
            alt="toss result"
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount} </p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
