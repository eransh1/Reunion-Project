import React from 'react'
import "../css/PropDisplay.css"

const PropDisplay = ({propData,setFavProp,isHeartClickId,setIsHeartClickId}) => {


 function favPropClick(id,item){

setFavProp((prev)=>{
  return ([...prev,item])
})
setIsHeartClickId((prev)=>{
return [...prev,id]
})
 }

  return (
    <section id='propDisplay'>
        <div className='row prop-disp-row'>
           {propData.map((item)=>{
            return (<>
              <div className="col-sm-12 col-md-6 col-lg-4 prop-col" key={item.id} id={item.id}>
               <div  className='prop-img-cont'><img className='prop-img' src={item.img} alt="prop-img" /></div> 
            <div className='tag'> POPULAR</div>
            <p className='price'>${item.price} <span>/month</span></p>
            <div className='circle'><i style={{color:isHeartClickId.includes(item.id)?"red":"grey"}} onClick={()=>favPropClick(item.id,item)} className="fa-solid fa-heart heart"></i></div>
            <p className='name'>{item.name}</p>
            <p className='address'>{item.formattedAddress}</p>
            <div className='description'>
            <i className="fa-solid fa-bed bed"></i>
            <p className='bed-text'>{item.bedrooms} Beds</p>
            <i class="fa-solid fa-shower bed"></i>
            <p className='bed-text'>{item.bathrooms} Bathrooms</p>
            <i class="fa-solid fa-chart-area bed"></i>
            <p className='bed-text'>{item.squareFootage} &#13217;</p>.
            </div>
            
            </div>

            </>)
           })}
            
        </div>
    </section>
  )
}

export default PropDisplay