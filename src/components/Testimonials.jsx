import { testimonialsData } from "../assets/assets";

function Testimonials() {
  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-center mb-4">
        Customer Testimonials
      </h2>

      <p className="text-gray-500 text-center mb-12">
        What our users are saying
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />

            <h3 className="font-semibold">
              {testimonial.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              {testimonial.role}
            </p>

            <p className="text-gray-600">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;