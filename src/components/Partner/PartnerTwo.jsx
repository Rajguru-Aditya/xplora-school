import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partnerOne as partner } from "@/data/partner";

export default function PartnerTwo() {
  const swiperOptions = {
    slidesPerView: 6,
    spaceBetween: 100,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 100,
      },
    },
  };
  return (
    <section className="client__area">
      <div className="container-lg">
        <div className="client__wrapper">
          {partner.items && partner.items.length > 0 && (
            <h1 className="client__title fade-slide bottom">
              {partner.title.sliceOne} <span>{partner.title.sliceTwo}</span>{" "}
            </h1>
          )}
          {/* <!-- client slider--> */}
          {partner.items && partner.items.length > 0 && (
            <div className="client__inner">
              <Swiper
                {...swiperOptions}
                className="swiper client-slider client__img-container"
              >
                {partner.items.map((partner, index) => (
                  <SwiperSlide
                    key={index}
                    className="swiper-slide client__slide"
                  >
                    <img src={partner} alt="Logo" className="client__logo" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
