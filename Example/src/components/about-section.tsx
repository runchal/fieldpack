export function AboutSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-8 text-white">Leadership Team</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in 2024 by former DARPA program managers and ex-Palantir engineers, 
                Nexus Systems emerged from stealth with $45M in Series A funding from 
                Andreessen Horowitz and Founders Fund.
              </p>
              <p>
                Our founding team previously led the Pentagon's Project Maven AI initiative 
                and developed the classified "Mosaic Warfare" framework for distributed 
                autonomous operations across multiple domains.
              </p>
              <p>
                We maintain active contracts with SOCOM, Space Force, and undisclosed 
                three-letter agencies. Our Palo Alto facility holds a Level 3 security 
                clearance for handling TS/SCI materials.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
                <div className="text-2xl text-blue-400 mb-1">$45M</div>
                <div className="text-sm text-gray-400">Series A Funding</div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
                <div className="text-2xl text-blue-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Ex-DARPA Engineers</div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
                <div className="text-2xl text-blue-400 mb-1">TS/SCI</div>
                <div className="text-sm text-gray-400">Security Clearance</div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded border border-slate-700">
                <div className="text-2xl text-blue-400 mb-1">2024</div>
                <div className="text-sm text-gray-400">Founded</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xl text-white mb-6">Key Investors & Advisors</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-300">Andreessen Horowitz</span>
                  <span className="text-blue-400">Lead Investor</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-300">Founders Fund</span>
                  <span className="text-blue-400">Co-Lead</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-300">Admiral Mike Rogers</span>
                  <span className="text-blue-400">Strategic Advisor</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span className="text-gray-300">Eric Schmidt</span>
                  <span className="text-blue-400">Board Observer</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-300">In-Q-Tel</span>
                  <span className="text-blue-400">Strategic Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}