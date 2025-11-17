import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500" />
            <span className="text-xl font-semibold tracking-tight text-emerald-900">Leaf & Glow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-emerald-900' : 'text-emerald-700 hover:text-emerald-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-emerald-700 transition-colors">
              <ShoppingBag className="h-4 w-4" />
              Cart
            </button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-emerald-100 bg-white p-2 shadow-sm">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-emerald-800 hover:bg-emerald-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
