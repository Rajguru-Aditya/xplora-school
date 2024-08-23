import AboutFour from "@/components/About/AboutFour";
import CtaOne from "@/components/CTA/CtaOne";
import CounterTwo from "@/components/Counter/CounterTwo";
import HeroFour from "@/components/Hero/HeroFour";
// import  InstructorOne as WhyJoin from "@/components/Instructor/InstructorOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import ServiceThree from "@/components/Service/ServiceThree";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import InstructorOne from "@/components/Instructor/InstructorOne";

export default function AboutPage() {
  return (
    <LayoutOne>
      <main>
        <HeroFour />
        {/* <ServiceThree /> */}
        <div
          style={{
            marginTop: "100px",
          }}
        ></div>
        {/* <InstructorOne /> */}
        {/* <CounterTwo /> */}
        {/* <AboutFour /> */}
        <TestimonialOne />
        <InstructorOne type="2" spacingclassName="pt-120 pb-130" />
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
