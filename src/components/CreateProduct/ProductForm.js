
import { useState } from "react";
function ProductForm (props)
{
    let [pName , updateName]= useState('');
let [pPrice , updatePrice]= useState('');
let [pDesc , updateDesc]= useState('');
let [pAvailability , updateAvailability]= useState(false);
let [pimage , updateimage]= useState('');
    function nameChangeHandler(event)
    {
        updateName(event.target.value);
    }
    function priceChangeHandler(event)
    {
        updatePrice(event.target.value);
    }
    function descChangeHandler(event)
    {
        updateDesc(event.target.value);
    }
    function AvailabilityChangeHandler(event)
    {
        updateAvailability(event.target.checked);
    }
    function imageChangeHandler(event)
    {
        updateimage(event.target.value);
    }
    function submitHandler (event) {
           event.preventDefault();
           let product = {
            pID: 1, 
            pName: pName, 
            desc: pDesc,
            isAvailable: Boolean(pAvailability),
            image: pimage,
            price: Number(pPrice)
           }
           updateName('');
           updateAvailability(false);
           updateDesc('');
           updatePrice('');
           updateimage('');
           props.createproduct(product);
           props.clicked();
           
    }
    return (
        <form className="row g-3" onSubmit= {submitHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" 
                    value={pName}
                    onChange={nameChangeHandler}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price" 
                    value={pPrice}
                    onChange={priceChangeHandler}/>
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    value={pDesc}
                    onChange={descChangeHandler} />
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" value={pAvailability} onChange={AvailabilityChangeHandler}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" value = {pimage} onChange={imageChangeHandler}/>
        </div>
        

        <button  type="submit" className="btn btn-primary">Add Product</button>
        <button onClick = {props.clicked} type="button">Cancel</button>
    </form>
    )

}
export default ProductForm;
