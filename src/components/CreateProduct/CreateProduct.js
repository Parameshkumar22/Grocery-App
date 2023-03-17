import ProductForm from "./ProductForm";
import { useState } from "react";

function CreateProduct (props) 
{
    let [setproduct , updatingproduct]= useState(false);
    function ProductFormHandler () 
    {
        updatingproduct(true);
    }
 function createProductHandler(product)
 {
    props.create(product);
 }   
 function clickedHandler () 
 {
    updatingproduct(false);
 }
    
    return<div >
        {!setproduct &&<button onClick= {ProductFormHandler}>create product</button>}
    {setproduct && <div  style={{backgroundColor : 'white' , padding: '10px 20px' , 'border-radius' :'4px'}}>
        <ProductForm clicked= {clickedHandler} createproduct = {createProductHandler}/>
    </div> }
</div> }
export default CreateProduct;