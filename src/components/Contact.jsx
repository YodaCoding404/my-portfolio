import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7cbmx2g",
        "template_q2hmog8",
        form.current,
        "XYrZpnzPt3me2gJ61",
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setLoading(false);
          toast.error("Failed to send. Please try again.");
        },
      );
  };

  return (
    <div className="max-w-5xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6">Contact Form</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="w-full md:w-1/2 p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full md:w-1/2 p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full md:w-1/2 p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition flex items-center justify-center min-w-[120px]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
        {/* Contact Information */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-4 text-gray-300">
            <div>
              <span className="font-semibold">Address:</span>
              <div>KG 123 Street, Kigali, Rwanda</div>
            </div>
            <div>
              <span className="font-semibold">Phone:</span>
              <div>+250 123 456 789</div>
            </div>
            <div>
              <span className="font-semibold">Email:</span>
              <div>yvesthomas101@gmail.com</div>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4 text-2xl">
              <span className="hover:text-blue-400 cursor-pointer">
                <FaGithub />
              </span>
              <span className="hover:text-blue-400 cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="hover:text-blue-400 cursor-pointer">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
