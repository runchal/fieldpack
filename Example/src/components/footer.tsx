export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl text-white mb-4">NEXUS SYSTEMS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Autonomous defense systems for contested environments. 
              ITAR controlled technology.
            </p>
            <div className="text-xs text-gray-500">
              <p>CAGE Code: 9A248</p>
              <p>DUNS: 123456789</p>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers (Cleared)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Autonomous AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quantum Crypto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Space Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Compliance</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">ITAR/EAR Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Procedures</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Export Controls</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FSO Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Nexus Systems Inc. All rights reserved. | Technology subject to U.S. export controls.
            </p>
            <div className="flex space-x-4 text-xs text-gray-500">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>CMMC Level 3</span>
              <span>•</span>
              <span>FedRAMP Authorized</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}