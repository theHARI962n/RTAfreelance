export default function TestimonialsSection() {
    const testimonials = [
      { name: "Ananya", feedback: "The Fashion Designing course transformed my career. The mentors were supportive and inspiring!" },
      { name: "Karthik", feedback: "Tanjore painting lessons were beautifully structured. I can now create professional artwork confidently." },
      { name: "Meera", feedback: "Aari embroidery was a dream skill for me. Renu Arts made it simple and enjoyable." },
    ];
  
    return (
      <section id="testimonials" className="py-28 px-6 bg-white mt-20 md:mt-0">
        <h3 className="text-4xl font-extrabold text-center mb-16">
          What Our <span className="text-pink-600">Students Say</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 shadow p-6 rounded-xl text-center hover:shadow-lg transition">
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h5 className="font-semibold text-gray-900">— {t.name}</h5>
            </div>
          ))}
        </div>
      </section>
    );
  }
  