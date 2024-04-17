import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ApiServices from ".././services/Apiservices";

export default function HomeCarousel() {
  const [data, setData] = useState();
  async function getData() {
    try {
      const res = await ApiServices.getLstCarousel();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data &&
          data?.map((item, index) => (
            <SwiperSlide className="md:h-[650px]" key={index}>
              <img src={item.imageUrl} className="w-full h-full object-fill" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
