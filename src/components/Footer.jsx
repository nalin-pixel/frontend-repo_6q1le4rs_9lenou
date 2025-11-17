export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-emerald-900 font-semibold text-lg">Join our ritual</h3>
          <p className="text-emerald-800/80 mt-2 max-w-md">Get slow-living tips, recipes, and special offers. No spam — just good vibes.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
          <input type="email" placeholder="Your email" className="flex-1 rounded-full border border-emerald-200 bg-white px-4 py-3 text-emerald-900 placeholder-emerald-800/50 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          <button className="rounded-full bg-emerald-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-emerald-700 transition-colors">Subscribe</button>
        </form>
      </div>
      <div className="py-6 text-center text-sm text-emerald-800/70">© {new Date().getFullYear()} Leaf & Glow. All rights reserved.</div>
    </footer>
  )
}
