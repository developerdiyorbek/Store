import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

//Images
import SwiperImg from "../images/heroImg.png";

//lazyload
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="container mx-auto sliderBg mt-[110px]">
          <div className="flex items-center justify-center">
            <LazyLoadImage
              className={"max-h-[600px]"}
              src={SwiperImg}
              alt="Img"
              effect="blur"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto sliderBg mt-[110px]">
          <div className="flex items-center justify-center">
            <LazyLoadImage
              className={"max-h-[600px]"}
              src={SwiperImg}
              alt="Img"
              effect="blur"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto sliderBg mt-[110px]">
          <div className="flex items-center justify-center">
            <LazyLoadImage
              className={"max-h-[600px]"}
              src={SwiperImg}
              alt="Img"
              effect="blur"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto sliderBg mt-[110px]">
          <div className="flex items-center justify-center">
            <LazyLoadImage
              className={"max-h-[600px]"}
              src={SwiperImg}
              alt="Img"
              effect="blur"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
