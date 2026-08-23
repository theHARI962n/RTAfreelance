import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#292522] text-[#D8D0C8]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="font-serif text-3xl text-[#F7F3EE]">
              Renu Thread & Brush Arts
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#AFA69D]">
              Learn creative skills through practical, step-by-step
              classes in Tamil — from Fashion Designing and Aari
              Embroidery to Tanjore Painting and Mural Art.
            </p>

            {/* Trust */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-[#8F867D]">
              <span>10+ Years Experience</span>
              <span>200+ Students</span>
              <span>18K+ Community</span>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9A5B45] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#814937]"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </button>

          </div>

          {/* Explore */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              <a
                href="#about"
                className="text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                About
              </a>

              <a
                href="#courses"
                className="text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                Classes
              </a>

              <a
                href="#gallery"
                className="text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                Gallery
              </a>

              <a
                href="#custom-orders"
                className="text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                Custom Orders
              </a>

              <a
                href="#faq"
                className="text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                FAQ
              </a>

            </nav>

          </div>

          {/* Connect */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F7F3EE]">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="https://www.instagram.com/renuthreadarts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                <FaInstagram size={19} />
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@RenuThreadArts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                <FaYoutube size={19} />
                YouTube
              </a>

              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-left text-sm text-[#AFA69D] transition hover:text-[#F7F3EE]"
              >
                <FaWhatsapp size={19} />
                WhatsApp
              </button>

            </div>

            <p className="mt-7 max-w-xs text-xs leading-6 text-[#817870]">
              Follow our work, student creations and upcoming classes on
              Instagram.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#403B37]">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-[#817870] sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-16">

          <p>
            © {currentYear} Renu Thread & Brush Arts. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#faq"
              className="transition hover:text-[#D8D0C8]"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#D8D0C8]"
            >
              Contact
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

// import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="py-10 text-center bg-gray-900 text-gray-400">
//       <div className="flex justify-center gap-6 mb-6">
//         <a href="https://www.instagram.com/renuthreadarts/" target="_blank" rel="noopener noreferrer"
//            className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition">
//           <FaInstagram size={22} className="text-white" />
//         </a>
//         <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition">
//           <FaFacebook size={22} className="text-white" />
//         </a>
//         <a href="https://www.youtube.com/@RenuThreadArts" target="_blank" rel="noopener noreferrer"
//            className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition">
//           <FaYoutube size={22} className="text-white" />
//         </a>
//         <a href="#" className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition">
//           <FaPinterest size={22} className="text-white" />
//         </a>
//       </div>
//       <p>© {new Date().getFullYear()} Renu Thread & Brush Arts. All rights reserved.</p>
//     </footer>
//   );
// }
