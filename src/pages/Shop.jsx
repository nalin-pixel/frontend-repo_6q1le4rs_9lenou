import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const items = [
  { id: 'ceremonial', name: 'Ceremonial Matcha', price: 36, image: 'https://images.unsplash.com/photo-1753009712810-3f72c3f72548?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZXJlbW9uaWFsJTIwTWF0Y2hhfGVufDB8MHx8fDE3NjM0MDIxNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'daily', name: 'Daily Ritual Matcha', price: 28, image: 'https://images.unsplash.com/photo-1732603891196-2b8cc24f39a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMFJpdHVhbCUyME1hdGNoYXxlbnwwfDB8fHwxNzYzNDAyMTQyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 'latte', name: 'Matcha Latte Blend', price: 24, image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1200&auto=format&fit=crop' },
  { id: 'starter', name: 'Starter Kit', price: 49, image: 'https://images.unsplash.com/photo-1753009712810-3f72c3f72548?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZXJlbW9uaWFsJTIwTWF0Y2hhfGVufDB8MHx8fDE3NjM0MDIxNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function ShopPage() {
  return (
    <div>
      <Navbar />
      <section className="pt-12 pb-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">Shop</h1>
            <p className="mt-2 text-emerald-800/80">All our blends, tools, and kits.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <a key={p.id} href={`/product/${p.id}`} className="group rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-emerald-900">{p.name}</h3>
                    <span className="text-emerald-800/80">${p.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
