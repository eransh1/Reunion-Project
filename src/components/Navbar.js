import React from 'react'
import "../css/Navbar.css"

const Navbar = ({id,setId}) => {
  return (
    <section id='navbar'>
    <div className='navbar'>
<i className="fa-solid fa-house brand-icon"></i>
<h1 className='brand-name'>Reunion</h1>
<p onClick={()=>setId(1)} className={'first-nav-item nav-item '+(id===1?"activee":"")}>Rent</p>
<p onClick={()=>setId(2)} className={'nav-item '+(id===2?"activee":"")}>Buy</p>
<p onClick={()=>setId(3)} className={'nav-item '+(id===3?"activee":"")}>Sell</p>
<p onClick={()=>setId(4)} className={'nav-item '+(id===4?"activee":"")}>Favourites</p>
<button className='nav-btn-Login'>Log In</button>
<button className='nav-btn-Signup'>Sign Up</button>
</div>
    </section>
  )
}

export default Navbar