import { ImageWithFallback } from './figma/ImageWithFallback';
import { siteContent } from '../content/site-content';

export function MissionsSection() {
  const { missions } = siteContent;
  
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl mb-4">{missions.title}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            {missions.subtitle}
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
            {missions.items.map((mission, index) => (
              <div key={index} className="group flex-shrink-0 w-80">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <ImageWithFallback
                    src={mission.image}
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl mb-3">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}