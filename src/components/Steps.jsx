import { stepsData } from "../assets/assets";

function Steps() {
  return (
    <div className="my-24">
      <h2 className="text-center text-3xl font-bold mb-12">
        How it works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 text-center shadow-sm"
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-16 mx-auto mb-4"
            />

            <h3 className="font-semibold text-lg mb-3">
              {step.title}
            </h3>

            <p className="text-gray-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;