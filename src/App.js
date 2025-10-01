import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { X } from 'lucide-react';
import NGOWebsite from "./Components/NGOWebsite";
import GetInTouch from "./Components/GetInTouch";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Programs from "./Components/Programs";
import LearnMorePage from "./Components/LearnMorePage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonate, setIsDonate] = useState(false);

  const handleDonateClick = () => {
    setIsDonate(true);
  };

  const handleDocumentsClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Header onDonateClick={handleDonateClick} onDocumentsClick={handleDocumentsClick} />
      <Routes>
        <Route path="/" element={<NGOWebsite />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/learn-more" element={<LearnMorePage/>} />
      </Routes>
      <Footer onDonateClick={handleDonateClick} />

      {/* Donate Modal */}
      {isDonate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl mx-auto max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Support Our Mission</h2>
              <button
                onClick={() => setIsDonate(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="text-center">
                <div className="w-full max-w-xs mx-auto mb-4">
                  <div className="w-60 h-60 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <img src="/donation.png" alt="QR Code" className="w-48 h-48 mx-auto object-cover" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Scan to Donate</h3>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Your generous contribution can make a significant difference in the lives of those we serve.
                  Scan the QR code above to donate securely and help us continue our mission of empowering communities,
                  transforming lives, and building a brighter future for all.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Cheque Payment</h3>
                  <p className="text-gray-700 mb-4 text-center leading-relaxed">
                    Cheques or Bank Drafts should be given in the name of <strong>"Ankita Wellbeing Foundation"</strong> payable at Prayagraj.
                    You can courier the cheque to the address below:
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-800 font-medium leading-relaxed">
                      <strong>Ankita Wellbeing Foundation</strong><br />
                      703-A, Rudra Sangam Apartment, Sarai Inayat<br />
                      GT Road near Prayag Dhaba<br />
                      Prayagraj – 211019, U.P., India<br />
                      <span className="text-blue-600">Mobile: (+91) 7905226299</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">Bank Transfer (India)</h3>
                  <p className="text-gray-700 mb-4 text-center leading-relaxed">
                    You can donate using online bank transfer or wire transfer from your bank account
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <span className="font-medium text-gray-600">Account Name:</span>
                      <span className="col-span-2 text-gray-800">Ankita Wellbeing Foundation</span>

                      <span className="font-medium text-gray-600">Account Type:</span>
                      <span className="col-span-2 text-gray-800">Current Account</span>

                      <span className="font-medium text-gray-600">Account Number:</span>
                      <span className="col-span-2 text-gray-800 font-mono">50200072918073</span>

                      <span className="font-medium text-gray-600">Bank Name:</span>
                      <span className="col-span-2 text-gray-800">HDFC Bank</span>

                      <span className="font-medium text-gray-600">Branch:</span>
                      <span className="col-span-2 text-gray-800">Jhusi, Prayagraj, PIN - 211019</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Tax Benefits:</strong> Donations are eligible for tax deductions under Section 80G of the Income Tax Act.
                  Receipt will be provided for all donations.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 p-6 flex justify-end gap-3">
              <button
                onClick={() => setIsDonate(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Documents Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-2xl mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Documents</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto max-h-96">
              <h3 className="font-semibold mb-2">License</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img
                    src="/doc.jpg"
                    alt="Document"
                    className="w-50 h-64 object-contain border rounded"
                  />
                </div>

                <div>
                  <img
                    src="/docs1.png"
                    alt="Document"
                    className="w-50 h-64 object-contain border rounded"
                  />
                </div>

                <div>
                  <img
                    src="/docs2.png"
                    alt="Document"
                    className="w-50 h-64 object-contain border rounded"
                  />
                </div>

                <div>
                  <img
                    src="/docs3.png"
                    alt="Document"
                    className="w-50 h-64 object-contain border rounded"
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">PAN</h3>
                  <img
                    src="/docs4.png"
                    alt="Document"
                    className="w-50 h-64 object-contain border rounded"
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Income Tax Certificate</h3>
                  <img
                    src="/docs5.png"
                    alt="Document"
                    className="w-50 h-64 object-contain border rounded"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;