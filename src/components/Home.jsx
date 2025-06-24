import toast from "react-hot-toast";

function Home() {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        }}
        aria-hidden="true"
      />
      {/* Black overlay */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-0 md:px-16">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <p className="text-4xl text-white mb-2">
            Hello<span className="text-blue-400">.</span>
          </p>
          <p className="text-3xl px-3 font-jetbrains font-extralight mb-2 text-gray-300">
            I'm Yves
          </p>
          <h2 className="text-2xl font-jetbrains font-bold text-blue-400 mb-4">
            A Fullstack Developer
          </h2>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition"
            >
              Discover my Projects
            </a>
            <button
              type="button"
              onClick={() => toast("Resume coming soon!")}
              className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded transition"
            >
              My Resume
            </button>
          </div>
        </div>
        {/* Right:  Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="profile.jpg"
            alt="John Doe"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
