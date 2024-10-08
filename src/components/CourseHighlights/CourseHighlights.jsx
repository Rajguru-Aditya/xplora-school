import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Typography } from "@mui/material";
import {
  courseHighlightsAnalytics,
  courseHighlightsMarketing,
  courseHighlightsUI,
} from "../../data/course";
import { useEffect, useState } from "react";
import coverbg from "../../assets/imgs/gallery/coverbg.png";

const CourseHighlights = ({ currentCourse }) => {
  const [expanded, setExpanded] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? false : index);
  };

  useEffect(() => {
    if (currentCourse === "uidesign") {
      setAccordionData(courseHighlightsUI.accordion);
    } else if (currentCourse === "marketing") {
      setAccordionData(courseHighlightsMarketing.accordion);
    } else if (currentCourse === "analytics") {
      setAccordionData(courseHighlightsAnalytics.accordion);
    } else {
      setAccordionData(courseHighlightsUI.accordion);
    }
  }, [currentCourse]);
  return (
    <div className="course-highlights">
      {/* <img
        src={coverbg}
        alt="cover image"
        className="course-highlights__bg-img"
      /> */}
      <p className="course-highlights__title">Course Highlights</p>
      <Grid
        // container
        spacing={2}
        xs={12}
        sx={{
          marginBottom: "2rem",
          padding: "1rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <Grid
          container
          spacing={2}
          className="course-highlight__accordion-grid"
        >*/}
        <Grid
          item
          xs={12}
          sx={{
            marginTop: {
              sm: 2,
              xs: 0,
              lg: 2,
            },
          }}
          className="course-highlight__accordion-inner-grid"
        >
          {accordionData?.length > 0 &&
            accordionData?.map((highlight, index) => (
              <Accordion
                className={`course-highlights__accordion ${highlight.animation.name}`}
                key={index}
                disableGutters={true}
                elevation={0}
                sx={{
                  "&:before": {
                    display: "none",
                  },
                }}
                expanded={expanded === index}
                onChange={() => toggleAccordion(index)}
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
                    fontWeight={700}
                    textAlign={"left"}
                    fontSize={screenSize > 700 ? "1.3rem" : "1rem"}
                  >
                    {highlight.title?.length > 45 && expanded !== index
                      ? highlight.title?.substring(
                          0,
                          screenSize > 700 ? 45 : 25
                        ) + "..."
                      : highlight.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    className="course-highlights__accordion-content"
                    textAlign={"left"}
                    fontWeight={400}
                  >
                    <ul
                      style={{
                        listStyleType: "disc",
                        padding: 0,
                        lineHeight: "3rem",
                      }}
                    >
                      {highlight.content.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </Typography>
                  {currentCourse === "marketing" && (
                    <div className="course-highlights__accordion-btn">
                      <p>Project:</p>
                      <br />
                      {highlight.project}
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
        </Grid>
        {/* <Grid
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
            {courseHighlightsUI.accordion.slice(3).map((highlight, index) => (
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
                    <ul
                      style={{
                        listStyleType: "disc",
                        padding: 0,
                        lineHeight: "3rem",
                      }}
                    >
                      {highlight.content.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </Typography>
                  <button className="course-highlights__accordion-btn">
                    {highlight.button}
                  </button> 
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid> */}
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default CourseHighlights;
