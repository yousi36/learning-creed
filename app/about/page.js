import StatsSection from "@/components/about/StatSection";
import HeroSection from "../../components/about/HeroSection";
import SupportedOrganisations from "../../components/about/SupportOrganisations";
import StatSection from "../../components/about/StatSection";
import LearningJourneySection from "../../components/LearningJourneySection";
import MissionSection from "../../components/about/MissionSection";
import aboutSections  from "../../data/aboutData.js";
export default function AboutPage() {
  return (
    <>
  <HeroSection />
  <SupportedOrganisations></SupportedOrganisations>
  <StatSection></StatSection>
   {aboutSections.map((section, index) => (
        <MissionSection
          key={index}
          image={section.image}
          title={section.title}
          description={section.description}
          cards={section.cards}
          reverse={section.reverse}
        />
      ))}
  <LearningJourneySection imageSrc={"/beginlogoaboutus.svg"} ></LearningJourneySection>
  </>
);

}
