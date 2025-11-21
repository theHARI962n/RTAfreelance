import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do online classes work?",
      a: "You’ll get access to pre-recorded lessons and worksheets. You can learn at your own pace from anywhere.",
    },
    {
      q: "Can I join from outside India?",
      a: "Absolutely! Anyone from any country can join the online classes and learn with us.",
    },
    {
      q: "What are the fees and payment options?",
      a: "Fees vary based on the course. We accept UPI, Netbanking, GPay, PhonePe, and all major payment methods.",
    },
  ];


  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">
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
                className="w-full flex justify-between items-center px-5 sm:px-6 py-6 text-left font-semibold text-gray-800 hover:bg-pink-50 rounded-2xl transition"
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
                    <div className="mt-2 px-5 sm:px-6 pb-6 text-gray-600">
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
