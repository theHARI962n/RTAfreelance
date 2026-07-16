import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import fash from "../../assets/carousel/fash.webp";
import mural from "../../assets/carousel/mural.webp";
import aari from "../../assets/carousel/aari.webp";
import tanj from "../../assets/carousel/tanj.webp";

export default function CoursesSection() {
  const courses = [
    {
      title: "Fashion Designing",
      desc: "Master modern and traditional techniques in fashion.",
      img: fash,
      link: "/courses/fashion-designing",
    },
    {
      title: "Mural Painting",
      desc: "Create breathtaking wall art with expert guidance.",
      img: mural,
      link: "/courses/mural-painting",
    },
    {
      title: "Tanjore Painting",
      desc: "Learn this timeless classical South Indian art form.",
      img: tanj,
      link: "/courses/tanjore-painting",
    },
    {
      title: "Aari Embroidery",
      desc: "Discover the elegance of intricate hand embroidery.",
      img: aari,
      link: "/courses/aari-embroidery",
    },
  ];

  return (
    <section
      id="courses"
      className="py-24 px-4 bg-[#faf8f3]"
    >
      <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-14">
         <span className="text-[#2c2218] font-light tracking-tight">Courses</span>
      </h3>

      {/* Arrows OUTSIDE swiper */}
      <div className="relative max-w-6xl mx-auto">
        <button className="course-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md hover:bg-pink-50 transition">
          ‹
        </button>

        <button className="course-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md hover:bg-pink-50 transition">
          ›
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".mobile-pagination" }}
          navigation={{
            nextEl: ".course-next",
            prevEl: ".course-prev",
          }}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          className="rounded-3xl"
        >
          {courses.map((c, i) => (
            <SwiperSlide key={i}>
              {/* CARD */}
              <div className="group relative h-80 lg:h-[420px] rounded-3xl overflow-hidden bg-black shadow-md">
                {/* Image (only image zooms) */}
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">
                    {c.title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/85 mb-4 max-w-xs">
                    {c.desc}
                  </p>

                  {/* Button (slide-in, not scale) */}
                  <Link
                    to={c.link}
                    className="
                       inline-flex items-center gap-2
                       px-5 py-2 rounded-full
                     bg-white text-gray-900 font-medium
                       opacity-0 translate-y-3
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300
                      " >
                    {/* Learn More */}
                    Learn More →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
