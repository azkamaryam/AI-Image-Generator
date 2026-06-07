function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg mb-3">
          Login
        </button>

        <button
          onClick={onClose}
          className="w-full border py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Login;