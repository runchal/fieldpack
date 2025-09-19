import { ImageWithFallback } from './figma/ImageWithFallback';

const missions = [
  {
    title: "Base Security",
    description: "Close base security gaps by unifying fragmented force protection systems into a cohesive network.",
    image: "https://images.unsplash.com/photo-1705104159555-b76ace4b6bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMGVhcnRoJTIwb3JiaXR8ZW58MXx8fHwxNzU3MzkzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Satellite Operations",
    description: "Unify legacy and next-gen satellites with standardized interfaces to enable scalable autonomy and real-time space ops.",
    image: "https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMGVhcnRoJTIwb3JiaXR8ZW58MXx8fHwxNzU3MzkzNjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Naval Defense",
    description: "Unify vendor-specific naval defense assets into a fast, integrated operational picture without falling into stovepiped systems.",
    image: "https://images.unsplash.com/photo-1554155894-7a039eb8f412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZhbCUyMHNoaXBzJTIwZmxlZXQlMjBvY2VhbiUyMGRlZmVuc2V8ZW58MXx8fHwxNzU3MzkzNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function MissionsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl mb-4">Missions we serve</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Nexus delivers proven capabilities across defense, space, and critical infrastructure missions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div key={index} className="group">
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
    </section>
  );
}