import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ParallaxCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
    });

    return () => scroll.destroy();
  }, []);

  const cards = [
    {
      title: "AI Design",
      text: "Generate stunning clothing concepts instantly.",
      speed: "1",
    },
    {
      title: "Customization",
      text: "Modify designs to suit preferences.",
      speed: "2",
    },
    {
      title: "3D View",
      text: "Visualize how it fits and flows.",
      speed: "3",
    },
    {
      title: "Order Integration",
      text: "Directly connect to e-commerce platforms.",
      speed: "4",
    },
  ];

  return (
    <div ref={containerRef} data-scroll-container className="bg-gray-50 py-28 px-6">
      <h3 className="text-3xl font-bold text-center mb-20">Our Features</h3>

      <div className="flex flex-col items-center space-y-24">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-96 p-10 bg-white shadow-xl rounded-2xl"
            data-scroll
            data-scroll-speed={card.speed}
          >
            <h4 className="text-2xl font-semibold mb-4">{card.title}</h4>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
