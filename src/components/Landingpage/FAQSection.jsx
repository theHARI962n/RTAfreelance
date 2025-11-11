import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "What courses do you offer?", a: "We offer Fashion Designing, Mural Painting, Tanjore Painting, and Aari Embroidery." },
    { q: "Do I get a certificate after completion?", a: "Yes! Each course comes with a verified digital certificate to boost your portfolio." },
    { q: "Are the classes flexible?", a: "Absolutely. You can learn at your own pace with our online and offline options." },
  ];

  return (
    <section id="faq" className="py-28 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-pink-50 transition"
            >
              {faq.q}
              <span className="ml-4 text-pink-600 text-2xl">{openIndex === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
