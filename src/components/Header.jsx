import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="text-center my-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6">
        Turn text to
        <span className="text-blue-600"> image</span>, in seconds.
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto mb-8">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds. Just type your idea and watch the magic happen.
      </p>

      <button className="bg-black text-white px-8 py-3 rounded-full">
        Generate Images
      </button>

      <div className="mt-12">
        <img
          src={assets.hero}
          alt="Hero"
          className="w-full max-w-4xl mx-auto rounded-xl"
        />
      </div>
    </div>
  );
}

export default Header;