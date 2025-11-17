import { motion } from 'framer-motion'

const products = [
  {
    id: 'ceremonial',
    name: 'Ceremonial Matcha',
    price: 36,
    image: 'https://images.unsplash.com/photo-1753009712810-3f72c3f72548?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZXJlbW9uaWFsJTIwTWF0Y2hhfGVufDB8MHx8fDE3NjM0MDIxNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'daily',
    name: 'Daily Ritual Matcha',
    price: 28,
    image: 'https://images.unsplash.com/photo-1732603891196-2b8cc24f39a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMFJpdHVhbCUyME1hdGNoYXxlbnwwfDB8fHwxNzYzNDAyMTQyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'latte',
    name: 'Matcha Latte Blend',
    price: 24,
    image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Featured blends</h2>
            <p className="mt-2 text-emerald-800/80">Our most-loved matcha for every mood.</p>
          </div>
          <a href="/shop" className="hidden sm:inline-flex rounded-full bg-emerald-100 text-emerald-900 px-4 py-2 text-sm font-medium hover:bg-emerald-200">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.a
              href={`/product/${p.id}`}
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-emerald-900">{p.name}</h3>
                  <span className="text-emerald-800/80">${p.price}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
