import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-emerald-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-900"
          >
            Calm energy in every sip
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-emerald-800/80 text-lg leading-relaxed max-w-xl"
          >
            Small-batch ceremonial matcha crafted for slow mornings, focused afternoons, and rituals that feel good.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#shop" className="rounded-full bg-emerald-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-emerald-700 transition-colors">Shop Matcha</a>
            <a href="#learn" className="rounded-full bg-emerald-100 text-emerald-900 px-6 py-3 font-medium hover:bg-emerald-200 transition-colors">Why Matcha</a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-emerald-100 shadow-[0_10px_40px_rgba(16,185,129,0.12)]">
          <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
