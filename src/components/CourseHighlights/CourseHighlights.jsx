import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Grid, Typography } from "@mui/material";
import { courseHighlights } from "../../data/course";

const CourseHighlights = () => {
  return (
    <div className="course-highlights">
      <p className="course-highlights__title">Course Highlights</p>
      <Grid
        container
        spacing={2}
        sx={{
          marginBottom: "2rem",
          padding: "1rem",
        }}
      >
        <Grid
          container
          spacing={2}
          className="course-highlight__accordion-grid"
        >
          <Grid
            item
            // xs={6}
            sx={{
              marginTop: {
                sm: 2,
                xs: 0,
                lg: 2,
              },
            }}
            className="course-highlight__accordion-inner-grid"
          >
            {courseHighlights.accordion.slice(0, 3).map((highlight, index) => (
              <Accordion className="course-highlights__accordion" key={index}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color: "white",
                      }}
                    />
                  }
                >
                  <Typography
                    variant="h6"
                    className="course-highlights__accordion-title"
                    fontWeight={700}
                  >
                    {highlight.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="course-highlights__accordion-content"
                    textAlign={"left"}
                    fontWeight={400}
                  >
                    {highlight.content}
                  </Typography>
                  <button className="course-highlights__accordion-btn">
                    {highlight.button}
                  </button>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid
            item
            // xs={6}
            sx={{
              marginTop: {
                sm: 0,
                xs: 0,
                lg: 2,
              },
            }}
            className="course-highlight__accordion-inner-grid"
          >
            {courseHighlights.accordion.slice(3).map((highlight, index) => (
              <Accordion
                className={`course-highlights__accordion ${highlight.animation.name}`}
                key={index}
                data-delay={highlight.animation.delay}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color: "white",
                      }}
                    />
                  }
                >
                  <Typography
                    variant="h6"
                    className="course-highlights__accordion-title"
                  >
                    {highlight.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="course-highlights__accordion-content"
                    textAlign={"left"}
                    fontWeight={400}
                  >
                    {highlight.content}
                  </Typography>
                  <button className="course-highlights__accordion-btn">
                    {highlight.button}
                  </button>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseHighlights;
