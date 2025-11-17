import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Maya',
    text: 'The smooth energy is unreal. No crash, just clarity.',
  },
  {
    name: 'Elias',
    text: 'Tastes clean and bright — my favorite morning ritual.',
  },
  {
    name: 'Harper',
    text: 'Beautiful packaging and the quality is next-level.',
  },
  {
    name: 'Noah',
    text: 'I swapped my coffee and feel so much better.',
  },
]

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">What people are saying</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <p className="text-emerald-900">“{r.text}”</p>
              <p className="mt-4 text-sm text-emerald-800/80">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
