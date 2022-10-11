import React from 'react'
import "../css/FavPropDisplay.css"

const FavPropDisplay = ({favProp,setFavProp,isHeartClickId,setIsHeartClickId}) => {

function handleDeleteFavPropClick(id){
  
  const newFavPropData=favProp.filter((prev)=>{
    return prev.id!==id;
  })
  const newHeartClickId=isHeartClickId.filter((prev)=>{
    return prev!==id;
  })
  setFavProp(newFavPropData)
  setIsHeartClickId(newHeartClickId)
}

  return (
   <section className='fav-prop-display'>
    {favProp.length===0?<div className='pinned-prop-message'>Your Pinned Property Will Be Available Here</div>:null}
    <div className='row fav-prop-disp-row'>
           {favProp.map((item)=>{
            return (<>
              <div className="col-sm-12 col-md-6 col-lg-4 prop-col" key={item.id} id={item.id}>
               <div  className='prop-img-cont'><img className='prop-img' src={item.img} alt="prop-img" /></div> 
            <div className='tag'> POPULAR</div>
            <p className='price'>${item.price} <span>/month</span></p>
            <div className='circle'><i onClick={()=>handleDeleteFavPropClick(item.id)} className="fa-solid fa-trash trash"></i></div>
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

export default FavPropDisplay