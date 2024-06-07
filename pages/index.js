import { useState } from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <header className="py-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full"
        />
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <li key={product.id} className="border p-4">
            <Link href={`/product/${product.id}`}>
                <h2 className="text-xl">{product.title}</h2>
                <p>{product.description}</p>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
