import { JSX } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm(): JSX.Element {
  const [state, handleSubmit] = useForm("xblolrkk");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-center mt-4">Thanks for joining!</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-900 text-white shadow-lg rounded-lg"
    >
      <label htmlFor="email" className="block mb-2 text-sm font-medium">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="w-full mb-4 px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="you@example.com"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500 text-sm mb-3"
      />

      <label htmlFor="message" className="block mb-2 text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        className="w-full mb-4 px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your message..."
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500 text-sm mb-4"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
