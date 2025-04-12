// App.jsx
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import './index.scss' // ✅ Importación global del SCSS



function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}

export default App
