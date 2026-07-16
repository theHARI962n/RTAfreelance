// src/components/Landingpage/AnnouncementStrip.jsx

export default function AnnouncementStrip() {
  const whatsappLink =
    "https://wa.me/919840918392?text=Hi%20I%20am%20interested%20in%20the%2010%20Types%20of%20Pants%20Workshop.";

  return (
    <section className="border-y border-[#e8e2d8] bg-[#faf8f3] overflow-hidden">
      <div className="relative flex items-center justify-between gap-6 py-3 px-6">
        {/* Moving Text */}
        <div className="overflow-hidden flex-1">
          <div className="whitespace-nowrap animate-marquee text-sm tracking-[0.12em] text-[#6b5d4f] uppercase">
             Pant MasterClass Workshop • Starts August 16 • Live Online Classes •
            Limited Seats • Beginner Friendly • Tamil Language • 10 Types of
            Pants Workshop • Starts July 1 • Live Online Classes • Limited
            Seats • Beginner Friendly • Tamil Language •
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-[#e8e2d8] bg-[#fffef9] px-5 py-2 text-sm text-[#2c2218] hover:bg-[#f5f1ea] transition"
        >
          Inquire on WhatsApp
        </a>
      </div>
    </section>
  );
}