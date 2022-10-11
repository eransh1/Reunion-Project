import React, {useState } from 'react'
import "../css/Home.css"
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import PropDisplay from './PropDisplay'
import data from '../api/RentList'
import FavPropDisplay from './FavPropDisplay'

const Home = () => {
  const[navId,setNavId]=useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const[propType,setPropType]=useState("")
  const[minPriceRange,setMinPriceRange]=useState("")
  const[maxPriceRange,setMaxPriceRange]=useState()
  const[priceRange,setPriceRange]=useState("")
  const[isSearched,setIsSearched]=useState(false)
  const[shiftingDate,setShiftingDate]=useState()
  const[state,setState]=useState("")
  const[propData,setPropData]=useState(data)
  const[favProp,setFavProp]=useState([])
  const[isHeartClickId,setIsHeartClickId]=useState([])

  console.log(shiftingDate)

  const handleSearchBtnClick=()=>{
    if(state.length===0||selectedDate.length===0||propType.length===0||minPriceRange.length===0){alert("Plz Fill Data")}

    setIsSearched(true)
    const shiftDate=selectedDate
    const shiftTime=shiftDate.getTime()
    setShiftingDate(shiftTime)

    const newPropData=data.filter((item)=>{
     if (state.toLowerCase().includes(item.city.toLowerCase())&&
     propType.toLowerCase().includes(item.propertyType.toLowerCase())&&
     minPriceRange<item.price&&maxPriceRange>item.price
     )
     {return item}
   
    })
    
    setPropData(newPropData)
  }
    
 
    return (

    <>
   <Navbar id={navId} setId={setNavId}/>
   {navId===1?<>
   <SearchBar priceRange={priceRange} setPriceRange={setPriceRange} setState={setState} handleSearchBtnClick={handleSearchBtnClick} setMaxPriceRange={setMaxPriceRange} maxPriceRange={maxPriceRange} minPriceRange={minPriceRange} setMinPriceRange={setMinPriceRange} selectedDate={selectedDate} setSelectedDate={setSelectedDate} propType={propType} setPropType={setPropType} />
   <PropDisplay isHeartClickId={isHeartClickId} setIsHeartClickId={setIsHeartClickId} setFavProp={setFavProp} propData={propData} />
   </>
   :null}
   {navId===4?<FavPropDisplay isHeartClickId={isHeartClickId} setIsHeartClickId={setIsHeartClickId} setFavProp={setFavProp} favProp={favProp} />:null}
   
    </>
  )
}

export default Home