export default function ContactSection() {
  const handleContactClick = () => {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia("(max-width: 768px)").matches;

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
    <section
      id="contact"
      className="py-20 sm:py-28 px-6 text-center bg-white"
    >
      <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">
        Get in <span className="text-pink-600">Touch</span>
      </h3>

      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
        Have questions? We’d love to help you choose the right course!
      </p>

      <button
        onClick={handleContactClick}
        className="px-10 py-3.5 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
      >
        Contact Us
      </button>
    </section>
  );
}
