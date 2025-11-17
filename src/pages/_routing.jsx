import { Routes, Route } from 'react-router-dom'
import HomePage from './Home'
import ShopPage from './Shop'
import AboutPage from './About'
import ContactPage from './Contact'
import ProductPage from './Product'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  )
}
