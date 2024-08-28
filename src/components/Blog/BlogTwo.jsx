import { blogTwo as data } from "@/data/blog";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
export default function BlogOne() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSection, setSelectedSection] = useState(data.faqs[0].section);
  const [sectionFAQs, setSectionFAQs] = useState(data.faqs[0].items);

  const handleTab = (index) => {
    setActiveTab(index);
  };

  const handleSection = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    const section = data.faqs.find((faq) => faq.section === selectedSection);
    console.log("section", section);
    setSectionFAQs(section.items);
  }, [selectedSection]);

  return (
    <section className="blog__area pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {data.title && (
              <div className="blog__title-wrap text-center move-line-3d">
                <h2 className="section-title">{data.title.sliceOne}</h2>
              </div>
            )}
          </div>
          <div className="blog__faq-tabs-container">
            {
              <div className="blog__faq-tabs">
                {data.faqs.map((tab, index) => (
                  <button
                    key={index}
                    className={`blog__faq-tab ${
                      index === activeTab ? "blog__active-tab" : ""
                    }`}
                    onClick={() => {
                      handleTab(index);
                      handleSection(tab.section);
                    }}
                  >
                    {tab.section}
                  </button>
                ))}
              </div>
            }
          </div>
        </div>
        {data.faqs && data.faqs.length > 0 && (
          <div className="row gy-4">
            {sectionFAQs?.map((faq, index) => (
              <div
                key={index}
                className={` ${faq.animation.name}`}
                data-delay={faq.animation.delay}
              >
                {/* <BlogCardOne blog={blog} /> */}
                <Accordion
                  style={{
                    backgroundColor: "#E2E2E2",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h3 className="blog__title">{faq.question}</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="blog__content">{faq.answer}</p>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
