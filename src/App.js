import './App.css'
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';
import { useState } from 'react';
import FilterProduct from './components/FilterProduct/FilterProduct';
let products = [
    {
        pID: 1, 
        pName: 'Fresh Milk', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 12
    },
    {
        pID: 2, 
        pName: 'Cottage Cheese', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10
    },
    {
        pID: 3, 
        pName: 'Brocoli', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15
    },
    {
        pID: 4, 
        pName: 'oranges', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/oranges.png",
        price: 20
    },
    {
        pID: 5, 
        pName: 'Olive oil', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    }
]

function App ()

{  let [productcomponent, updateproduct ] = useState(products);
    let [filterproduct,updatedproduct]= useState('all');
    function FilterProductHandler (filtername) 
    {
          updatedproduct(filtername);
          
    }
    function createProduct (product)
    { product.pID = productcomponent.length +1;
        
        updateproduct([product, ...productcomponent]);
    }
    let newProductcomponent = 

        productcomponent.filter( (prod)=> {
            if( filterproduct === 'available')
            return prod.isAvailable===true;
            else if (filterproduct === 'unavailable')
            {
            return prod.isAvailable ===false }
            else return prod;
        } )

    
    return (
        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            <CreateProduct create = {createProduct}/>
            <FilterProduct filterProduct = {FilterProductHandler}/>
            <ProductList newproduct = {newProductcomponent}/>;
        </div>
      </div>
    );
}
export default App;

