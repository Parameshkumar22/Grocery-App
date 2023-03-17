import Button from "./Button";
import { useState } from "react";

function ProductDetails (props) 
{
   

let [productCount , updateCount]=useState(0);
function displayFormattedProductCount()
{
    return productCount> 0 ? productCount : 'Zero';
}
    let badgeclass = 'badge-margin-left-40 badge ';
    badgeclass += props.isAvailable ? 'bg-success' : 'bg-danger';
    function incrementfunction () 
    {
       updateCount(++productCount);
    }
    function decrementfunction () 
    {
        updateCount(--productCount);
    }

    return (
        
        <div className="d-flex align-items-center justify-content-start mt-1">
        <h6 className=" margin-right-5 font-weight-bold my-2">$ {props.price}</h6>
        <Button eventHandler={decrementfunction} onlimit = {productCount==0} >-</Button>
        <span style={{padding :'0px 14px' , 'font-size': 13}}>{displayFormattedProductCount()}</span>
        <Button eventHandler={incrementfunction}>+</Button>
        <span className={badgeclass}>{props.isAvailable ? 'Available': 'UnAvailable'}</span>
      </div>

    );
}
export default ProductDetails;