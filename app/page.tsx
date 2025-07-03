import HeroSection from '@/components/landing/HeroSection';
import FeatureStrip from '@/components/landing/FeatureStrip';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import SocialProofSection from '@/components/landing/SocialProofSection';
import WhyLoveUsSection from '@/components/landing/WhyLoveUsSection';
import ServicesSection from '@/components/landing/ServicesSection';
import MeetTeamSection from '@/components/landing/MeetTeamSection';
import WhyFamiliesLoveSection from '@/components/landing/WhyFamiliesLoveSection';
import SearchByCategorySection from '@/components/landing/SearchByCategorySection';
import SpecificProviderSection from '@/components/landing/SpecificProviderSection';
import HelpingHandSection from '@/components/landing/HelpingHandSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <SocialProofSection />
      <HowItWorksSection />
      <WhyLoveUsSection />
      <ServicesSection />
      <MeetTeamSection />
      <WhyFamiliesLoveSection />
      <SearchByCategorySection />
      <SpecificProviderSection />
      <HelpingHandSection />
      {/* Other landing page sections will be added here in subsequent tasks */}
    </>
  );
}
