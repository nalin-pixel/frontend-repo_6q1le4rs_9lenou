import { motion } from 'framer-motion'
import { Leaf, Sparkles, HeartHandshake, Timer } from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: 'Clean, vibrant energy',
    desc: 'Steady focus without the jitters. A calm lift that lasts.'
  },
  {
    icon: Sparkles,
    title: 'Rich in antioxidants',
    desc: 'Stone-ground young tea leaves packed with natural goodness.'
  },
  {
    icon: Timer,
    title: 'Mindful ritual',
    desc: 'A moment to slow down, breathe, and reset your rhythm.'
  },
  {
    icon: HeartHandshake,
    title: 'Ethically sourced',
    desc: 'Small-farm partners and careful harvesting for premium quality.'
  }
]

export default function Benefits() {
  return (
    <section id="learn" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Why people love our matcha</h2>
          <p className="mt-3 text-emerald-800/80 max-w-2xl mx-auto">Crafted for clarity, blended for balance, and designed to fit beautifully into your day.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-emerald-900 mb-1">{b.title}</h3>
              <p className="text-emerald-800/80 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
