import {
  MessageCircle,
  Palette,
  PencilRuler,
  PackageCheck,
} from "lucide-react";

export default function CustomOrderProcess() {
  const steps = [
    {
      number: "01",
      label: "Share",
      title: "Tell us your idea",
      description:
        "Send a photo, sketch, colour preference, or simply describe the piece you have in mind.",
      icon: Palette,
    },
    {
      number: "02",
      label: "Discuss",
      title: "Shape the details",
      description:
        "We’ll discuss the design, materials, size, price, and expected timeline before anything begins.",
      icon: MessageCircle,
    },
    {
      number: "03",
      label: "Create",
      title: "Made with care",
      description:
        "Your piece is handcrafted with attention to the small details that make it feel personal.",
      icon: PencilRuler,
    },
    {
      number: "04",
      label: "Receive",
      title: "Ready for you",
      description:
        "Once complete, we’ll confirm the final details for collection or delivery of your order.",
      icon: PackageCheck,
    },
  ];

  const handleCustomOrder = () => {
    const message =
      "Hi! I would like to enquire about placing a custom order.";

    window.open(
      `https://wa.me/919840918392?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="custom-orders"
      className="overflow-hidden bg-[#F7F3EE] px-6 py-20 sm:py-24 md:px-12 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-6 border-b border-[#D8D0C8] pb-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9A5B45]">
              Custom creations
            </p>

            <h2 className="font-serif text-5xl font-medium leading-[1] tracking-[-0.05em] text-[#292522] sm:text-6xl md:text-7xl">
              From idea to
              <br />
              handmade.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#625C56] sm:text-lg">
            Have something special in mind? Share your vision with us and we’ll
            work through every detail together—thoughtfully, clearly, and at
            your pace.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          <div className="absolute left-[37px] top-0 h-[calc(100%-74px)] border-l border-dashed border-[#C7A994] md:left-[12.5%] md:right-[12.5%] md:top-[37px] md:h-0 md:border-l-0 md:border-t" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative grid grid-cols-[74px_1fr] gap-x-5 md:block"
              >
                <div className="grid h-[74px] w-[74px] place-items-center rounded-full border border-[#B9866D] bg-[#F7F3EE] text-[#9A5B45] md:mb-6">
                  <Icon size={27} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9A5B45]">
                    {step.number} — {step.label}
                  </p>

                  <h3 className="font-serif text-2xl font-medium leading-tight tracking-[-0.04em] text-[#292522]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#665F59]">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-y border-[#D8D0C8] py-7 sm:flex-row sm:items-center sm:gap-10">
          <div>
            <h3 className="font-serif text-3xl font-medium tracking-[-0.04em] text-[#292522] sm:text-4xl">
              Have a design in mind?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#625C56]">
              Send us a reference image or tell us the occasion. We’ll help you
              explore what’s possible.
            </p>
          </div>

          <button
            onClick={handleCustomOrder}
            className="inline-flex shrink-0 items-center gap-2 bg-[#9A5B45] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#814937]"
          >
            <MessageCircle size={18} />
            Start a custom order
          </button>
        </div>
      </div>
    </section>
  );
}