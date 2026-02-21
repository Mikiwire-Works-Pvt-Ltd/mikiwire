import React from 'react';
import { ArrowUpRight, Globe2, ShieldCheck, Factory, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ff4500] selection:text-white">
      
      {/* 1. HERO SECTION (Cinematic & Stark) */}
      <section className="relative h-screen flex flex-col justify-center px-6 lg:px-24 kyndryl-grid">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="relative z-20 max-w-6xl mt-20">
          <p className="text-[#ff4500] font-mono tracking-widest mb-6 text-sm uppercase">Miki Wire Works Pvt Ltd • Est. 1987</p>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8">
            POWERING <br />
            <span className="text-gray-500">INFRASTRUCTURE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light mb-16 leading-relaxed">
            Architecting the backbone of modern railways, bridges, and global heavy industry with uncompromising precision.
          </p>
        </div>

        {/* High-Impact Data HUD */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl border-t border-gray-800 pt-10">
          <div>
            <h3 className="text-5xl font-light mb-2">₹242<span className="text-[#ff4500]">Cr+</span></h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Annual Revenue</p>
          </div>
          <div>
            <h3 className="text-5xl font-light mb-2">100<span className="text-[#ff4500]">k</span></h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">MT Yearly Capacity</p>
          </div>
          <div>
            <h3 className="text-5xl font-light mb-2">~20<span className="text-[#ff4500]">%</span></h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Railway Sleeper Share</p>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & VISION (Asymmetrical Corporate Layout) */}
      <section className="py-32 px-6 lg:px-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] relative overflow-hidden bg-black border border-gray-800">
              <img src="/image_069e64.jpg" alt="Mahesh Poddar" className="object-cover w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Decades of Visionary Engineering.</h2>
            <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
              From our roots in the late 1970s to our incorporation in 1987, the Miki Group has evolved from a single facility in Ranchi into a multi-hub manufacturing powerhouse driving a self-reliant India.
            </p>
            <div className="glass-panel p-8 border-l-4 border-l-[#ff4500]">
              <h4 className="text-3xl font-bold mb-1">Mahesh Poddar</h4>
              <p className="text-sm text-[#ff4500] uppercase tracking-widest mb-6 font-mono">Founder & Director • Former Rajya Sabha MP</p>
              <div className="border-t border-gray-800 pt-6 mt-6">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Executive Board</p>
                <p className="text-gray-300">Nirmala Poddar • Pawan Kumar Pacheriwala (MD) • Mrinmoy Sarkar (CEO)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL EXPERTISE (Grid Layout) */}
      <section className="py-32 px-6 lg:px-24 border-y border-gray-900 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-4">Industrial Standards.</h2>
              <p className="text-xl text-gray-500 font-light">Engineered using imported High Carbon Wire Rods (HC82A, 5.5mm).</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900">
            <div className="bg-[#0a0a0a] p-12 hover:bg-[#141414] transition-colors group">
              <Factory className="text-gray-700 w-10 h-10 mb-8 group-hover:text-[#ff4500] transition-colors" />
              <p className="text-[#ff4500] font-mono text-sm mb-4 tracking-widest">IS: 14268</p>
              <h3 className="text-2xl font-bold mb-4">PC Strands</h3>
              <p className="text-gray-400 font-light leading-relaxed">Low-relaxation strands critical for Metro rail networks, complex flyovers, silos, and structural bridges.</p>
            </div>
            <div className="bg-[#0a0a0a] p-12 hover:bg-[#141414] transition-colors group">
              <ShieldCheck className="text-gray-700 w-10 h-10 mb-8 group-hover:text-[#ff4500] transition-colors" />
              <p className="text-[#ff4500] font-mono text-sm mb-4 tracking-widest">IS: 6003</p>
              <h3 className="text-2xl font-bold mb-4">Pre-Stressed Wire</h3>
              <p className="text-gray-400 font-light leading-relaxed">The trusted wire supplying 20% of Indian Railways' sleeper requirements and essential electric concrete poles.</p>
            </div>
            <div className="bg-[#0a0a0a] p-12 hover:bg-[#141414] transition-colors group">
              <ArrowUpRight className="text-gray-700 w-10 h-10 mb-8 group-hover:text-[#ff4500] transition-colors" />
              <p className="text-[#ff4500] font-mono text-sm mb-4 tracking-widest">IS: 4454</p>
              <h3 className="text-2xl font-bold mb-4">Spring Steel</h3>
              <p className="text-gray-400 font-light leading-relaxed">High-grade precision wire (1.2mm to 11mm) utilized in heavy automotive suspension and premium matrices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTPRINT & GLOBAL REACH */}
      <section className="py-32 px-6 lg:px-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-4xl font-bold mb-12">Strategic Network.</h2>
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-800">
                <p className="text-[#ff4500] text-xs font-mono uppercase tracking-widest mb-1">HQ / North & East Hub</p>
                <h4 className="text-xl font-bold text-white">Miki Wire Works (Ranchi)</h4>
              </div>
              <div className="pb-6 border-b border-gray-800">
                <p className="text-[#ff4500] text-xs font-mono uppercase tracking-widest mb-1">South Hub</p>
                <h4 className="text-xl font-bold text-white">Miki Steel Works (Bangalore)</h4>
              </div>
              <div className="pb-6 border-b border-gray-800">
                <p className="text-[#ff4500] text-xs font-mono uppercase tracking-widest mb-1">Coastal / Export Hub</p>
                <h4 className="text-xl font-bold text-white">Visakha Wire Ropes (Visakhapatnam)</h4>
              </div>
              <div className="pb-6 border-b border-gray-800">
                <p className="text-[#ff4500] text-xs font-mono uppercase tracking-widest mb-1">Central Hub</p>
                <h4 className="text-xl font-bold text-white">Shri Ram Wire Products (Nagpur)</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="glass-panel p-10 mb-8">
               <Leaf className="text-[#ff4500] w-8 h-8 mb-6" />
               <h3 className="text-2xl font-bold mb-4">Zero Liquid Discharge.</h3>
               <p className="text-gray-400 font-light mb-4">Pioneering sustainable heavy manufacturing through:</p>
               <ul className="text-gray-300 space-y-2 font-light">
                 <li>• Mechanical Descaling (No Acid Pickling)</li>
                 <li>• Advanced Induction Heating (Zero Lead/Furnace Oil)</li>
               </ul>
            </div>
            
            <div className="glass-panel p-10">
               <Globe2 className="text-[#ff4500] w-8 h-8 mb-6" />
               <h3 className="text-2xl font-bold mb-4">Global Reach.</h3>
               <div className="flex flex-wrap gap-2">
                 {['South Africa', 'Nepal', 'Philippines', 'Qatar', 'Sri Lanka'].map(nation => (
                   <span key={nation} className="px-4 py-2 border border-gray-700 text-sm font-light">{nation}</span>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 px-6 lg:px-24 bg-black border-t border-gray-900 text-gray-500 text-sm font-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-bold mb-1">Miki Wire Works Pvt Ltd</h4>
            <p>J.S. Lane, Gandhi Chowk, Upper Bazar, Ranchi, Jharkhand – 834001</p>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-xs uppercase tracking-widest mb-1">CIN: U27104JH1987PTC002782</p>
            <p>Auth Capital: ₹2.25 Cr | Paid-up: ₹1.40 Cr</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
