import bgvideo2 from "../../assets/videos/bgvideo2.mp4";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h3>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Renu Arts</span>, we blend
            tradition with modern creativity. Our mission is to make professional
            Fashion Designing, Mural, Tanjore Painting, and Aari Embroidery accessible.
          </p>

          <ul className="space-y-3 text-gray-700">
            {[
              "Start from basics — no prior experience needed.",
              "Access all recorded classes anytime for 6 months.",
              "Get personalised guidance and solutions.",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Video */}
        <div className="relative mt-10 md:mt-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
              rounded-2xl shadow-xl 
              w-full 
              h-[260px] sm:h-[320px] md:h-full 
              object-cover
            "
          >
            <source src={bgvideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute -bottom-6 -left-6 w-32 md:w-40 h-32 md:h-40 bg-pink-100 rounded-full blur-3xl opacity-40"></div>
        </div>

      </div>
    </section>
  );
}
