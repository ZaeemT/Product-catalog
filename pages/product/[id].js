import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const paths = data.products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">{product.title}</h1>
      <p>{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
}
