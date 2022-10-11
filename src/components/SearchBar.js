import React, { useState } from 'react'
import "../css/SearchBar.css"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SearchBar = ({priceRange,setPriceRange,setState,handleSearchBtnClick,selectedDate,setSelectedDate,propType,setPropType,minPriceRange,setMinPriceRange,maxPriceRange,setMaxPriceRange}) => {
const[showPriceList,setShowPriceList]=useState(false)
const[showPropType,setShowPropType]=useState(false)
const[searchWithSearchbar,setSearchWithSearchBar]=useState(false)


  return (
    <section id='searchbar'>
    <div className='searchbar-header'>
    <h1 className='searchbar-text'>Search Properties to rent</h1>
    <button onClick={()=>setSearchWithSearchBar(current=>!current)} className='ms-auto searchbar-btn'>Search with SearchBar <i className="fa-solid fa-angle-down down-arrow"></i></button> 
    </div>
    {searchWithSearchbar?<div className="search-cont">
    <div className='location-cont'>
        <p className='input-text'>Location</p>
        <input onChange={(e)=>setState(e.target.value)} type="text" name='location' id='location' placeholder='Location' />
        <hr className='line' />
    </div>
    <div className='location-cont'>
        <p className='input-text'>When To Move</p>
        <DatePicker
        className={"date-picker"}
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
        showYearDropdown // year show and scrolldown alos
        scrollableYearDropdown
      />
        <hr className='line' />
    </div>
    <div className='price-cont'>
        <p className='input-text'>Price</p>
        <div className='price-selector'>{minPriceRange.length===0?null:priceRange}<i onClick={()=>setShowPriceList(current=>!current)} className="fa-solid fa-angle-down down-arroww ms-auto"></i></div>
        {showPriceList?<div className='price-list'>
            <p onClick={()=>{setPropType("Flat");setMinPriceRange(300);setMaxPriceRange(1000);setPriceRange("Less than $1000");setShowPriceList(false)}} className='price-item'>Less than $1000</p>
            <p onClick={()=>{setPropType("Apartment");setMinPriceRange(1001);setMaxPriceRange(3000);setPriceRange("$1000 to $3000");setShowPriceList(false)}} className='price-item'>$1000 to $3000</p>
            <p onClick={()=>{setPropType("Houses");setMinPriceRange(3001);setMaxPriceRange(5000);setPriceRange("More than $3000");setShowPriceList(false)}} className='price-item'>More than $3000</p>
        </div>:null}
        <hr className='line' />
    </div>
    <div className='price-cont'>
        <p className='input-text'>Property Type</p>
        <div className='price-selector'>{propType} <i onClick={()=>setShowPropType(current=>!current)} className="fa-solid fa-angle-down down-arroww ms-auto"></i></div>
        {showPropType?<div className='price-list'>
            <p onClick={()=>{setPropType("Houses");setMinPriceRange(3001);setMaxPriceRange(5000);setPriceRange("More than $3000");setShowPropType(false)}} className='house-type-item'>Houses</p>
            <p onClick={()=>{setPropType("Apartment");setMinPriceRange(1001);setMaxPriceRange(3000);setPriceRange("$1000 to $3000");setShowPropType(false)}} className='house-type-item'>Apartment</p>
            <p onClick={()=>{setPropType("Flat");setMinPriceRange(300);setMaxPriceRange(1000);setPriceRange("Less than $1000");setShowPropType(false)}} className='house-type-item'>Flat</p>
        </div>:null}
        <hr className='line' />
    </div>

        <button onClick={handleSearchBtnClick} className='nav-btn-Login search-button'>Search</button>

    </div>:null}
    </section>
  )
}

export default SearchBar