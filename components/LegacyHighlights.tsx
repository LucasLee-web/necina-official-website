
import React from 'react';

const LegacyHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="legacy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">30 Years of <span className="text-primary">Impact.</span></h2>
            <div className="space-y-12">
              <div className="flex space-x-6">
                <div className="text-5xl font-black text-brand-light-2">2016</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">20th Anniversary Gala</h4>
                  <p className="text-slate-500 leading-relaxed">
                    A historic gathering at the Harvard Club of Boston, celebrating two decades of fostering high-tech growth and mentorship for 500+ professionals.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="text-5xl font-black text-brand-light-2">2021</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">25th Anniversary Hybrid Event</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Navigating a new era of innovation through a hybrid celebration, focusing on digital transformation and resilience in the tech community.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-3 overflow-hidden">
                {[1,2,3,4].map(i => (
                  <img key={i} className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={`https://picsum.photos/seed/legacy${i}/100/100`} alt="" />
                ))}
              </div>
              <p className="text-slate-500 font-medium">Join 5,000+ alumni who have been part of our journey.</p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/hist1/600/800" className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform" alt="Historical Event 1" />
              <img src="https://picsum.photos/seed/hist2/600/800" className="rounded-3xl shadow-2xl mt-12 transform hover:scale-105 transition-transform" alt="Historical Event 2" />
            </div>
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-brand-light rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyHighlights;
