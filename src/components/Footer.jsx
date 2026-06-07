import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="border-t mt-24 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-32"
        />

        <p className="text-gray-500 text-sm">
          © 2026 Imagify. All rights reserved.
        </p>

        <div className="flex gap-4">
          <img src={assets.facebook_icon} alt="Facebook" className="w-6" />
          <img src={assets.instagram_icon} alt="Instagram" className="w-6" />
          <img src={assets.twitter_icon} alt="Twitter" className="w-6" />
        </div>
      </div>
    </div>
  );
}

export default Footer;