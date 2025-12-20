import logo from "../../assets/logo.png";

export default function HeroSection() {
  const handleContact = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(
        "https://wa.me/919840918392?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20courses.",
        "_blank"
      );
    } else {
      window.location.href = "mailto:hari20030314@gmail.com";
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 bg-gradient-to-r from-pink-50 via-white to-pink-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Left Side — Logo */}
      <div className="relative z-10 md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0 ml-10 mt-28 md:mt-0">
        <img src={logo} alt="Brand Logo" loading="lazy" className="w-[480px]" />
      </div>

      {/* Right Side — Text */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
          Where Creativity <br /> Meets{" "}
          <span className="text-pink-600">Fashion & Art</span>
        </h2>

        <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-serif">
          Learn Fashion Designing, Tanjore Painting, Mural Art & Aari Embroidery
          — anytime, anywhere with expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105">
            Explore Courses
          </button>
          <button
            onClick={handleContact}
            className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
