import { useCallback, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider } from '@/context/CartContext';
import { useRoute, type Route } from '@/router';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import CartPage from '@/pages/CartPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function renderPage(route: Route) {
  switch (route.path) {
    case '/':
      return <HomePage />;
    case '/products':
      return <ProductsPage />;
    case '/cart':
      return <CartPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [route, setRoute] = useState<Route>({ path: '/' });
  const onRoute = useCallback((r: Route) => setRoute(r), []);
  useRoute(onRoute);

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{renderPage(route)}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
