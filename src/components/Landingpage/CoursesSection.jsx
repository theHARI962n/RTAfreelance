import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import fash from "../../assets/carousel/fash.jpg";
import mural from "../../assets/carousel/mural.jpg";
import aari from "../../assets/carousel/aari.jpg";
import tanj from "../../assets/carousel/tanj.png";

export default function CoursesSection() {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  const courses = [
    {
      title: "Fashion Designing",
      desc: "Master modern and traditional techniques in fashion.",
      img: fash,
    },
    {
      title: "Mural Painting",
      desc: "Create breathtaking wall art with expert guidance.",
      img: mural,
    },
    {
      title: "Tanjore Painting",
      desc: "Learn this timeless classical South Indian art form.",
      img: tanj,
    },
    {
      title: "Aari Embroidery",
      desc: "Discover the elegance of intricate hand embroidery.",
      img: aari,
    },
  ];

  return (
    <section
      id="courses"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50"
    >
      <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 sm:mb-12">
        Our <span className="text-pink-600">Courses</span>
      </h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".course-next",
          prevEl: ".course-prev",
        }}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2.5 },
        }}
        className="max-w-6xl mx-auto"
      >
        {/* Navigation arrows */}
        <div className="flex justify-center gap-5 mt-4 mb-8 sm:mb-10">
          <button className="course-prev w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-600 font-bold hover:scale-110 transition">
            ‹
          </button>

          <button className="course-next w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-600 font-bold hover:scale-110 transition">
            ›
          </button>
        </div>

        {/* Course Slides */}
        {courses.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/70 via-purple-500/50 to-transparent flex flex-col justify-end p-5 sm:p-6">
                <h4 className="text-white font-bold text-xl sm:text-2xl mb-1">
                  {c.title}
                </h4>
                <p className="text-white/90 text-sm sm:text-base mb-3">
                  {c.desc}
                </p>

                <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                  Learn More →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
