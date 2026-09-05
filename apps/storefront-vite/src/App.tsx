import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

// Import pages
import Home from './pages/Home';
import About from './pages/about/page';
import Account from './pages/account/page';
import Blog from './pages/blog/page';
import Cart from './pages/cart/page';
import Categories from './pages/categories/page';
import CategorySlug from './pages/categories/[slug]/page';
import Checkout from './pages/checkout/page';
import Contact from './pages/contact/page';
import Cookies from './pages/cookies/page';
import Faq from './pages/faq/page';
import Login from './pages/login/page';
import Order from './pages/order/[id]/page';
import Privacy from './pages/privacy/page';
import Register from './pages/register/page';
import Returns from './pages/returns/page';
import Search from './pages/search/page';
import Shipping from './pages/shipping/page';
import Shop from './pages/shop/page';
import SizeGuide from './pages/size-guide/page';
import Terms from './pages/terms/page';

function App() {
  return (
    <div className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col justify-between">
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<Account />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:slug" element={<CategorySlug />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/register" element={<Register />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/search" element={<Search />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </div>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
