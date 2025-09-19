import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl tracking-tight mb-8">
            About Nexus Systems
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            We're building the future of autonomous defense systems, combining cutting-edge AI 
            with quantum-resistant security for the most demanding operational environments.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-6">Our story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2023 by former DARPA researchers and Silicon Valley veterans, 
                  Nexus Systems emerged from a critical observation: traditional defense 
                  systems fail when communications are disrupted or GPS is denied.
                </p>
                <p>
                  Our founding team spent over a decade developing AI systems for contested 
                  environments at organizations like DARPA's Strategic Technology Office, 
                  Palantir, and Anduril Industries.
                </p>
                <p>
                  Today, we're backed by $45M in Series A funding from Andreessen Horowitz 
                  and strategic defense investors, with active contracts across SOCOM, 
                  Space Force, and classified programs.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc1NzM5MzYwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern tech office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mb-16 text-center">Leadership team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'CEO & Co-Founder',
                background: 'Former DARPA STO Program Manager',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTczOTM2MDN8MA&ixlib=rb-4.1.0&q=80&w=400'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO & Co-Founder',
                background: 'Former Palantir Principal Engineer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzU3MzkzNjAzfDA&ixlib=rb-4.1.0&q=80&w=400'
              },
              {
                name: 'Admiral James Mitchell',
                role: 'VP of Government Relations',
                background: 'Former U.S. Navy Fleet Commander',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1NzM5MzYwM3ww&ixlib=rb-4.1.0&q=80&w=400'
              }
            ].map((person, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-6 max-w-48 mx-auto">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl mb-2">{person.name}</h3>
                <p className="text-muted-foreground mb-1">{person.role}</p>
                <p className="text-sm text-muted-foreground">{person.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Deep Dive */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl mb-12">Technical capabilities</h2>
          <div className="space-y-12">
            {[
              {
                title: 'Autonomous AI Systems',
                description: 'Our AI operates independently without human oversight, making split-second decisions in GPS-denied and communications-disrupted environments. Built on proprietary neural architectures optimized for edge computing.',
                features: ['Real-time threat assessment', 'Predictive mission planning', 'Adaptive response coordination', 'Multi-domain fusion']
              },
              {
                title: 'Quantum-Resistant Security',
                description: 'Next-generation cryptography built into custom silicon, designed to withstand attacks from quantum computers and nation-state adversaries.',
                features: ['Post-quantum encryption algorithms', 'Hardware security modules', 'Zero-trust architecture', 'Secure multi-party computation']
              },
              {
                title: 'Space-Hardened Computing',
                description: 'Radiation-resistant hardware and software designed for orbital platforms, deep space missions, and high-altitude operations.',
                features: ['Radiation-tolerant processors', 'Fault-tolerant software', 'Autonomous system recovery', 'Space-qualified components']
              }
            ].map((capability, index) => (
              <div key={index} className="border border-border rounded-lg p-8">
                <h3 className="text-xl mb-4">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6">Ready to discuss your mission requirements?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Connect with our team to explore how Nexus Systems can enhance your operational capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule consultation
            </a>
            <a 
              href="mailto:partnerships@nexus-systems.com" 
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Email our team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}