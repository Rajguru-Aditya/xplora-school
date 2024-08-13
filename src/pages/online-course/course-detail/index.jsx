import CtaOne from "@/components/CTA/CtaOne";
import CourseDetailOne from "@/components/CourseDetail/CourseDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import HeroTwo from "@/components/Hero/HeroTwo";
import BlogTwo from "@/components/Blog/BlogTwo";
import ServiceTwo from "@/components/Service/ServiceTwo";
import PartnerTwo from "@/components/Partner/PartnerTwo";
import CourseTwo from "@/components/Course/CourseTwo";
import CourseFeeOne from "@/components/CourseFee/CourseFeeOne";
import CourseHighlights from "@/components/CourseHighlights/CourseHighlights";
import PlacementGuarantee from "@/components/PlacementGuarantee/PlacementGuarantee";
import Certificates from "@/components/Certificates/Certificates";

export default function CourseDetails() {
  return (
    <LayoutOne>
      <main>
        <HeroTwo />
        <ServiceTwo />
        <CourseTwo />
        <CourseHighlights />
        {/* <CourseDetailOne /> */}
        <PartnerTwo />
        <CourseFeeOne />
        <PlacementGuarantee />
        <Certificates />
        <BlogTwo />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
