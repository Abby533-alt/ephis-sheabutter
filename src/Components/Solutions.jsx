
export default function Solutions() {
  const solutions = [
    {
      title: "Deep Moisturization",
      desc: "Our shea butter provides intense hydration, leaving your skin soft, smooth, and nourished all day long.",
      icon: "💧",
    },
    {
      title: "Skin Repair & Protection",
      desc: "Helps reduce scars, stretch marks, and eczema while protecting your skin from sun damage.",
      icon: "🛡️",
    },
    {
      title: "Hair & Scalp Care",
      desc: "Strengthens hair, prevents breakage, and soothes dry, itchy scalp naturally.",
      icon: "💇🏽‍♀️",
    },
    {
      title: "Natural Glow",
      desc: "Rich in vitamins A & E, it promotes healthy, radiant, and youthful-looking skin.",
      icon: "✨",
    },
    {
      title: "Eco-Friendly & Pure",
      desc: "100% organic, chemical-free, and sustainably sourced shea butter you can trust.",
      icon: "🌍",
    },
  ];

  return (
    <section className="py-16 bg-amber-50" id="solutions">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🌿 Solutions We Offer
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At Ephis Shea Butter, we provide natural skincare and haircare
          solutions crafted from pure, organic shea butter to nourish,
          protect, and rejuvenate your body.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
