import React from "react";

const Pricecard = () => {
  const plans = [
    {
      name: "Basic",
      price: 100,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Standard",
      price: 200,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Premium",
      price: 300,
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "Enterprise",
      price: 400,
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            className="  bg-white rounded-lg shadow-lg p-8 bg-gradient-to-tr from-sky-200 to-orange-200"
            key={index}
          >
            <h2 className="text-2xl font-semibold text-gray-500 ">
              {plan.name}
            </h2>
            <p className="text-2xl font-semibold text-blue-800 my-3">{`$${plan.price}`}</p>
            <ul className="text-gray-600 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricecard;
