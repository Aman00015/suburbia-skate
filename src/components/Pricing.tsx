export default function Pricing() {
  return (
  <section id="pricing" className="w-full p-8 md:p-12 bg-zinc-900 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-center mb-8">
          Pricing — More sales means more designs
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">
          {/* Starter */}
          <article className="flex-1 bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700">
            <div className="p-6 bg-gradient-to-b from-zinc-800 to-zinc-900">
              <span className="inline-block bg-white text-zinc-900 px-3 py-1 rounded-full font-semibold text-sm">
                Starter
              </span>
              <div className="mt-6">
                <div className="text-3xl md:text-4xl font-semibold">
                  $100
                </div>
                <div className="text-sm text-zinc-400">Buy 2 custom skateboards</div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-zinc-200">
                <li>2x Custom decks</li>
                <li>Free shipping</li>
                <li>Email support</li>
              </ul>
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-brand-purple to-brand-orange text-white font-semibold py-3 rounded-lg">
                  Choose Starter
                </button>
              </div>
            </div>
          </article>

          {/* Pro */}
          <article className="flex-1 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl border border-zinc-600 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-lg bg-gradient-to-r from-brand-orange via-brand-pink to-brand-lime text-black font-semibold text-xs">
                🔥 Most popular
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-zinc-800 to-zinc-900">
              <span className="inline-block bg-white text-zinc-900 px-3 py-1 rounded-full font-semibold text-sm">Pro</span>
              <div className="mt-6">
                <div className="text-3xl md:text-4xl font-semibold">$150</div>
                <div className="text-sm text-zinc-400">Buy 3 custom skateboards</div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-zinc-200">
                <li>3x Custom decks</li>
                <li>Priority production</li>
                <li>Priority email support</li>
              </ul>
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-brand-lime to-brand-purple text-black font-semibold py-3 rounded-lg">
                  Choose Pro
                </button>
              </div>
            </div>
          </article>

          {/* Elite */}
          <article className="flex-1 bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700">
            <div className="p-6 bg-gradient-to-b from-zinc-800 to-zinc-900">
              <span className="inline-block bg-white text-zinc-900 px-3 py-1 rounded-full font-semibold text-sm">Elite</span>
              <div className="mt-6">
                <div className="text-3xl md:text-4xl font-semibold">$400</div>
                <div className="text-sm text-zinc-400">Buy 5 custom skateboards</div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-zinc-200">
                <li>5x Custom decks</li>
                <li>Dedicated account manager</li>
                <li>Custom finishing options</li>
              </ul>
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-brand-purple to-brand-lime text-white font-semibold py-3 rounded-lg">
                  Choose Elite
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
