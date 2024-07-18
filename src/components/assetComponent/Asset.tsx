import { memo } from 'react'
import { AssetItem } from '../../types'
import './Asset.css'
function convertTimestamp (timestamp: number) {
  const date = new Date(timestamp)
  return `${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}/${
    date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
  }/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
}
const Asset = memo(function ({ item }: { item: AssetItem }) {
  return (
    <div className='asset_item'>
      <span className='s1'>
        <div className={`${item.grade}`}>{item.grade}</div>
      </span>
      <span className='s2'>{item.name}</span>
      <span className='s3'>{item.total_vuls}</span>
      <span className='s4'>{convertTimestamp(item.lastSeen)} </span>
    </div>
  )
})
export default Asset
