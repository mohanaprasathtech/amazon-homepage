import React from 'react'
import './Product.css';
import StarHalfIcon from '@material-ui/icons/StarHalf';
function Product({ title, image, price, rating }) {
    return (
        <div className="product">
           <div className="product-info">
               <p>{ title }</p>
               <p className="product-price">
                   <small>$</small>
                   <strong>{ price }</strong> 
                </p>
                <div className="product-rating">
                <p>  <StarHalfIcon /></p>
                <p>  <StarHalfIcon /></p>
                <p>  <StarHalfIcon /></p>
                <p>  <StarHalfIcon /></p>
                <p>  <StarHalfIcon /></p>
                   
                </div>
           </div>

           <img  src={ image }></img>

           <button className="product-btn">Add to cart</button>
        </div>
    )
}

export default Product