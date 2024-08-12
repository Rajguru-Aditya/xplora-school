import CtaOne from "@/components/CTA/CtaOne";
import CourseDetailOne from "@/components/CourseDetail/CourseDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import HeroOne from "@/components/Hero/HeroTwo";
import BlogOne from "@/components/Blog/BlogTwo";

export default function CourseDetails() {
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        <CourseDetailOne />
        <BlogOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
