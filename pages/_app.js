// pages/_app.js
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import Link from 'next/link';
import Cart from '../components/Cart';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <Link className="text-2xl" href="/">
              Product Catalog
            </Link>
            <Cart />
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}

export default MyApp;
