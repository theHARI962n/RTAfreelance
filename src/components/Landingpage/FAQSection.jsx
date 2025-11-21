import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What courses do you offer?",
      a: "We offer Fashion Designing, Mural Painting, Tanjore Painting, and Aari Embroidery."
    },
    {
      q: "Do I get a certificate after completion?",
      a: "Yes! Each course comes with a verified digital certificate to boost your portfolio."
    },
    {
      q: "Are the classes flexible?",
      a: "Absolutely. You can learn at your own pace with our online and offline options."
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">
        Frequently Asked <span className="text-pink-600">Questions</span>
      </h3>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 hover:bg-pink-50 rounded-2xl transition"
              >
                {faq.q}

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-pink-600" size={24} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 px-6 pb-5 text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
