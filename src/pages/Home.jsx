import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import FeaturedProducts from '../components/FeaturedProducts'
import Lifestyle from '../components/Lifestyle'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <Lifestyle />
      <Reviews />
      <Footer />
    </div>
  )
}
