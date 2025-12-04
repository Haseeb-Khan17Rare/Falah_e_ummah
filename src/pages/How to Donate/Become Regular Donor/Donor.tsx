import React, { useState } from 'react';
import { 
  FaHeart, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe, 
  FaMoneyBillWave, 
  FaRedo, 
  FaCreditCard, 
  FaCheckCircle, 
  FaCommentAlt, 
  FaBuilding, 
  FaCalendarAlt,
  FaBell 
} from 'react-icons/fa';

// Define options for frequency and payment methods
const FREQUENCY_OPTIONS = [
  'Weekly',
  'Monthly',
  'Quarterly',
];

const PAYMENT_OPTIONS = [
  'Bank Transfer',
  'Credit/Debit Card',
  'Cash Collection',
  'Other (please specify)',
];

const RegularDonorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    // Donation Preferences
    contributionAmount: '',
    frequency: '',
    paymentMethod: '',
    automatedReminders: 'Yes',
    // Additional Information
    specificProject: '',
    heardAbout: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Regular Donor Form Submitted:', formData);
    alert('Thank you for choosing to become a regular donor! A team member will contact you shortly to finalize the setup.');
    // Add your actual form submission logic here (e.g., API call)
  };

  const labelClass = "block text-sm font-medium text-gray-700 mb-1 flex items-center";
  const inputClass = "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 transition duration-150";
  const sectionTitleClass = "text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-red-400 flex items-center";
  const primaryColor = "text-red-700"; 

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header Block - Focus on Consistency */}
        <div className="bg-red-700 text-white p-8 rounded-t-xl shadow-2xl">
          <div className="flex items-center space-x-4 mb-3">
            <FaHeart className="text-4xl text-white" />
            <h2 className="text-4xl font-extrabold">Become a Regular Donor</h2>
          </div>
          <p className="text-red-100 text-lg">
            Join our community of **consistent givers** who help us empower families, create sustainable livelihoods, and support those most in need.
          </p>
          <p className="mt-4 text-sm font-medium border-t border-red-500 pt-3">
            Your generosity helps transform lives. A team member will contact you to set up your preferred payment method or contribution reminder system.
          </p>
        </div>
        
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-xl shadow-2xl border-t-2 border-red-500">
          
          {/* Section 1: Basic Information */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaUser className={`${primaryColor} mr-3`} /> 1. Basic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div>
                <label className={labelClass}><FaUser className={`${primaryColor} mr-2`} /> Full Name<span className="text-red-500 ml-1">*</span></label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}><FaEnvelope className={`${primaryColor} mr-2`} /> Email Address<span className="text-red-500 ml-1">*</span></label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}><FaPhone className={`${primaryColor} mr-2`} /> Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}><FaGlobe className={`${primaryColor} mr-2`} /> City / Country</label>
                <input type="text" name="cityCountry" value={formData.cityCountry} onChange={handleChange} className={inputClass} />
              </div>

            </div>
          </div>

          {/* Section 2: Donation Preferences */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaRedo className={`${primaryColor} mr-3`} /> 2. Donation Preferences (Recurring)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div className="md:col-span-2">
                <label className={labelClass}><FaMoneyBillWave className={`${primaryColor} mr-2`} /> How much would you like to contribute regularly?<span className="text-red-500 ml-1">*</span></label>
                <input type="text" name="contributionAmount" required placeholder="e.g., PKR 1,000 or USD 25" value={formData.contributionAmount} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}><FaCalendarAlt className={`${primaryColor} mr-2`} /> Donation frequency<span className="text-red-500 ml-1">*</span></label>
                <select name="frequency" required value={formData.frequency} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select frequency</option>
                  {FREQUENCY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}><FaCreditCard className={`${primaryColor} mr-2`} /> Preferred payment method<span className="text-red-500 ml-1">*</span></label>
                <select name="paymentMethod" required value={formData.paymentMethod} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select method</option>
                  {PAYMENT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              
              {/* Automated Reminders */}
              <div className="mt-2 md:col-span-2">
                <label className={labelClass}><FaBell className={`${primaryColor} mr-2`} /> Would you like automated reminders?</label>
                <div className="flex items-center space-x-6 mt-1">
                  <label><input type="radio" name="automatedReminders" value="Yes" checked={formData.automatedReminders === 'Yes'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">Yes</span></label>
                  <label><input type="radio" name="automatedReminders" value="No" checked={formData.automatedReminders === 'No'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">No</span></label>
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Additional Information */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaCommentAlt className={`${primaryColor} mr-3`} /> 3. Additional Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
                
                <div>
                  <label className={labelClass}>Any specific project you would like your donation to support? (Optional)</label>
                  <input type="text" name="specificProject" value={formData.specificProject} onChange={handleChange} className={inputClass} />
                </div>
                
                <div>
                  <label className={labelClass}>How did you hear about us?</label>
                  <input type="text" name="heardAbout" value={formData.heardAbout} onChange={handleChange} className={inputClass} />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Additional comments (optional)</label>
                  <textarea name="comments" value={formData.comments} onChange={handleChange} rows={3} className={inputClass} />
                </div>
            </div>
          </div>

          {/* Submission Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-red-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-red-800 transition duration-300 transform hover:scale-[1.01] flex items-center justify-center mx-auto"
            >
              <FaHeart className="mr-3 text-xl" /> Commit to Regular Giving
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegularDonorForm;