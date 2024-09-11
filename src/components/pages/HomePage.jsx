import Layout from "../Layout";
import AccreditationSection from "../AccreditationSection";
import AboutSection from "../AboutSection";
import AwardsSection from "../AwardsSection";
import OfferingsSection from "../OfferingsSection";
import CoursesSection from "../CoursesSection";
import LearnPracticeEarnSection from "../LearnPracticeEarnSection";
import ZenClassSection from "../ZenClassSection";
import LearnersWorkSection from "../LearnersWorkSection";
import CorporateSolutionsSection from "../CorporateSolutionsSection";
import AchievementsSection from "../AchievementsSection";
import TestimonialsSection from "../TestimonialsSection";
import NewsletterSection from "../NewsletterSection";
import HeroSection from "../HeroSection";
import { LampDemo } from "../ui/lamp";
import { LampContainer } from "../ui/lamp";
import ImageSlider from "../ui/ImageSlider";
import data from "../../assets/data.jpg";
import laptop from "../../assets/laptop.jpg";
import js from "../../assets/js.jpg";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const imageUrls = [data, laptop, js];

function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <div className="flex-grow">
          <ImageSlider images={imageUrls} />
        </div>
        <div className="flex-grow">
          <TextGenerateEffect
            words={
              "Sharpen Your skills with tokaz"
            }
          />
        </div>
      </div>
      <HeroSection />
      {/* <AccreditationSection /> */}
      <AboutSection />
      {/* <AwardsSection /> */}
      <OfferingsSection />
      <CoursesSection />
      {/* <LearnPracticeEarnSection /> */}
      <ZenClassSection />
      {/* <LearnersWorkSection /> */}
      {/* <CorporateSolutionsSection /> */}
      <AchievementsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
}

export default HomePage;
