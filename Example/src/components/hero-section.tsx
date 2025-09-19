import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-950/50 border border-blue-800/30 rounded-full mb-6">
            <span className="text-blue-300 text-sm uppercase tracking-wider">Stealth Mode</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 text-white tracking-tight">
            NEXUS SYSTEMS
          </h1>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-2xl md:text-3xl mb-4 text-blue-300">Our Mission</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Developing autonomous defense systems that integrate quantum-resistant cryptography 
              with real-time battlefield intelligence. We bridge the gap between cutting-edge AI 
              and hardened military-grade hardware.
            </p>
          </div>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Founded by former DARPA researchers and Silicon Valley veterans, we're building 
            the next generation of adaptive defense technologies for contested environments.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Request Information
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8"
            >
              Partnership Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}