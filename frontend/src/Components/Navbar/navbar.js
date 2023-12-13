import React, {useState} from 'react';
import './navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='logoImg' src={logo} alt="logo" />
                <p>TOMORROW WEAR</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}} className='nav-li'>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}} className='nav-li'>Men{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}} className='nav-li'>Women{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}} className='nav-li'>Kids{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button className='nav-login-cartBtn'>Login</button>
                <img src={cart_icon} alt="cart" />
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar