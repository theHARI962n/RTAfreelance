// CoursesSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react"
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
      className="py-28 px-6 bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50"
    >
      <h3 className="text-4xl font-extrabold text-center mb-12">
        Our <span className="text-pink-600">Courses</span>
      </h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1} // default to 1 slide visible
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 }, // small screens
          768: { slidesPerView: 1.5 }, // show 1.5 slides for hint of next
          1024: { slidesPerView: 2 }, // 2 slides visible on large screens
          1280: { slidesPerView: 2.5 }, // 2.5 slides for carousel effect
        }}
        className="max-w-6xl mx-auto overflow-visible"
        onInit={() => {
          setTimeout(() => window.dispatchEvent(new Event("resize")), 500);
        }}
      >
        <div className="flex justify-center gap-4 mt-8">
          <button className="custom-prev  shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-2xl transition">
            
          </button>

          <button className="custom-next  shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-2xl transition">
            
          </button>
        </div>

        {courses.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 via-purple-500/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-2xl mb-2">
                  {c.title}
                </h4>
                <p className="text-white/90 mb-4">{c.desc}</p>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300">
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
