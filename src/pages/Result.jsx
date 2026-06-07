function Result() {
  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Generated Image
      </h1>

      <div className="max-w-3xl mx-auto">
        <div className="border rounded-xl p-6">
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Generated image will appear here
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Generate Again
            </button>

            <button className="border px-6 py-2 rounded-full">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;