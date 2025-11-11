export default function ContactSection() {
    const handleContactClick = () => {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.open("https://wa.me/919840918392?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20courses.", "_blank");
      } else {
        window.location.href = "mailto:hari20030314@gmail.com";
      }
    };
  
    return (
      <section id="contact" className="py-28 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-8">
          Have questions? We’d love to hear from you.
        </p>
        <button onClick={handleContactClick} className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
          Contact Us
        </button>
      </section>
    );
  }
  