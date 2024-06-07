// components/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import Link from 'next/link';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-2xl">Cart</h2>
      
      <ul>
        {cart.map(product => (
          <li key={product.id} className="p-2 my-2 flex justify-between">
            <span>{product.title}</span>
            <button onClick={() => dispatch(removeFromCart(product.id))} className="text-red-500 border">Remove</button>
          </li>
        ))}
      </ul>
      
      <Link  href="/cart" className="text-blue-500">
        View Cart
      </Link>
    </div>
  );
}
