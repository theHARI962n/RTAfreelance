import bgvideo2 from "../../assets/videos/bgvideo2.mp4";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-extrabold tracking-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Renu Arts</span>,
            we blend tradition with modern creativity. Our mission is to make
            professional Fashion Designing, Mural, Tanjore Painting, and Aari
            Embroidery accessible to everyone.
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Start from basics and advance step-by-step, no prior experience needed.",
              "Access all recorded classes anytime for 6 months, at your own pace.",
              "Get personalized guidance and solutions to your questions.",
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-xl w-full h-full object-cover"
          >
            <source
              src={bgvideo2}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Optional decorative overlay */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
