import { Card, CardContent } from './ui/card';
import { Brain, Lock, Satellite, Target } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: "Autonomous AI Systems",
    description: "Neural networks trained on classified datasets for real-time threat assessment and response coordination in denied environments."
  },
  {
    icon: Lock,
    title: "Quantum Cryptography",
    description: "Post-quantum encryption modules built into custom silicon, ensuring secure communications against future computing threats."
  },
  {
    icon: Satellite,
    title: "Space-Hardened Computing",
    description: "Radiation-resistant processing units designed for satellite constellations and orbital defense platforms."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Multi-spectral sensor arrays with AI-driven target identification for kinetic and non-kinetic engagement systems."
  }
];

export function CapabilitiesSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-white">Technical Capabilities</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Our R&D focuses on breakthrough technologies for asymmetric warfare, 
            space domain awareness, and counter-adversarial AI in contested environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-950/50 border border-blue-800/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-3 text-white">{capability.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}