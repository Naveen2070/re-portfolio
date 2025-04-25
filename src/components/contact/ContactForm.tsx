import { JSX } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactForm(): JSX.Element {
  const [state, handleSubmit] = useForm("xblolrkk");

  return (
    <div className="w-full max-w-4xl bg-[#171717] rounded-xl shadow-xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#454545] rounded-t-xl px-5 py-3">
        <div className="flex space-x-1 select-none">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex space-x-1 select-none">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="flex flex-col p-8 text-white md:w-1/2">
          <div className="text-blue-500 text-2xl font-bold tracking-wide mb-1 select-none">
            FOLLOW ME
          </div>
          <div className="text-blue-500 text-2xl font-bold tracking-wide mb-6 underline select-none">
            ON
          </div>
          <div className="flex justify-center-safe gap-4">
            <a
              href="https://github.com/Naveen2070"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faGithub}
                style={{ color: "#2B7FFF" }}
                size="4x"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-r-cud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faLinkedin}
                style={{ color: "#2B7FFF" }}
                size="4x"
              />
            </a>
          </div>
          <div className="mt-auto text-xs text-gray-400 select-none">
            CONTACT INFO : +91 63830 39672
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:w-1/2 w-full flex items-center justify-center">
          {/* Success Message */}
          {state.succeeded ? (
            <p className="text-green-400 text-xl font-semibold text-center select-none w-20">
              Hope to talk to you soon!
            </p>
          ) : state.submitting ? (
            // Loader while submitting
            <div className="flex items-center justify-center h-48 select-none w-20">
              <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 text-base uppercase px-0 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="NAME"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 text-base uppercase px-0 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="EMAIL"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 text-base uppercase px-0 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="CONTACT NO"
                />
                <ValidationError
                  prefix="Contact"
                  field="contact"
                  errors={state.errors}
                />
              </div>
              <div className="pt-6">
                <input
                  id="message"
                  type="text"
                  name="message"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 text-base uppercase px-0 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="MESSAGE"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="pt-4 text-right space-x-4">
                <button
                  type="reset"
                  className="text-red-500 hover:text-red-700 text-base font-bold"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="text-blue-500 hover:text-blue-700 text-base font-bold"
                >
                  SEND
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
