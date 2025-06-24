function About() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="space-y-4">
        <p className="text-gray-300">
          I'm a frontend developer with a passion for building user-friendly web
          applications. I specialize in React, JavaScript, and modern CSS
          frameworks like Tailwind.
        </p>
        <h3 className="text-xl font-semibold mt-6">Skills</h3>
        <ul className="grid grid-cols-2 gap-4">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "HTML5",
            "BootStrap",
            "Git",
            "NodeJs",
            "MongoDB",
          ].map((skill) => (
            <li
              key={skill}
              className="bg-gray-800 p-2 rounded text-center font-semibold text-gray-200 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 cursor-pointer shadow"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
