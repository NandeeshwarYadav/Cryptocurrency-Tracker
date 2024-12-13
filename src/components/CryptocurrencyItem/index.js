// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, id, usdValue} = item

  return (
    <li className="items">
      <div className="logo-name">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro">
        <div className="usd">
          <p>{usdValue}</p>
        </div>
        <div>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
