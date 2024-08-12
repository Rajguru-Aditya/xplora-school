import CtaOne from "@/components/CTA/CtaOne";
import CourseDetailOne from "@/components/CourseDetail/CourseDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import HeroOne from "@/components/Hero/HeroTwo";

export default function CourseDetails() {
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        <CourseDetailOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
