import { siteContent } from '../content/site-content';

export function AboutSectionMinimal() {
  const { about } = siteContent;
  
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl mb-8">{about.title}</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-4">{about.capabilities.title}</h3>
              <ul className="space-y-3 text-muted-foreground">
                {about.capabilities.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-6 text-sm">
                {about.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-medium mb-1">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}