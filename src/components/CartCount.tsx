import useCounterStore from "../store/zustand";

const CartCount = () => {
    const counter = useCounterStore(s=>s.counter)
    console.log('Render');
    

    return ( 
        <div className="cart-container">
            <span>{counter}</span>
        </div>
     );
}
 
export default CartCount;