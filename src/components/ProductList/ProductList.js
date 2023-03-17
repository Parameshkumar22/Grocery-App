import Products from "./Products";



function ProductList (props) 
{
    
    return  props.newproduct.length===0? <h3>NO products Available</h3> :(
        
        
        <ul className="list-group shadow">
       
          {  props.newproduct.map((product) => {
                return ( <Products key = {product?.pID} id = {product?.pID} name ={product?.pName}  desc={product?.desc} isAvailable={ product?.isAvailable} price={product?.price}/>);
            })
        }
         
         </ul>
    );
}
export default ProductList;