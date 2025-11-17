import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const images = [
  'https://images.unsplash.com/photo-1527169398770-5406b9b616b7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545242390-020372a5db93?q=80&w=1600&auto=format&fit=crop'
]

export default function Lifestyle() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [20, -10])
  const y2 = useTransform(scrollYProgress, [0, 1], [10, -20])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Matcha for your lifestyle</h2>
          <p className="mt-2 text-emerald-800/80">Slow mornings, mindful breaks, evening wind-downs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[y1, y2, y3].map((y, i) => (
            <motion.div
              key={i}
              style={{ y }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden border border-emerald-100 card-hover"
            >
              <img src={images[i]} alt="Lifestyle" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
