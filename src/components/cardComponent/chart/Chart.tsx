import './Chart.css'
function findHeight(data:number,total:number):number{
    const heightBar = data/(total/45)
    return(+(heightBar))
}
export default function Chart({data , total}:{data:number[],total:number}) {
  return (
    <div className='card_chart_box'>
      {
        data.map((item,index) => {
            return (<div style={{height:findHeight(item , total), maxHeight:45}} key={index}/>)
        })
      }
    </div>
  )
}
