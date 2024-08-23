import HeroOne from "@/components/Hero/HeroOne";
import PartnerOne from "@/components/Partner/PartnerOne";
import CourseOne from "@/components/Course/CourseOne";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import ServiceOne from "@/components/Service/ServiceOne";
import InstructorOne from "@/components/Instructor/InstructorOne";
import CounterOne from "@/components/Counter/CounterOne";
import BlogOne from "@/components/Blog/BlogOne";
import CtaOne from "@/components/CTA/CtaOne";
import AboutOne from "@/components/About/AboutOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import AdmissionProcess from "@/components/AdmissionProcess/AdmissionProccess";

export default function HomePage() {
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        <PartnerOne />
        <InstructorOne />
        <AboutOne />
        <CourseOne />
        <TestimonialOne />
        <ServiceOne />
        {/* <CounterOne /> */}
        {/* <BlogOne /> */}
        <AdmissionProcess />
        <div
          style={{
            marginTop: "100px",
          }}
        ></div>
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
