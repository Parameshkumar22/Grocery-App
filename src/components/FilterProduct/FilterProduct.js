import './FilterProduct.css'

let FilterProduct = (props) => 
{
    function filtervaluehandler (event)
    {
        return props.filterProduct(event.target.value)
    }
    return (
        <div className="filter-area">
     <select name="isAvailable" onChange={filtervaluehandler}>
         <option value="all">All</option>
         <option value="available">Available</option>
         <option value="unavailable">Unavailable</option>
     </select>
</div>
    )
}
export default FilterProduct;