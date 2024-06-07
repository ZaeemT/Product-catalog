import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

export default function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-3xl">Your Cart</h1>
      <ul>
        {cart.map(product => (
          <li key={product.id} className="border p-2 my-2 flex justify-between">            
            <span>{product.title}</span>
            <button onClick={() => dispatch(removeFromCart(product.id))} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
