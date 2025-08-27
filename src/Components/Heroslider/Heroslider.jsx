import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import cardImg from '../../Assets/practo1.png';
import cardImg2 from '../../Assets/practo2.png';
import 'swiper/css';
import 'swiper/css/pagination';


const Section = () => {

  const bannerImages = [
    { src: cardImg,alt: 'Promo banner 1' },
    { src: cardImg2, alt: 'Promo banner 2' },
    { src: cardImg, alt: 'Promo banner 3' },
     { src: cardImg2, alt: 'Promo banner 2' },
  ];

  return (
    <>
    <style>
        {`
.section-container {
  padding: 20px;
}

.bannerSwiper {
  width: 100%;
  height: auto;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Prevents the image from being cropped or distorted */
  display: block;
}

/* Style the pagination dots to match your design */
.swiper-pagination-bullet {
  background-color: #ccc;
  width: 10px;
  height: 10px;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #007bff; /* A blue that might match your design */
`}
</style>

    <div className="section-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="bannerSwiper"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Section;