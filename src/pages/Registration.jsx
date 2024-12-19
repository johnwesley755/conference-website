import React, { useState } from "react";
import { motion } from "framer-motion";

const Registration = () => {
  const [paperId, setPaperId] = useState("");
  const [title, setTitle] = useState("");
  const [feeDetails, setFeeDetails] = useState("indian");
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Registration submitted successfully! 🚀");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-300 py-16">
      <div className="container mx-auto px-6 z-10">
        <motion.h1
          className="text-5xl font-extrabold text-center text-blue-800 mt-16 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Registration 📄
        </motion.h1>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Registration Guidelines 📚
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            All presented and registered papers will be recommended for
            publication. 📝
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Registered members are asked to provide intimation about their
            payments immediately via Email to{" "}
            <span className="font-semibold text-blue-600">
              icsmdi.contact@gmail.com 📧
            </span>
            .
          </p>
          <p className="text-gray-700 text-lg mb-4">
            The registration fee is applicable per paper. One of the authors can
            register using the Acceptance ID. 📜
          </p>
          <p className="text-gray-700 text-lg mb-4">
            After completion of registration, send a scanned copy of the
            registration fee receipt or transaction proof via email. 💳
          </p>
          <p className="text-gray-700 text-lg mb-4">
            After the final submission date, no modifications will be accepted
            for the paper. ⏰
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Enter Registration Details 📝
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Paper ID and Title Input */}
            <div>
              <label className="block text-lg text-gray-700">
                Enter Paper ID 💡
              </label>
              <input
                type="text"
                value={paperId}
                onChange={(e) => setPaperId(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700">
                Enter Title 🏷️
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Fee Selection */}
            <div>
              <label className="block text-lg text-gray-700">
                Select Registration Fee 💰
              </label>
              <select
                value={feeDetails}
                onChange={(e) => setFeeDetails(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              >
                <option value="indian">Indian Authors - 9000 INR 🇮🇳</option>
                <option value="foreign">Foreign Authors - 160 USD 🌍</option>
              </select>
            </div>

            {/* Payment Receipt Upload */}
            <div>
              <label className="block text-lg text-gray-700">
                Upload Payment Receipt 💳
              </label>
              <input
                type="file"
                onChange={(e) => setPaymentReceipt(e.target.files[0])}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Publishing Agreement */}
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                checked={agreementChecked}
                onChange={(e) => setAgreementChecked(e.target.checked)}
                className="mr-2"
                required
              />
              <span className="text-lg text-gray-700">
                I agree to the{" "}
                <a href="/publishing-agreement" className="text-blue-600">
                  Publishing Agreement 📑
                </a>
                .
              </span>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Registration 🚀
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
