import { Users, BookOpen, Clock, Layers } from "lucide-react";
import bgvideo1 from "../../assets/videos/bgvideo1.mp4";

export default function FeaturesSection() {
  const features = [
    { 
      icon: <Users className="w-9 h-9 sm:w-10 sm:h-10 text-pink-600" />, 
      title: "Expert Instructor", 
      desc: "Learn directly with practical, real-world projects." 
    },

    { 
      icon: <Clock className="w-9 h-9 sm:w-10 sm:h-10 text-pink-600" />, 
      title: "Flexible Learning", 
      desc: "Access lessons anytime, anywhere — at your own pace." 
    },

    // 🔄 Replaced Certification
    { 
      icon: <BookOpen className="w-9 h-9 sm:w-10 sm:h-10 text-pink-600" />, 
      title: "Tamil Classes", 
      desc: "All lessons are taught in simple Tamil for easy understanding." 
    },

    // 🔄 Replaced Community Support → Personal Guidance (you can choose another option)
    { 
      icon: <Layers className="w-9 h-9 sm:w-10 sm:h-10 text-pink-600" />, 
      title: "Personal Guidance", 
      desc: "Get one-on-one support and feedback directly from the instructor." 
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src={bgvideo1} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10">
        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 sm:mb-16">
          What Makes Us <span className="text-pink-600">Different</span>
        </h3>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white/70 rounded-2xl shadow hover:shadow-xl transition text-center backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
