import { useState } from "react";

function Navbar() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-400">Mukama Yves</span>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
        {/* Nav links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-50 transition-all duration-300 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="text-center">
              <a
                href={`#${item.id}`}
                className="capitalize text-gray-300 hover:text-white block py-2 md:py-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
