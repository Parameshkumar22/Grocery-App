function Button (props)
{
    return (
        <button    onClick={props.eventHandler} className=" btn btn-primary" disabled = {(props.onlimit)}>{props.children}</button>
    );
} 
export default Button;