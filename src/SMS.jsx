import React, { useState } from "react";
import SMSAPI from "../../Pages/SMS/SMSAPI";
import BulkSMS from "../../Pages/SMS/BulkSMS";
import TwoFactorAuthentication from "../../Pages/SMS/TwoFactorAuthentication";
import InternationalSMS from "../../Pages/SMS/InternationalSMS";

function SMS() {
  const [activeSection, setActiveSection] = useState("SMSAPI");

  const renderSection = () => {
    switch (activeSection) {
      case "SMSAPI":
        return <SMSAPI />;
      case "BulkSMS":
        return <BulkSMS />;
      case "TwoFactorAuthentication":
        return <TwoFactorAuthentication />;
      case "InternationalSMS":
        return <InternationalSMS />;
      default:
        return <SMSAPI />;
    }
  };

  return (
    <>
      <section className="">
        {/* Navigation Buttons */}
        <div className=" container sticky top-4 z-10">
          <div className="hidden md:flex gap-10 justify-center items-center bg-blue-100 rounded-lg shadow-inner">
            <button
              className={`px-8 py-3 rounded-full text-base shadow-md font-bold transition-all duration-300 ${
                activeSection === "SMSAPI"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  : "bg-blue-100 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800"
              } hover:scale-105`}
              onClick={() => setActiveSection("SMSAPI")}
            >
              SMS API
            </button>

            <button
              className={`px-8 py-3  rounded-full text-base shadow-md font-medium transition-all duration-300 ${
                activeSection === "TwoFactorAuthentication"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white "
                  : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800"
              }hover:scale-105`}
              onClick={() => setActiveSection("TwoFactorAuthentication")}
            >
              Two-Factor Authentication
            </button>
            <button
              className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
                activeSection === "InternationalSMS"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white "
                  : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800"
              }hover:scale-105`}
              onClick={() => setActiveSection("InternationalSMS")}
            >
              International SMS
            </button>
            <button
              className={`px-8 py-3 rounded-full text-base shadow-md font-medium transition-all duration-300 ${
                activeSection === "BulkSMS"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white "
                  : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-gray-300 hover:to-gray-400 hover:text-gray-800"
              }hover:scale-105`}
              onClick={() => setActiveSection("BulkSMS")}
            >
              Bulk SMS
            </button>
          </div>
        </div>

        {/* Bottom Navigation for Mobile */}
        <div className=" fixed bottom-6 w-screen mr-5 bg-blue-200  shadow-md md:hidden flex justify-around py-5 z-10  sm:text-sm">
          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "SMSAPI"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => setActiveSection("SMSAPI")}
          >
            <i className="fas fa-envelope text-2xl"></i>
            <p className="text-xl mt-1">SMS API</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "TwoFactorAuthentication"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => setActiveSection("TwoFactorAuthentication")}
          >
            <i className="fas fa-shield-alt text-2xl"></i>
            <p className="text-xl mt-1">Two-Factor</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "InternationalSMS"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => setActiveSection("InternationalSMS")}
          >
            <i className="fas fa-globe text-2xl"></i>
            <p className="text-xl mt-1">International</p>
          </button>

          <button
            className={`flex flex-col items-center transition-all duration-300 ${
              activeSection === "BulkSMS"
                ? 'text-blue-600 scale-110 after:block after:content-[""] after:w-12 after:h-1 after:bg-blue-600 after:rounded-md'
                : "text-gray-500"
            }`}
            onClick={() => setActiveSection("BulkSMS")}
          >
            <i className="fas fa-paper-plane text-2xl"></i>
            <p className="text-xl mt-1">Bulk SMS</p>
          </button>
        </div>

        {/* mobile view ===============================================================================================
      <div className='container  overflow-y-hidden overflow-x-scroll z-3 sticky top-10 md:hidden'>
      <div className='py-4 flex gap-5  items-center rounded-lg justify-center'>
      <button
          className={` text-base px-4 py-2 rounded-xl  transition-all duration-300 ${
            activeSection === 'SMSAPI'
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('SMSAPI')}
        >
          SMS API
        </button>
      
       
        <button
          className={`  text-base px-3 py-2   rounded-xl transition-all duration-300 ${
            activeSection === 'TwoFactorAuthentication'
              ? 'bg-blue-600 text-white shadow-xl scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('TwoFactorAuthentication')}
        >
          Two-Factor Authentication
        </button>
        <button
          className={` text-base px-3 py-2  rounded-xl transition-all duration-300 ${
            activeSection === 'InternationalSMS'
              ? 'bg-blue-600 text-white shadow-xl scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('InternationalSMS')}
        >
          International SMS
        </button>
        <button
          className={`text-base sm: text-xl text-white  px-3 py-2 rounded-xl transition-all duration-300 ${
            activeSection === 'BulkSMS'
              ? 'bg-blue-600 text-white shadow-xl scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-md'
          }`}
          onClick={() => setActiveSection('BulkSMS')}
        >
          Bulk SMS
        </button>
        </div>
      </div> */}
        {/* Content Section */}
      </section>

      <div>
        <main>{renderSection()}</main>
      </div>
    </>
  );
}

export default SMS;
