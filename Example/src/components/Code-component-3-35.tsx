export function AboutSectionMinimal() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl mb-8">What we're building</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nexus develops autonomous AI systems that integrate quantum-resistant 
                cryptography with real-time battlefield intelligence. Our technology 
                operates independently in GPS-denied and communications-disrupted environments.
              </p>
              <p>
                Founded by former DARPA researchers and Silicon Valley veterans, we're 
                backed by Andreessen Horowitz and strategic defense investors with 
                $45M in Series A funding.
              </p>
              <p>
                Currently in stealth development with active contracts across SOCOM, 
                Space Force, and classified programs.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-4">Core capabilities</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Autonomous AI for threat assessment and response coordination
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Post-quantum encryption built into custom silicon
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Space-hardened computing for orbital platforms
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Multi-spectral sensor fusion with AI targeting
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-2xl font-medium mb-1">$45M</div>
                  <div className="text-muted-foreground">Series A funding</div>
                </div>
                <div>
                  <div className="text-2xl font-medium mb-1">TS/SCI</div>
                  <div className="text-muted-foreground">Security clearance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}