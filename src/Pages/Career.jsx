import { CommonHeading } from "../CommonComponent/CommonHeading";
import { Form } from "react-router-dom";
import { useState } from "react";

const CONTACT_EMAIL_ACCESS_KEY = import.meta.env.VITE_EMAIL_ACCESS_TOKEN;

function Career() {
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
          success:
            "Thank you for your application! We will review it and get back to you soon.",
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
        <div className="flex flex-col justify-between">
          <div>
            <CommonHeading
              h="Explore a Career With Us"
              p="Join Connex Better and be part of a team that's transforming communication. Grow your career, share your ideas, and make an impact with innovative solutions. Explore our open roles today!"
              width="full"
            />
          </div>
          <div className="container hidden md:block">
            <div>
              <p>More inquiries:</p>
              <p className="font-semibold">Support@connexbetter.com</p>
            </div>
            <div>
              <p>Connex Better headquarters</p>
              <p className="font-semibold">
                Innov8, 3rd Floor, Plot No. 211, Okhla Phase 3, Delhi, Delhi
                110020, IN
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f8f8] p-4 rounded-lg">
          <Form
            method="POST"
            action="/Career"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={onSubmit}
          >
            {/* Hidden fields for source tracking */}
            <input type="hidden" name="form_source" value="Careers Page" />
            <input
              type="hidden"
              name="subject"
              value="New Job Application Request"
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
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Department Field */}
            <div className="col-span-2">
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Your Department</option>
                <option value="Tech">Tech</option>
                <option value="Product">Product</option>
                <option value="Sales&Marketing">Sales & Marketing</option>
                <option value="Operation">Operation</option>
                <option value="HR">HR</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Resume Upload Field - Note: Web3Forms doesn't directly support file uploads */}
            <div className="col-span-2">
              <label
                htmlFor="resumeLink"
                className="block text-sm font-medium text-gray-700"
              >
                Resume Link (Google Drive, Dropbox, etc.)
              </label>
              <input
                type="url"
                id="resumeLink"
                name="resumeLink"
                placeholder="https://drive.google.com/..."
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Please upload your resume to a cloud service and share the link
              </p>
            </div>

            {/* Message Field */}
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message / Cover Letter
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 p-2 w-full border border-[#555555] rounded-md bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500"
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
                By clicking "Submit," I agree to receive communication on
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
                {formStatus.loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </Form>
          {/* Error/Success Messages */}
          {formStatus.error && (
            <p className="text-red-500 text-sm mt-2">{formStatus.error}</p>
          )}
          {formStatus.success && (
            <p className="text-green-500 text-sm mt-2">{formStatus.success}</p>
          )}
        </div>
      </div>
      <div className="container md:hidden">
        <div>
          <p>More inquiries:</p>
          <p className="font-semibold">Support@connexbetter.com</p>
        </div>
        <div>
          <p>Connex Better headquarters</p>
          <p className="font-semibold">
            Innov8, 3rd Floor, Plot No. 211, Okhla Phase 3, Delhi, Delhi 110020,
            IN
          </p>
        </div>
      </div>
    </section>
  );
}

export default Career;
