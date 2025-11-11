import WImage from "../../assets/image1-nobg.png"; // adjust path

export default function StudentShowcase() {
  return (
    <section id="student-work" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text */}
        <div className="space-y-6">
          <h3 className="text-4xl font-extrabold tracking-tight">
            Wanna see our <span className="text-pink-600">Students' Work?</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            From fashion sketches to intricate embroidery, our students create amazing outputs. 
            Check out their work and get inspired!
          </p>
          <a
            href="https://www.instagram.com/renuthreadarts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow hover:scale-105 transition transform"
          >
            Visit Instagram →
          </a>
        </div>

        {/* Right Side: Single Image */}
        <div className="flex justify-center">
          <img
            src={WImage}
            alt="Students' Work"
            className="w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
