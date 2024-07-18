import { memo } from 'react'
import './Loader.css'

const Loader = memo(function () {
  return (
    <div className='loading'>
      <div className='loader' />
    </div>
  )
})
export default Loader
