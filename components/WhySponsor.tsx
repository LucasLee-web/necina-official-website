
import React from 'react';
import { SPONSOR_WHY_BULLETS } from '../constants';

const WhySponsor: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="why-sponsor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-brand-light text-primary-dark text-xs font-black uppercase tracking-widest mb-6">
              The Value of Partnership
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Why Sponsor <span className="text-primary">NECINA?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              NECINA is more than an organization; it's a bridge between innovation hubs, seasoned industry leaders, and emerging talent.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {SPONSOR_WHY_BULLETS.map((bullet, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{bullet.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{bullet.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary-dark rounded-[3rem] p-12 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6">Inquire Directly</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-primary outline-none" />
                  <input type="email" placeholder="Company Email" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-primary outline-none" />
                  <select className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:ring-2 focus:ring-primary outline-none">
                    <option className="text-slate-900">Interested Tier...</option>
                    <option className="text-slate-900">Title / Diamond</option>
                    <option className="text-slate-900">Gold</option>
                    <option className="text-slate-900">Silver</option>
                    <option className="text-slate-900">Bronze</option>
                  </select>
                  <textarea placeholder="How can we help?" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-primary outline-none h-24 resize-none"></textarea>
                  <button className="w-full py-5 bg-white text-primary-dark rounded-xl font-black text-lg hover:bg-brand-light transition-all shadow-xl">
                    Request Info
                  </button>
                </form>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10 rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySponsor;
