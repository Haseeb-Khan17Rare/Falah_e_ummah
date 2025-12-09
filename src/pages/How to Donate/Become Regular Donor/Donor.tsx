import React, { useState } from 'react';
import { 
  FaHeart, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe, 
  FaMoneyBillWave,  
  FaCreditCard,  
  FaCalendarAlt,
  FaBell 
} from 'react-icons/fa';

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
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    contributionAmount: '',
    frequency: '',
    paymentMethod: '',
    automatedReminders: 'Yes',
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
    alert('Thank you for choosing to become a regular donor! A team member will contact you shortly.');
  };

  const labelClass = "block text-sm font-medium text-gray-700 mb-1 flex items-center";
  const inputClass = "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 transition duration-150";

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="bg-red-700 text-white p-8 rounded-t-xl shadow-2xl">
          <div className="flex items-center space-x-4 mb-3">
            <FaHeart className="text-4xl text-white" />
            <h2 className="text-4xl font-extrabold">Become a Regular Donor</h2>
          </div>
          <p className="text-red-100 text-lg">
            Join our community of consistent givers who help empower families and support those in need.
          </p>
          <p className="mt-4 text-sm font-medium border-t border-red-500 pt-3">
            A team member will contact you to set up your preferred payment method or reminder system.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-xl shadow-2xl border-t-2 border-red-500">

          <div className="mb-8 p-6 border border-gray-200 rounded-lg grid md:grid-cols-2 gap-4">

            <div>
              <label className={labelClass}><FaUser className="text-red-700 mr-2" /> Full Name *</label>
              <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}><FaEnvelope className="text-red-700 mr-2" /> Email Address *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}><FaPhone className="text-red-700 mr-2" /> Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}><FaGlobe className="text-red-700 mr-2" /> City / Country</label>
              <input type="text" name="cityCountry" value={formData.cityCountry} onChange={handleChange} className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}><FaMoneyBillWave className="text-red-700 mr-2" /> Contribution Amount *</label>
              <input type="text" name="contributionAmount" required placeholder="e.g., PKR 1,000 or USD 25" value={formData.contributionAmount} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}><FaCalendarAlt className="text-red-700 mr-2" /> Donation Frequency *</label>
              <select name="frequency" required value={formData.frequency} onChange={handleChange} className={inputClass}>
                <option value="" disabled>Select frequency</option>
                {FREQUENCY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div>
              <label className={labelClass}><FaCreditCard className="text-red-700 mr-2" /> Payment Method *</label>
              <select name="paymentMethod" required value={formData.paymentMethod} onChange={handleChange} className={inputClass}>
                <option value="" disabled>Select method</option>
                {PAYMENT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}><FaBell className="text-red-700 mr-2" /> Automated Reminders?</label>
              <div className="flex items-center space-x-6 mt-1">
                <label><input type="radio" name="automatedReminders" value="Yes" checked={formData.automatedReminders === 'Yes'} onChange={handleChange} /> <span className="ml-2 text-gray-700">Yes</span></label>
                <label><input type="radio" name="automatedReminders" value="No" checked={formData.automatedReminders === 'No'} onChange={handleChange} /> <span className="ml-2 text-gray-700">No</span></label>
              </div>
            </div>

            <div>
              <label className={labelClass}>Specific Project (Optional)</label>
              <input type="text" name="specificProject" value={formData.specificProject} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>How did you hear about us?</label>
              <input type="text" name="heardAbout" value={formData.heardAbout} onChange={handleChange} className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Additional Comments (Optional)</label>
              <textarea name="comments" value={formData.comments} onChange={handleChange} rows={3} className={inputClass} />
            </div>

          </div>

          {/* Submit Button */}
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
