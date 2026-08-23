import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Are the classes suitable for beginners? Do I need prior experience?",
    answer:
      "Yes. Our classes are designed to guide beginners step by step. You can join even if you are completely new to the subject.",
  },
  {
    question: "What language are the classes taught in?",
    answer:
      "Classes are primarily taught in Tamil, making the lessons easy to understand and follow.",
  },
  // {
  //   question: "How are the online classes conducted?",
  //   answer:
  //     "Classes are conducted online through [your platform]. You will receive the class details and instructions after enrolment.",
  // },
  {
    question: "Can I join if I am a working woman, homemaker or student?",
    answer:
      "Absolutely. Our classes are designed for women at different stages of life who want to learn a creative skill, whether as a hobby, for personal growth, or to develop a skill they can use professionally.",
  },
  // {
  //   question: "Will I get personal guidance if I have doubts?",
  //   answer:
  //     "Yes. Students can ask questions and receive guidance from the instructor throughout the learning process. [Edit this according to your actual support system.]",
  // },
  {
    question: "What materials or tools do I need?",
    answer:
      "The materials required depend on the class. Once you enrol, you will receive a list of the required materials and tools so you can prepare before starting.",
  },
  // {
  //   question: "Can I learn at my own pace?",
  //   answer:
  //     "Yes. [Explain whether your classes are live, recorded, or a combination of both, and mention the duration of access.]",
  // },
  {
    question: "How much time should I spend learning each week?",
    answer:
      "This depends on the class and your learning pace. We recommend setting aside regular practice time so that you can follow the lessons and improve through hands-on practice.",
  },
  {
    question: "When does the next batch start?",
    answer:
      "New batch dates are announced regularly. You can contact us on WhatsApp to know about the upcoming batch and available seats.",
  },
  {
    question: "What are the fees and payment options?",
    answer:
      "Course fees vary depending on the class. We accept [add your actual payment methods here]. Contact us on WhatsApp for the current fees and payment details.",
  },
  {
    question: "How do I enroll in a class?",
    answer:
      "Simply contact us on WhatsApp with the name of the class you are interested in. We will share the batch details, fees and enrolment process with you.",
  },
  {
    question: "Can I join from outside India?",
    answer:
      "Yes. Our online classes can be joined from anywhere, provided you are comfortable following the class schedule and have access to the required online platform.",
  },
  {
    question: "Do you accept custom artwork orders?",
    answer:
      "Yes. We accept selected custom orders for artwork and handcrafted pieces. Send us your requirements on WhatsApp and we will discuss the possibilities, pricing and timeline.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#F7F3EE] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9A5B45]">
            FAQ - Frequently Asked Questions
          </p>

          <h2 className="font-serif text-4xl font-medium leading-tight text-[#292522] sm:text-5xl">
            Everything you need to know
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#625C56]">
            Have a question before joining a class or placing an order?
            We've answered some of the things our students ask most often.
          </p>
        </div>

        {/* FAQ List */}
        <div className="border-t border-[#D8D0C8]">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#D8D0C8]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold leading-7 text-[#292522] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#9A5B45] bg-[#9A5B45] text-white"
                        : "border-[#CFC6BE] text-[#5F5953]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-3xl pb-7 pr-12 text-base leading-7 text-[#6B645D]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       q: "How do online classes work?",
//       a: "You’ll get access to pre-recorded lessons and worksheets. You can learn at your own pace from anywhere.",
//     },
//     {
//       q: "Can I join from outside India?",
//       a: "Absolutely! Anyone from any country can join the online classes and learn with us.",
//     },
//     {
//       q: "What are the fees and payment options?",
//       a: "Fees vary based on the course. We accept UPI, Netbanking, GPay, PhonePe, and all major payment methods.",
//     },
//   ];


//   return (
//     <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#faf8f3]">
//       <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//         Frequently Asked <span className="text-pink-600">Questions</span>
//       </h3>

//       <div className="max-w-3xl mx-auto space-y-6">
//         {faqs.map((faq, i) => {
//           const isOpen = openIndex === i;

//           return (
//             <div
//               key={i}
//               className="border border-gray-200 rounded-2xl bg-white shadow-sm"
//             >
//               <button
//                 onClick={() => setOpenIndex(isOpen ? null : i)}
//                 className="w-full flex justify-between items-center px-5 sm:px-6 py-6 text-left font-semibold text-gray-800 hover:bg-pink-50 rounded-2xl transition font-serif"
//               >
//                 {faq.q}

//                 <motion.div
//                   animate={{ rotate: isOpen ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <ChevronDown className="text-pink-600" size={24} />
//                 </motion.div>
//               </button>

//               <AnimatePresence initial={false}>
//                 {isOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="mt-2 px-5 sm:px-6 pb-6 text-gray-600 font-serif">
//                       {faq.a}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
