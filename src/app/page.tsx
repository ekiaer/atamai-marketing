import Image from 'next/image'
import { FileText, Clock, Shield, Upload, CheckCircle, TrendingUp } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/nz-farm-hero.jpg"
            alt="New Zealand farmland"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-atamai-darker" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Drowning in
            <span className="text-green-400"> Compliance Paperwork</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Atamai automates farm certification for New Zealand farmers. 
            Upload your FEP, we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#waitlist" className="btn-primary text-lg px-10">
              Get Early Access
            </a>
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
              See how it works →
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              NZFAP & NZFAP+ Ready
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Your Data, Your Control
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Built for NZ Farmers
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-atamai-darker">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Shouldn't Take 80+ Hours
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              You already have the data. It's in your FEP, your records, your head. 
              But getting it into the right format for auditors? That's the problem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Time Drain</h3>
              <p className="text-white/60">
                Farmers spend days filling out forms that ask for information they've already documented elsewhere.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scattered Data</h3>
              <p className="text-white/60">
                Your FEP says one thing, your records say another, and the auditor wants it in a third format.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audit Anxiety</h3>
              <p className="text-white/60">
                The stress of not knowing if you're actually compliant until someone shows up to check.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-atamai-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Atamai Works
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Three steps to compliance confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-green-400 font-semibold text-sm mb-2">Step 1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Upload Your FEP</h3>
              <p className="text-white/60">
                Drop in your Farm Environment Plan. Our AI reads and extracts the data automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-green-400 font-semibold text-sm mb-2">Step 2</div>
              <h3 className="text-xl font-semibold text-white mb-3">See Your Gaps</h3>
              <p className="text-white/60">
                Instantly see what requirements you meet and exactly what's missing for certification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-green-400 font-semibold text-sm mb-2">Step 3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Get Certified</h3>
              <p className="text-white/60">
                Fill gaps with guided tasks. Generate audit-ready reports. Pass with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-atamai-darker">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Data Works <span className="text-green-400">For You</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">80+ hours → Under 30 minutes</h3>
                    <p className="text-white/60">Upload once, populate everywhere. No more re-entering the same data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Multi-framework compliance</h3>
                    <p className="text-white/60">Local, regional, national, and international requirements — check against them all at once.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">You own your data</h3>
                    <p className="text-white/60">We're stewards, not owners. Your farm data belongs to you — always.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Premium market access</h3>
                    <p className="text-white/60">Prove your story to processors and consumers with verified data.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-2">71%</div>
                <p className="text-white/60 mb-6">Average compliance on first FEP upload</p>
                <div className="h-px bg-white/10 my-6" />
                <div className="text-4xl font-bold text-white mb-2">3 min</div>
                <p className="text-white/60">To see your full compliance status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-atamai-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Latest Updates
              </h2>
              <p className="text-white/60">
                News and progress from the Atamai team
              </p>
            </div>
            <a 
              href="/updates" 
              className="text-green-400 hover:text-green-300 transition-colors font-medium hidden sm:block"
            >
              View all updates →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/updates/welcome-to-atamai"
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="text-white/40 text-sm mb-3">December 16, 2024</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Welcome to Atamai
              </h3>
              <p className="text-white/60">
                We're building something new for New Zealand farmers - a smarter way to handle compliance.
              </p>
            </a>

            <a
              href="/updates/farmers-own-their-data"
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="text-white/40 text-sm mb-3">December 10, 2024</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Why Farmers Should Own Their Data
              </h3>
              <p className="text-white/60">
                Your farm data is valuable. Here's why you should control who accesses it.
              </p>
            </a>
          </div>

          <div className="mt-6 text-center sm:hidden">
            <a 
              href="/updates" 
              className="text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              View all updates →
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-atamai-darker">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Waitlist
            </h2>
            <p className="text-xl text-white/60">
              Be among the first NZ farmers to try Atamai. 
              Early access members help shape the platform.
            </p>
          </div>

          {/* Netlify Form */}
          <form 
            name="waitlist" 
            method="POST" 
            data-netlify="true"
            action="/thank-you"
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-field"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="john@farmname.co.nz"
                />
              </div>

              <div>
                <label htmlFor="region" className="block text-white/80 text-sm font-medium mb-2">
                  Farm Region
                </label>
                <select
                  id="region"
                  name="region"
                  required
                  className="select-field"
                >
                  <option value="">Select your region</option>
                  <option value="Northland">Northland</option>
                  <option value="Auckland">Auckland</option>
                  <option value="Waikato">Waikato</option>
                  <option value="Bay of Plenty">Bay of Plenty</option>
                  <option value="Gisborne">Gisborne</option>
                  <option value="Hawke's Bay">Hawke's Bay</option>
                  <option value="Taranaki">Taranaki</option>
                  <option value="Manawatū-Whanganui">Manawatū-Whanganui</option>
                  <option value="Wellington">Wellington</option>
                  <option value="Tasman">Tasman</option>
                  <option value="Nelson">Nelson</option>
                  <option value="Marlborough">Marlborough</option>
                  <option value="West Coast">West Coast</option>
                  <option value="Canterbury">Canterbury</option>
                  <option value="Otago">Otago</option>
                  <option value="Southland">Southland</option>
                  <option value="Outside NZ">Outside New Zealand</option>
                </select>
              </div>

              <div>
                <label htmlFor="farm_type" className="block text-white/80 text-sm font-medium mb-2">
                  Farm Type
                </label>
                <select
                  id="farm_type"
                  name="farm_type"
                  required
                  className="select-field"
                >
                  <option value="">Select farm type</option>
                  <option value="Sheep & Beef - Breeding">Sheep & Beef - Breeding</option>
                  <option value="Sheep & Beef - Finishing">Sheep & Beef - Finishing</option>
                  <option value="Sheep & Beef - Mixed">Sheep & Beef - Mixed</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Dairy Support">Dairy Support</option>
                  <option value="Deer">Deer</option>
                  <option value="Arable">Arable</option>
                  <option value="Mixed/Other">Mixed/Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-white/80 text-sm font-medium mb-2">
                  Biggest Compliance Challenge (Optional)
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={3}
                  className="input-field resize-none"
                  placeholder="What frustrates you most about compliance paperwork?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Join the Waitlist
              </button>

              <p className="text-white/40 text-sm text-center">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-atamai-darker border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/atamai-light.png" 
                alt="Atamai" 
                width={100} 
                height={32}
                className="h-8 w-auto opacity-60"
              />
              <span className="text-white/40 text-sm">
                Farm compliance, simplified.
              </span>
            </div>
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} Atamai. Built for New Zealand farmers.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
