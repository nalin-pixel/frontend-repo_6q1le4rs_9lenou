import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const productData = {
  ceremonial: {
    name: 'Ceremonial Matcha',
    price: 36,
    images: [
      'https://images.unsplash.com/photo-1543233726-0dfe4ab1bdae?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545242390-020372a5db93?q=80&w=1600&auto=format&fit=crop',
    ],
    description:
      'Shade-grown, first-harvest leaves stone-ground to a silky powder. Bright, smooth, and naturally sweet.',
    ingredients: '100% Japanese green tea',
    benefits: ['Calm focus', 'High in antioxidants', 'Naturally uplifting'],
  },
  daily: {
    name: 'Daily Ritual Matcha',
    price: 28,
    images: [
      'https://images.unsplash.com/photo-1546549039-49e2ad86460a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1600&auto=format&fit=crop',
    ],
    description:
      'Balanced and versatile. Perfect for lattes, baking, or a quick whisk-and-sip moment.',
    ingredients: 'Japanese green tea',
    benefits: ['Steady energy', 'Versatile use', 'Smooth flavor'],
  },
  latte: {
    name: 'Matcha Latte Blend',
    price: 24,
    images: [
      'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543233726-0dfe4ab1bdae?q=80&w=1600&auto=format&fit=crop',
    ],
    description:
      'Creamy, cozy, and delicious. Blends seamlessly into your favorite milk for café-style lattes at home.',
    ingredients: 'Matcha, organic coconut sugar',
    benefits: ['Cafe-style taste', 'Easy to prepare', 'Comforting'],
  },
}

export default function ProductPage({ id }) {
  const slug = window.location.pathname.split('/').pop()
  const product = productData[slug] || productData.ceremonial

  return (
    <div>
      <Navbar />
      <main className="pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((src) => (
                <div key={src} className="rounded-3xl overflow-hidden border border-emerald-100">
                  <img src={src} alt={product.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">{product.name}</h1>
              <p className="mt-2 text-2xl text-emerald-800/90">${product.price}</p>
              <p className="mt-6 text-emerald-800/80">{product.description}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-emerald-900">Ingredients</h3>
                <p className="text-emerald-800/80">{product.ingredients}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-emerald-900">Benefits</h3>
                <ul className="list-disc list-inside text-emerald-800/80">
                  {product.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 rounded-full bg-emerald-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-emerald-700 transition-colors">Add to cart</button>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">You may also like</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(productData)
                    .filter(([key]) => key !== slug)
                    .slice(0, 2)
                    .map(([key, p]) => (
                      <a key={key} href={`/product/${key}`} className="rounded-2xl overflow-hidden border border-emerald-100 bg-white">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex items-center justify-between">
                          <h4 className="font-semibold text-emerald-900">{p.name}</h4>
                          <span className="text-emerald-800/80">${p.price}</span>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
