import { serviceTwo as data } from "@/data/service";
import { Grid } from "@mui/material";

export default function ServiceTwo() {
  return (
    <section className="service__area pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service__title-wrap">
              {data.title && (
                <h2 className="section-title move-line-3d">
                  {data.title.sliceOne}
                </h2>
              )}
            </div>
          </div>
        </div>
        {data.services && data.services.length && (
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
            {data.services.map((service, index) => (
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
    </section>
  );
}
