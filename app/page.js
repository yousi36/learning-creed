import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/chooseUs";
import DataManagementSection from "../components/home/DataManagement";
import InfoCardSection from "../components/home/InfoCardSection";
import LearningJourneySection from "../components/LearningJourneySection"
export default function Home() {
    const contentData = [
        {
            id: 1,
            title: "Experience Seamless Integration with Trusted UK Databases",
            description:
                "Our platform synchronises directly with DfE, Ofqual, and national funding registers—ensuring that every qualification, learning aim, and provider record is up-to-date and compliant.",
            image: "/experienceimg1.webp", // Replace with your image path
            imageFirst: true, 
        },
        {
            id: 2,
            title: "Discover a World of Funded Learning Opportunities",
            description:
                "From entry-level training to advanced technical qualifications, explore every learning aim approved for public funding. Compare qualification levels, duration, awarding bodies, and available funding streams in one unified portal.",
            image: "/experienceimg2.webp", // Replace with your image path
            imageFirst:false, // text first
        },
    ];
    return (
        <>
            <HeroSection></HeroSection>
            <WhyChooseUsSection></WhyChooseUsSection>
            <DataManagementSection></DataManagementSection>
            {contentData.map(
                (item)=> {
                return ( <InfoCardSection
                        title={item.title}
                        description={item.description}
                        imageSrc={item.image}
                        imageFirst={item.imageFirst}
                    />);
                }
            )}
             <LearningJourneySection imageSrc={"/homelearnsection.webp"} ></LearningJourneySection>
        </>
    )
}
