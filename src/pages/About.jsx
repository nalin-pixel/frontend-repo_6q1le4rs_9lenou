import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">Our mission</h1>
            <p className="mt-4 text-lg text-emerald-800/90 max-w-3xl">We craft matcha that supports calm focus and everyday well-being. From shade-grown leaves to gentle stone grinding, every step honors tradition while embracing modern life.</p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden border border-emerald-100">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdXN0YWluYWJpbGl0eXxlbnwwfDB8fHwxNzYzNDAyMTQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Sustainability" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-emerald-900">Sustainability</h2>
              <p className="mt-3 text-emerald-800/80">We partner with small farms, support regenerative practices, and prioritize recyclable packaging. Better for you, better for the planet.</p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emerald-900">Our founder</h2>
              <p className="mt-3 text-emerald-800/80">Our journey began with a simple ritual: one bowl, one breath. Today, we share matcha that helps people slow down and feel more present in their day.</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-emerald-100">
              <img src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1600&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
