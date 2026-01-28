"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Bounded } from "./Bounded";

const testimonials = [
  {
    id: 1,
    name: "Max Patrick",
    role: "Skateboard enthusiast",
    image:
      "https://i.pinimg.com/736x/09/a7/88/09a7881646017065009091bbd8b55b35.jpg",
    type: "client",
    testimonial:
      "These boards are insanely smooth! Perfect for cruising and tricks — I love the balance and build quality.",
  },
  {
    id: 2,
    name: "Jobs Gadhzi",
    role: "Student",
    image:
      "https://i.pinimg.com/1200x/6a/1a/67/6a1a67a1b550349af12bc4d998710f3d.jpg",
    type: "client",
    testimonial:
      "Riding has never felt this effortless! The deck feels strong yet flexible. Totally worth it.",
  },
  {
    id: 3,
    name: "Thomas Gala",
    role: "Fun Guy",
    rating: 4.5,
    testimonial:
      "In a world that moves fast, you need gear that keeps up. These boards don’t just perform — they inspire. The precision, style, and flow are unmatched. Every ride pushes creativity further and reminds me why I love the grind.",
    avatar:
      "https://i.pinimg.com/1200x/63/f3/a0/63f3a0fe0c318b623d9a431e2817b515.jpg",
    type: "testimonial",
  },
  {
    id: 4,
    name: "Cassandra Mo",
    role: "Chill guy",
    image:
      "https://i.pinimg.com/736x/05/e4/5f/05e45ff5a79627593870ae0a2acf38f9.jpg",
    type: "client",
    testimonial:
      "Absolutely love the design and stability. Makes daily commutes super fun and stylish!",
  },
  {
    id: 5,
    name: "Riley Park",
    role: "Pro Rider",
    image:
      "https://i.pinimg.com/736x/86/0e/4c/860e4c86ae76cd1e21cc168f31b60a07.jpg",
    type: "client",
    testimonial:
      "The grip and flow are unmatched — feels like the board becomes part of you. Highly recommend!",
  },
  {
    id: 6,
    name: "Jordan Lee",
    role: "Shop Owner",
    image:
      "https://i.pinimg.com/1200x/62/08/53/6208533d5e28e105b5808a1993c86ead.jpg",
    type: "client",
    testimonial:
      "We stock these at my shop, and customers can’t get enough. Premium quality and killer aesthetics!",
  },
];

export default function RiderStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(4);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCurrentIndex((ci) =>
      Math.min(ci, Math.max(0, testimonials.length - itemsPerView))
    );
  }, [itemsPerView]);

  const next = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, testimonials.length - itemsPerView)
    );
  };
  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const transformValue = (index: number) => (index * 100) / itemsPerView;

  return (
    <section id="rider-stories" className="bg-zinc-900 text-white py-12">
      <Bounded>
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-zinc-400 mb-2">
            Rider Stories
          </p>
          <div className="w-full h-px bg-zinc-800 mb-4" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
            — What riders say
          </h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{
                transform: `translateX(-${transformValue(currentIndex)}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
                >
                  {item.type === "client" ? (
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <div className="aspect-[3/4]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/90 via-brand-purple/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex items-end p-4">
                          <p className="text-sm text-white leading-snug">
                            “{item.testimonial}”
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-semibold text-base text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-zinc-400">{item.role}</p>
                      </div>
                    </div>
                  ) : (
                    // Existing testimonial type (no change)
                    <div className="bg-brand-purple rounded-lg p-4 md:p-5 lg:p-6 text-white h-full flex flex-col justify-between shadow-lg">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-1 text-yellow-300">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="w-4 h-4" />
                            ))}
                          </div>
                          <span className="text-sm">
                            ({item.rating} Rating)
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {item.testimonial}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-6">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs opacity-90">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-2 hover:bg-zinc-800 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <div className="w-28 h-px bg-zinc-800 relative">
              <div
                className="absolute top-0 left-0 h-full bg-zinc-500 transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="p-2 hover:bg-zinc-800 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
