import { HeroSectionMinimal } from '../components/hero-section-minimal';
import { MissionsSection } from '../components/missions-section';
import { AboutSectionMinimal } from '../components/about-section-minimal';
import { ContactSectionMinimal } from '../components/contact-section-minimal';

export function HomePage() {
  return (
    <>
      <HeroSectionMinimal />
      <MissionsSection />
      <AboutSectionMinimal />
      <ContactSectionMinimal />
    </>
  );
}