import { Users, Award, Clock, Layers } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    { icon: <Users className="w-10 h-10 text-pink-600" />, title: "Expert Instructor", desc: "Learn directly with practical, real-world projects." },
    { icon: <Clock className="w-10 h-10 text-pink-600" />, title: "Flexible Learning", desc: "Access lessons anytime, anywhere — at your own pace." },
    { icon: <Award className="w-10 h-10 text-pink-600" />, title: "Certification", desc: "Get digital certificates to boost your portfolio." },
    { icon: <Layers className="w-10 h-10 text-pink-600" />, title: "Community Support", desc: "Join a network of like-minded creative learners." },
  ];

  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
        <source src="./src/assets/videos/bgvideo1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10">
        <h3 className="text-4xl font-extrabold text-center mb-16">
          What Makes Us <span className="text-pink-600">Different</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div key={idx} className="p-8 bg-white/70 rounded-2xl shadow hover:shadow-xl transition text-center backdrop-blur-sm">
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
