import { blogTwo as data } from "@/data/blog";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function BlogOne() {
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
        </div>
        {data.blogs && data.blogs.length > 0 && (
          <div className="row gy-4">
            {data.blogs.map((blog, index) => (
              <div
                key={index}
                className={` ${blog.animation.name}`}
                data-delay={blog.animation.delay}
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
                    <h3 className="blog__title">{blog.title}</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="blog__content">{blog.description}</p>
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
