import { useEffect, useState } from "react";
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
import InstructorOne from "@/components/Instructor/InstructorOne";
import ContactUsBanner from "@/components/ContactUsBanner/ContactUsBanner";

export default function CourseDetails() {
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    // Fetch the course name from params

    let params = window.location.pathname?.split("/").pop();

    console.log(params);

    setCurrentCourse(params);
  }, []);

  return (
    <LayoutOne>
      <main>
        <HeroTwo currentCourse={currentCourse} />
        <PartnerTwo currentCourse={currentCourse} />
        <div
          style={{
            marginTop: "100px",
          }}
        ></div>
        <InstructorOne currentCourse={currentCourse} />
        <ContactUsBanner />
        <CourseHighlights currentCourse={currentCourse} />
        <ServiceTwo currentCourse={currentCourse} />
        <PlacementGuarantee currentCourse={currentCourse} />
        <PartnerTwo currentCourse={currentCourse} />
        <Certificates currentCourse={currentCourse} />
        <CourseTwo currentCourse={currentCourse} />
        {/* <CourseDetailOne currentCourse={currentCourse}/> */}
        <CourseFeeOne currentCourse={currentCourse} />
        <BlogTwo currentCourse={currentCourse} />
        <CtaOne currentCourse={currentCourse} />
      </main>
    </LayoutOne>
  );
}
