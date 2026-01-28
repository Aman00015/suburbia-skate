"use client";

import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { Heading } from "./Heading";

const faqData = [
  {
    question: "What makes our skateboards different?",
    answer:
      "Every deck is crafted using premium Canadian maple with reinforced layers for durability, flexibility, and control. We design boards that ride smooth, pop harder, and last longer — built by riders, for riders.",
  },
  {
    question: "Do you offer custom designs or limited editions?",
    answer:
      "Yes! We regularly drop exclusive limited-edition decks and allow you to submit your own artwork for custom prints. Keep an eye on our 'Custom Ride' section for the latest drops.",
  },
  {
    question: "Are your skateboards beginner-friendly?",
    answer:
      "Absolutely. Whether you're learning your first ollie or grinding rails daily, our decks come in balanced setups perfect for all skill levels — stable, responsive, and street-tested.",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "Orders are processed within 24 hours. Standard delivery takes 3–5 business days within India, and 7–10 for international orders. We also offer express delivery at checkout.",
  },
  {
    question: "What if my board gets damaged during shipping?",
    answer:
      "No worries — we’ve got your back. If your skateboard arrives damaged, reach out within 48 hours with a photo. We'll replace it for free or offer a full refund.",
  },
];

export default function RiderQueries() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="rider-queries" className="bg-zinc-900 text-white py-12">
      <div className="px-6 lg:px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-8">
            <Heading as="h2" size="lg" className="mb-3">
              Rider Queries
            </Heading>
            <p className="text-zinc-400">Everything you need to know before you roll out.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-zinc-700 bg-zinc-800/60 backdrop-blur-sm rounded-xl overflow-hidden hover:border-brand-purple/60 transition-all"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                    aria-expanded={openIndex === index}
                    aria-controls={`rq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <span className="ml-4 w-6 h-6 flex items-center justify-center text-brand-purple">
                      <FaRegCommentDots />
                    </span>
                  </button>
                  <div
                    id={`rq-answer-${index}`}
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-zinc-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full shadow-lg">
                <FaRegCommentDots className="h-16 w-16 text-brand-purple mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Still got questions?</h3>
                <p className="text-zinc-400 mb-8 max-w-xs">Drop us a line — our team of riders is always ready to help you find your perfect setup.</p>
                <a
                  href="mailto:mansuriaman934@gmail.com"
                  className="w-full bg-brand-purple text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-purple"
                >
                  Shoot us an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
