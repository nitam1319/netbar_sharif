import { CardNameType, Metrics } from '../../types'
import Chart from './chart/Chart'
import './Card.css'
import domain from './assets/Earth.svg'
import upload from './assets/Upload.svg'
import IPs from './assets/Globe.svg'
import ports from './assets/Conflict.svg'
import vulns from './assets/Bug.svg'
import arrow from './assets/Down Left Arrow.svg'
import { memo } from 'react'

function selectImage (cardName: CardNameType) {
  if (cardName === 'cloud') {
    return upload
  } else {
    return domain
  }
}
function selectName (name: string) {
  switch (name) {
    case 'domain': {
      return 'Domains'
    }
    case 'ip': {
      return 'IP Addresses'
    }
    case 'cloud': {
      return 'Cloud Accounts '
    }
    default: {
      return name
    }
  }
}
const Card = memo(function ({
  cardData,
  cardName
}: {
  cardData: Metrics
  cardName: CardNameType
}) {
  return (
    <div className='card'>
      <div className='card_hade'>
        <div className='card_icon'>
          <div className={`${cardName}`}>
            <img
              src={selectImage(cardName)}
              alt={cardName}
              className='card_image'
            />
          </div>
          <span>{cardData.total}</span>
        </div>
        <img src={arrow} className='card_arrow' />
      </div>
      <div className='card_name'>
        <strong>{selectName(cardName)}</strong>
      </div>
      <hr />
      <div className='card_live'>
        <div className='live'>
          <div>
            <span>Live</span>
            <strong>{cardData.total_live}</strong>
          </div>
          <Chart data={cardData.live} total={cardData.total_live} />
        </div>
        <div className='live'>
          <div>
            <span>Monitored</span>
            <strong>{cardData.total_monitored}</strong>
          </div>
          <Chart data={cardData.monitored} total={cardData.total_monitored} />
        </div>
      </div>
      <hr />
      <div className='card_footer'>
        <div>
          <img src={IPs} alt='ip' />
          <div>
            <span>IPs</span>
            <strong>{cardData.ips}</strong>
          </div>
        </div>
        <div>
          <img src={ports} alt='port' />
          <div>
            <span>Ports</span>
            <strong>{cardData.ports}</strong>
          </div>
        </div>
        <div>
          <img src={vulns} alt='vulns' />
          <div>
            <span>Vulns</span>
            <strong>{cardData.vulns}</strong>
          </div>
        </div>
      </div>
    </div>
  )
})
export default Card
