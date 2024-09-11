
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


function HomePage() {
  return (
    <Layout>
      {/* <AccreditationSection /> */}
      <HeroSection/>
      <AboutSection />
      <AwardsSection />
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
