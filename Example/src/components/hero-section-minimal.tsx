import { Button } from './ui/button';
import { siteContent } from '../content/site-content';

export function HeroSectionMinimal() {
  const { hero } = siteContent;
  
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl tracking-tight mb-8">
          {hero.headline}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8">
            {hero.primaryButton}
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            {hero.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  );
}