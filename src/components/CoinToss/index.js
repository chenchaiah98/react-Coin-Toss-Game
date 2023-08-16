// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, Heads: 0, Tails: 0, isHead: true}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        Heads: prevState.Heads + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        Tails: prevState.Tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {total, Heads, Tails, isHead} = this.state

    const imgUrl = isHead
      ? {
          url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        }
      : {
          url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        }

    return (
      <div className="main-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div>
            <img className="coin-image" src={imgUrl.url} alt="toss result" />
          </div>
          <button
            type="button"
            onClick={this.tossCoin}
            className="button
          "
          >
            Toss coin
          </button>
          <div className="count-container">
            <div>
              <p>{`Total: ${total}`}</p>
            </div>
            <div>
              <p>{`Heads: ${Heads}`}</p>
            </div>
            <div>
              <p>{`Tails: ${Tails}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
