import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-12 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 mb-8">Contact us</h1>

          <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl border border-emerald-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="First name" />
              <input className="rounded-xl border border-emerald-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Last name" />
            </div>
            <input type="email" className="rounded-xl border border-emerald-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Email" />
            <textarea rows="5" className="rounded-xl border border-emerald-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="How can we help?" />
            <button className="mt-2 rounded-full bg-emerald-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-emerald-700 transition-colors">Send message</button>
          </form>

          <div className="mt-10 rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6">
            <h2 className="text-xl font-semibold text-emerald-900">Store</h2>
            <p className="text-emerald-800/80">123 Greenway Ave, Portland, OR</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
