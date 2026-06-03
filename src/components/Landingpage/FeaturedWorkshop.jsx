// FeaturedWorkshop.jsx

import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const pants = [
  {
    name: "Salwar Pant",
    description: "Traditional comfort-fit pant with gathered styling.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dhoti Pant",
    description: "Learn draped construction and modern dhoti styling.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Patiala Pant",
    description: "Master pleats, volume and traditional drafting.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tulip Pant",
    description: "Create overlapping panel structures and elegant shapes.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Churidar Pant",
    description: "Draft fitted silhouettes with classic gathers.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Straight Pant",
    description: "Essential straight-cut drafting and stitching.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Straight Culotte",
    description: "Modern cropped wide-leg construction techniques.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Circular Culotte",
    description: "Learn circular flare drafting and flow creation.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Wide Leg Pant",
    description: "Pattern making for elegant flowing silhouettes.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Harem Pant",
    description: "Relaxed drape and contemporary fashion styling.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedWorkshop() {
  return (
    <section className="bg-[#fffef9] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Workshop Card */}
        <div className="border border-[#e8e2d8] bg-[#faf8f3] rounded-[32px] p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="space-y-5">
              <p className="text-sm tracking-[0.2em] uppercase text-[#8b7355] font-light">
                Upcomming Online Class
              </p>

              <h2 className="text-4xl md:text-6xl font-light text-[#2c2218] leading-tight">
                10 Types of Pants
              </h2>

              <p className="text-[#6b5d4f] text-lg max-w-xl leading-relaxed font-light">
                Learn modern pant drafting, stitching techniques, and silhouette
                construction through a refined online fashion workshop
                experience.
              </p>
            </div>

            <div className="space-y-6 min-w-[280px]">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-[#8b7355]">
                  Starting Date
                </p>
                <h3 className="text-2xl font-light text-[#2c2218]">
                  July 1, 2026
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-[#8b7355]">
                  Fees
                </p>
                <h3 className="text-2xl font-light text-[#2c2218]">₹14,999</h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-[#8b7355]">
                  Batch Starts In
                </p>

                {/* <div className="flex gap-4">
                  {["12 Days", "08 Hours", "24 Min"].map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#e8e2d8] rounded-2xl px-4 py-3 bg-[#fffef9]"
                    >
                      <p className="text-[#2c2218] font-light text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div> */}
                <CountdownTimer />

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919840918392?text=Hi%20I%20am%20interested%20in%20the%2010%20Types%20of%20Pants%20online%20workshop%20starting%20on%20July%201,%20and%20want%20to%20know%20more%20about%20it.",
                      "_blank",
                    )
                  }
                  className="mt-4 px-8 py-4 rounded-full bg-[#2c2218] text-[#fffef9] text-sm tracking-wide transition-all duration-300 hover:bg-[#5c4a3a]"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Showcase */}
          <div className="relative mt-20">
            {/* Top Fade */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#fffef9] to-transparent z-10" />

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fffef9] to-transparent z-10" />

            <div className="h-[650px] overflow-y-auto scroll-smooth no-scrollbar">
              <div className="space-y-28 py-16">
                {pants.map((pant, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: isEven ? -80 : 80,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className={`grid md:grid-cols-2 gap-12 items-center ${
                        !isEven ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: isEven ? -100 : 100,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-[28px]"
                      >
                        <img
                          src={pant.image}
                          alt={pant.name}
                          className="w-full h-[420px] object-cover"
                        />
                      </motion.div>

                      {/* Text */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.15,
                        }}
                        viewport={{ once: true }}
                        className="space-y-5"
                      >
                        <p className="text-sm tracking-[0.2em] uppercase text-[#8b7355]">
                          Pant Style
                        </p>

                        <h3 className="text-4xl md:text-5xl font-light text-[#2c2218] leading-tight">
                          {pant.name}
                        </h3>

                        <p className="text-[#6b5d4f] text-lg leading-relaxed font-light max-w-md">
                          {pant.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}