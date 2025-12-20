import WImage from "../../assets/image1-nobg.png";

export default function StudentShowcase() {
  return (
    <section id="student-work" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-4xl font-extrabold tracking-tight">
            Wanna see our <span className="text-pink-600">Student's Work?</span>
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed font-serif">
            From fashion sketches to intricate embroidery, our students create
            amazing outputs. Check out their work and get inspired!
          </p>

          <a
            href="https://www.instagram.com/renuthreadarts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow hover:scale-105 transition transform font-serif"
          >
            Visit Instagram →
          </a>
        </div>

        {/* Right Side: Single Image */}
        {/* Right Side: Image */}
<div className="relative flex justify-center md:justify-end">
  <img
    src={WImage}
    alt="Students' Work"
    loading="lazy"
    className="
      w-full 
      max-w-xl 
      md:max-w-2xl 
      lg:max-w-3xl
      object-contain
    "
  />
</div>

      </div>
    </section>
  );
}
