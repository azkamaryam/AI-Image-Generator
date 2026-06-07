import { plans } from "../assets/assets";

function BuyCredit() {
  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        Buy Credits
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Choose a plan that suits your needs
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-xl p-8 text-center shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4">
              {plan.id}
            </h2>

            <h3 className="text-4xl font-bold mb-4">
              ${plan.price}
            </h3>

            <p className="text-gray-500 mb-4">
              {plan.credits} Credits
            </p>

            <p className="text-gray-500 mb-6">
              {plan.desc}
            </p>

            <button className="bg-black text-white px-6 py-2 rounded-full">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyCredit;