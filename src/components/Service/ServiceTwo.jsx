import { serviceUI, serviceAnalytics, serviceMarketing } from "@/data/service";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function ServiceTwo({ currentCourse }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currentCourse === "uidesign") {
      setData(serviceUI);
    } else if (currentCourse === "marketing") {
      setData(serviceMarketing);
    } else if (currentCourse === "analytics") {
      setData(serviceAnalytics);
    } else {
      setData(serviceUI);
    }
  }, [currentCourse]);

  return (
    <section className="service__area pt-110 pb-110">
      {/* Normal Tools */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service__title-wrap">
              {data?.title && (
                <h2 className="section-title move-line-3d">
                  {data?.title.sliceOne}
                </h2>
              )}
            </div>
          </div>
        </div>
        {data?.services && data?.services.length && (
          <Grid
            className="service__tools-container"
            container
            // spacing={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "2rem",
              width: "100%",
            }}
            xs={12}
            paddingLeft={0}
          >
            {data?.services.map((service, index) => (
              <Grid
                item
                key={index}
                className={`${service.animation.name}`}
                padding={2}
                paddingLeft={0}
              >
                <Grid item className={`service__item ${service.classNames}`}>
                  <div className="service__icon">
                    {service.icon && (
                      <img
                        src={service.icon}
                        alt="Icon"
                        className="service__icon-img"
                      />
                    )}
                  </div>
                  <h3 className="service__title">{service.title}</h3>
                  {service.description && <p>{service.description}</p>}
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </div>

      {/* AI Tools */}
      {currentCourse === "marketing" && (
        <div
          className="container"
          style={{
            marginTop: "5rem",
          }}
        >
          <div className="row">
            <div className="col-xl-12">
              <div className="service__title-wrap">
                {data?.title2 && (
                  <h2 className="section-title move-line-3d">{data?.title2}</h2>
                )}
              </div>
            </div>
          </div>
          {data?.aiServices && data?.aiServices.length && (
            <Grid
              className="service__tools-container"
              container
              // spacing={4}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "2rem",
                width: "100%",
              }}
              xs={12}
              paddingLeft={0}
            >
              {data?.aiServices.map((service, index) => (
                <Grid
                  item
                  key={index}
                  className={`${service.animation.name}`}
                  padding={2}
                  paddingLeft={0}
                >
                  <Grid item className={`service__item ${service.classNames}`}>
                    <div className="service__icon">
                      {service.icon && <img src={service.icon} alt="Icon" />}
                    </div>
                    <h3 className="service__title">{service.title}</h3>
                    {service.description && <p>{service.description}</p>}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      )}
    </section>
  );
}
