import React from 'react';
import { 
  FaUniversity, 
  FaMoneyCheckAlt, 
  FaGlobe, 
  FaUser,
  FaArrowRight,
  FaCopy 
} from 'react-icons/fa';

const BankAccountDetailsGraphic: React.FC = () => {
  // Replace these placeholders with your actual details
  const accountInfo = {
    name: "Falah-e-Ummat Welfare Foundation",
    bank: "Bank of Pakistan (BOP)",
    accountNumber: "0000 1234 5678 9012",
    swift: "BOPKPKKAXXX", 
    referenceNote: "Donor Name/ID & Campaign (e.g., John Doe/SponsorProject)",
  };

  const primaryColor = "text-red-700";

  // Function to simulate copying to clipboard
  const handleCopy = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    alert(`${field} copied to clipboard!`);
  };

  // Component for a single block of data
  const InfoBlock: React.FC<{ label: string, value: string, icon: React.ElementType, isRedBlock?: boolean, isCritical?: boolean }> = ({ label, value, icon: Icon, isRedBlock = false, isCritical = false }) => (
    <div className={`p-5 flex items-center justify-between ${isRedBlock ? 'bg-red-700 text-white' : 'bg-white text-gray-900'} shadow-md last:rounded-b-xl`}>
      <div className="flex items-center space-x-4">
        <Icon className={`text-2xl ${isRedBlock ? 'text-white' : primaryColor} flex-shrink-0`} />
        <div> 
          <p className={`text-sm font-semibold uppercase tracking-wider ${isRedBlock ? 'text-red-200' : 'text-gray-500'}`}>{label}</p>
          <p className={`text-xl font-extrabold ${isRedBlock ? 'text-white' : (isCritical ? primaryColor : 'text-gray-900')}`}>{value}</p>
        </div>
      </div>
      <button 
        onClick={() => handleCopy(value, label)} 
        className={`p-2 rounded-full transition-colors duration-200 ${isRedBlock ? 'bg-white text-red-700 hover:bg-gray-200' : 'bg-red-700 text-white hover:bg-red-600'}`}
        title={`Copy ${label}`}
      >
        <FaCopy className="text-lg" />
      </button>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="bg-red-700 text-white p-8 rounded-t-xl shadow-2xl">
          <div className="flex items-center space-x-4 mb-3">
            <FaMoneyCheckAlt className="text-4xl text-white" />
            <h2 className="text-3xl font-extrabold">Secure Direct Transfer Details</h2>
          </div>
          <p className="text-red-100 text-md">
            All necessary information for seamless domestic and international bank transfers. Click the copy icon for convenience.
          </p>
        </div>
        
        {/* Account Details Stack */}
        <div className="shadow-2xl mb-8 border-b-2 border-red-300">
            
            {/* Account Name (White Block) */}
            <InfoBlock 
                label="Account Holder Name" 
                value={accountInfo.name} 
                icon={FaUser} 
                isRedBlock={false} 
            />
            
            {/* Bank Name (Red Block) */}
            <InfoBlock 
                label="Bank Name" 
                value={accountInfo.bank} 
                icon={FaUniversity} 
                isRedBlock={true} 
            />
            
            {/* Account Number (White Block - Critical) */}
            <InfoBlock 
                label="Account Number (Local/IBAN)" 
                value={accountInfo.accountNumber} 
                icon={FaArrowRight} 
                isRedBlock={false} 
                isCritical={true}
            />

            {/* SWIFT Code (Red Block - International) */}
            <InfoBlock 
                label="SWIFT / BIC (International)" 
                value={accountInfo.swift} 
                icon={FaGlobe} 
                isRedBlock={true} 
                isCritical={true}
            />
        </div>

        {/* Reference Section (Critical Highlight) */}
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-500 mt-8 shadow-inner">
            <p className="text-lg font-extrabold text-red-800 flex items-center mb-2">
                <FaCopy className="mr-3 text-2xl" /> Mandatory Payment Reference
            </p>
            <p className="text-gray-700 font-medium italic">
                {accountInfo.referenceNote}
            </p>
            <p className="text-sm text-gray-600 mt-2">
                *Please ensure this reference format is included in your transfer notes for accurate reconciliation and receipt generation.
            </p>
        </div>
        
        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            We prioritize security. Contact our team if you need assistance with your wire transfer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankAccountDetailsGraphic;