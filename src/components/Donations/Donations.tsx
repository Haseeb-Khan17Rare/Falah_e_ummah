import Causes from '../Causes/Causes';
import Children from './Children.jpg';
import { FaMoneyBillWave, FaHandsHelping, FaHandHoldingHeart } from "react-icons/fa";

const Donations = () => {
  return (
    <section className="w-full bg-[#fafafa] overflow-hidden">
      
      {/* 1. HERO SECTION: THE MISSION CARD */}
      <div className="relative pt-24 pb-20 px-6 flex justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="relative max-w-5xl w-full group">
          {/* Professional Offset Shadow */}
          <div className="absolute inset-0 bg-red-600 rounded-[3rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-700 ease-out" />
          
          {/* Main Card with Glassmorphism Border */}
          <div className="relative bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-red-600 bg-red-50 rounded-full uppercase">
              Our Vision
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Make a <span className="text-red-600">Skillful</span> Nation, <br className="hidden md:block" />
              <span className="text-slate-400">Not a Nation of Beggars</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              Your support helps us provide <span className="font-semibold text-slate-800">food, shelter, and education</span> to children in need. We believe in building futures, not just providing temporary relief.
            </p>
            
            <div className="mt-12 flex justify-center gap-2">
                <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-slate-200 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ACTION SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* LEFT: REFINED LIST */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">How Can You Help</h2>
              <p className="text-slate-500 text-lg">Choose a way to make a lasting impact today.</p>
            </div>

            <div className="grid gap-8">
              {[
                { icon: FaMoneyBillWave, title: "Donate Money", desc: "Direct financial support for infrastructure." },
                { icon: FaHandsHelping, title: "Become Volunteer", desc: "Share your professional skills with us." },
                { icon: FaHandHoldingHeart, title: "Sponsorship", desc: "Long-term partnership for a specific child." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 group">
                  <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-red-600 transition-colors">
                    <item.icon className="text-red-600 group-hover:text-white text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PREMIUM CAUSE CARD */}
          <div className="relative">
            {/* Decorative background blur */}
            <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-full" />
            
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="relative overflow-hidden rounded-[2rem] group">
                <img src={Children} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Cause" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-red-600 uppercase tracking-widest">
                  Featured Cause
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-black text-2xl text-slate-900 uppercase tracking-tight mb-4">Money Raised For Eid Project</h3>
                
                <div className="flex justify-between items-end mb-6">
                  <div className="space-y-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Progress</p>
                    <p className="text-4xl font-black text-slate-900 leading-none">$5,047 <span className="text-lg text-slate-300 font-medium">/ $80k</span></p>
                  </div>
                </div>

                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-8">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full transition-all duration-1000" style={{ width: "35%" }}></div>
                </div>

                <button className="w-full bg-slate-900 hover:bg-red-600 text-white py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl active:scale-[0.98]">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Causes />
      </div>
    </section>
  );
};

export default Donations;