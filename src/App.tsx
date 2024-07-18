import { useEffect, useState } from 'react'
import './App.css'
import { AssetItem, Data } from './types'
import Card from './components/cardComponent/Card'
import Asset from './components/assetComponent/Asset'
import Loader from './components/Loader/Loader'

function App () {
  const [data, setData] = useState<Data | null>(null)
  const [assets, setAssets] = useState<AssetItem[]>([])
  const [filterId, setFilterId] = useState<string>('')
  function filterData (type: string) {
    if (filterId !== type) {
      setFilterId(type)
      const filteredDataByType = data?.assets.filter(item => item.type === type)
      if (filteredDataByType) {
        setAssets(filteredDataByType)
      } else {
        setAssets([])
      }
    } else {
      setFilterId('')
      if (data?.assets) setAssets(data?.assets)
    }
  }
  async function getData () {
    await fetch('https://run.mocky.io/v3/775dbd89-9369-4928-a9c1-71c39bffeefd')
      .then(response => {
        if (response?.status >= 200 && response?.status < 300) {
          const res = response.json()
          res.then(res => {
            setData(res)
            setAssets(res.assets)
          })
        } else {
          console.error(response)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return data ? (
    <main>
      <div className='card_box'>
        <div
          onClick={() => {
            filterData('domain')
          }}
          style={{border:filterId==='domain'?'1px solid #4986bf':'none'}}
        >
          <Card cardData={data.domain} cardName='domain' />
        </div>
        <div
          onClick={() => {
            filterData('ip')
          }}
          style={{border:filterId==='ip'?'1px solid #4986bf':'none'}}
        >
          <Card cardData={data.ip} cardName='ip' />
        </div>
        <div
          onClick={() => {
            filterData('cloud')
          }}
          style={{border:filterId==='cloud'?'1px solid #4986bf':'none'}}
        >
          <Card cardData={data.cloud} cardName='cloud' />
        </div>
      </div>
      <div className='assets'>
        <strong>Assets</strong>
        <div className='assets_box'>
          <div className='asset_header'>
            <span className={'s1'}>Grade</span>
            <span className='s2'>Name</span>
            <span className='s3'>Total Vulnerabilities</span>
            <span className='s4'>Last Seen</span>
          </div>
          <div className='asset_box_cards'>
            {assets.map((item, index) => (
              <Asset item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  ) : (
    <Loader/>
  )
}

export default App

