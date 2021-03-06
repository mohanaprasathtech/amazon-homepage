import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img 
                className="header-logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            />
            </Link>
           
            <div className="header-search">
                <input 
                className="header-searchinput" 
                type="text" />
                {/*Logo*/}
                <SearchIcon className="header-seachicon" />
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="headeroption-lineone">Hello Mohan</span>
                    <span className="headeroption-linetwo">Sign In</span>
                </div>

                <div className="header-option">
                    <span className="headeroption-lineone">Returns</span>
                    <span className="headeroption-linetwo">Orders</span>
                </div>

                <div className="header-option">
                    <span className="headeroption-lineone">Your</span>
                    <span className="headeroption-linetwo">Prime</span>
                </div>

                <Link to="/checkout">
                <div className="header-basketoption">
                    <ShoppingBasketIcon />
                    <span className="headeroption-lineone header-basketcount">0</span>
                </div>
                </Link>
                
                
            </div>
        </div>
    )
}

export default Header
