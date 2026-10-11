import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const whatsappMessage =
    "Hi! I would like to know more about Renu Thread & Brush Arts.";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919840918392?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="bg-[#F3EDE5] px-6 py-24 sm:py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-7xl">
          {/* Small Label */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#9A5B45]">
            Let's create together
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-[#292522] sm:text-6xl md:text-7xl lg:text-8xl">
            Start Your
            <br />
            Creative Journey With Us
            <br />
            Today
          </h2>

          {/* Supporting Text */}
          <p className="mt-8 max-w-md text-lg leading-8 text-[#625C56]">
            Learn something new. Create something beautiful.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9A5B45] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#814937] hover:shadow-md"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </button>

            <a
              href="#courses"
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#292522]"
            >
              Explore Classes
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Helpful Information */}
          <div className="mt-12 border-t border-[#D5CCC3] pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A5B45]">
              Ask us about
            </p>

            <p className="mt-3 text-sm leading-6 text-[#6B645D]">
              Upcoming classes
              <span className="mx-2 text-[#B5AAA0]">·</span>
              Fees
              <span className="mx-2 text-[#B5AAA0]">·</span>
              Class timings
              <span className="mx-2 text-[#B5AAA0]">·</span>
              Custom orders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function ContactSection() {
//   const handleContactClick = () => {
//     const isMobile =
//       /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
//       window.matchMedia("(max-width: 768px)").matches;

//     if (isMobile) {
//       window.open(
//         "https://wa.me/919840918392?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20courses.",
//         "_blank"
//       );
//     } else {
//       window.location.href = "mailto:hari20030314@gmail.com";
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 sm:py-28 px-6 text-center bg-[#fffef9]"
//     >
//       <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">
//         Get in <span className="text-pink-600">Touch</span>
//       </h3>

//       <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10 font-serif">
//         Have questions? We’d love to help you choose the right course!
//       </p>

//       <button
//         onClick={handleContactClick}
//         className="px-10 py-3.5 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
//       >
//         Contact Us
//       </button>
//     </section>
//   );
// }
