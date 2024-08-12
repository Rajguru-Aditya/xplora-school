import CtaOne from "@/components/CTA/CtaOne";
import CourseDetailOne from "@/components/CourseDetail/CourseDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import HeroTwo from "@/components/Hero/HeroTwo";
import BlogTwo from "@/components/Blog/BlogTwo";
import ServiceTwo from "@/components/Service/ServiceTwo";
import PartnerTwo from "@/components/Partner/PartnerTwo";

export default function CourseDetails() {
  return (
    <LayoutOne>
      <main>
        <HeroTwo />
        <ServiceTwo />
        <CourseDetailOne />
        <PartnerTwo />
        <BlogTwo />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
