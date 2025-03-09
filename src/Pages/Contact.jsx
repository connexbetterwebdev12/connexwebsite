import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Form } from "react-router-dom";
import { useState } from "react";

const CONTACT_EMAIL_ACCESS_KEY = import.meta.env.VITE_EMAIL_ACCESS_TOKEN;

function Contact() {
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // Direct form submission handler as backup
  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ loading: true, success: null, error: null });

    try {
      const formData = new FormData(event.target);

      formData.append("access_key", CONTACT_EMAIL_ACCESS_KEY);

      const json = JSON.stringify(Object.fromEntries(formData));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          loading: false,
          success: "Thank you! Your message has been sent successfully.",
          error: null,
        });
        // Reset the form
        event.target.reset();
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        loading: false,
        success: null,
        error: error.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-3">
          <CommonHeading
            h="Contact Us"
            p="Interested in learning more about Connex Better? You
                 came to the right place, Feel free to ask whatever
                comes to mind."
            width="full"
          />
        </div>
        <div className="bg-[#f8f8f8] p-4 rounded-lg">
          <Form
            method="POST"
            action="/Contact"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={onSubmit}
          >
            {/* Hidden fields for source tracking */}
            <input type="hidden" name="form_source" value="Contact Us Page" />
            <input
              type="hidden"
              name="subject"
              value="New Request from Contact Us Page"
            />
            {/* Email Field */}
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Name Field */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Company Name Field */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="companyname"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Phone Number Field */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Phone number must be 10 digits."
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Company Size Field */}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="companysize"
                className="block text-sm font-medium text-gray-700"
              >
                Company Size
              </label>
              <input
                type="number"
                id="companysize"
                name="companysize"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Interest Product Field */}
            <div className="col-span-2">
              <label
                htmlFor="intrestproduct"
                className="block text-sm font-medium text-gray-700"
              >
                What product are you interested in?
              </label>
              <select
                name="intrestproduct"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a Product</option>
                <option value="SMS">SMS</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="RCS">RCS</option>
                <option value="Email">Email</option>
                <option value="Voice">Voice</option>
              </select>
            </div>
            {/* Message Field */}
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4]  focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Agreement Checkbox */}
            <div className="col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreement"
                  required
                  className="mr-2"
                />
                By clicking "Contact Us," I agree to receive communication on
                newsletters, promotional content, offers and events through SMS,
                RCS, WhatsApp.
              </label>
            </div>
            {/* Submit Button */}
            <div className="col-span-2">
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`${
                  formStatus.loading
                    ? "bg-blue-300"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white font-bold py-2 px-4 rounded w-full`}
              >
                {formStatus.loading ? "Sending..." : "Contact Us"}
              </button>
            </div>
          </Form>
          {formStatus.error && (
            <p className="text-red-500 text-sm mt-2">{formStatus.error}</p>
          )}
          {formStatus.success && (
            <p className="text-green-500 text-sm mt-2">{formStatus.success}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
