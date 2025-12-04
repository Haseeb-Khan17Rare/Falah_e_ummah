import React, { useState } from 'react';
import { 
  FaHandHoldingHeart, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe, 
  FaSeedling, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaLock, 
  FaCommentAlt, 
  FaBuilding, 
  FaCalendarAlt,
  FaCheckCircle // For the radio buttons/check marks
} from 'react-icons/fa';

// Define the static list of projects and sponsorship types
const PROJECT_LIST = [
  'Social Business Project',
  'Dastakari Project',
  'Education Project',
  'Health Camps',
  'Blood Donation Drive',
  'Winter Drive',
  'Natural Disaster Relief',
  'Ramadan Projects',
];

const SPONSORSHIP_TYPES = [
  'Full sponsorship',
  'Partial sponsorship',
  'Monthly contribution',
];

const SponsorProjectSimpleRed: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    project: '',
    sponsorshipType: '',
    donationAmount: '',
    periodicUpdates: 'Yes',
    anonymous: 'No',
    specificInstructions: '',
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
    console.log('Sponsorship Form Submitted:', formData);
    alert('Thank you for your commitment! Your form has been submitted.');
    // Add your actual form submission logic here (e.g., API call)
  };

  const labelClass = "block text-sm font-medium text-gray-700 mb-1 flex items-center";
  const inputClass = "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 transition duration-150";
  const sectionTitleClass = "text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-red-400 flex items-center";
  // Primary color for icons and accents
  const primaryColor = "text-red-700"; 

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header Block - Uses Dark Red Background */}
        <div className="bg-red-700 text-white p-8 rounded-t-xl shadow-2xl">
          <div className="flex items-center space-x-4 mb-3">
            <FaHandHoldingHeart className="text-4xl text-white" />
            <h2 className="text-4xl font-extrabold">Sponsor a Project</h2>
          </div>
          <p className="text-red-100 text-lg">
            Directly **invest in impact**. Fill out this form to support an ongoing project, and our team will reach out with full transparency and next steps.
          </p>
        </div>
        
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-xl shadow-2xl border-t-2 border-red-500">
          
          {/* Section 1: Basic Information */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaUser className={`${primaryColor} mr-3`} /> 1. Contact & Identity
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div>
                <label className={labelClass}><FaBuilding className={`${primaryColor} mr-2`} /> Full Name / Organisation Name<span className="text-red-500 ml-1">*</span></label>
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

          {/* Section 2: Sponsorship Details */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaChartLine className={`${primaryColor} mr-3`} /> 2. Investment Specifics
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div>
                <label className={labelClass}><FaSeedling className={`${primaryColor} mr-2`} /> Which project would you like to sponsor?<span className="text-red-500 ml-1">*</span></label>
                <select name="project" required value={formData.project} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a project</option>
                  {PROJECT_LIST.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}><FaCalendarAlt className={`${primaryColor} mr-2`} /> Sponsorship type<span className="text-red-500 ml-1">*</span></label>
                <select name="sponsorshipType" required value={formData.sponsorshipType} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select type</option>
                  {SPONSORSHIP_TYPES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}><FaMoneyBillWave className={`${primaryColor} mr-2`} /> Expected donation amount (PKR / USD)<span className="text-red-500 ml-1">*</span></label>
                <input type="text" name="donationAmount" required value={formData.donationAmount} onChange={handleChange} className={inputClass} />
              </div>
              
              {/* Radio Fields for updates and anonymity */}
              <div className="mt-2">
                <label className={labelClass}><FaCheckCircle className={`${primaryColor} mr-2`} /> Would you like periodic progress updates?</label>
                <div className="flex items-center space-x-6 mt-1">
                  <label><input type="radio" name="periodicUpdates" value="Yes" checked={formData.periodicUpdates === 'Yes'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">Yes</span></label>
                  <label><input type="radio" name="periodicUpdates" value="No" checked={formData.periodicUpdates === 'No'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">No</span></label>
                </div>
              </div>

              <div className="mt-2">
                <label className={labelClass}><FaLock className={`${primaryColor} mr-2`} /> Would you prefer to remain anonymous?</label>
                <div className="flex items-center space-x-6 mt-1">
                  <label><input type="radio" name="anonymous" value="Yes" checked={formData.anonymous === 'Yes'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">Yes</span></label>
                  <label><input type="radio" name="anonymous" value="No" checked={formData.anonymous === 'No'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">No</span></label>
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Additional Information */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaCommentAlt className={`${primaryColor} mr-3`} /> 3. Additional Preferences
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
                {/* Specific Instructions */}
                <div className="md:col-span-2 mb-4">
                    <label className={labelClass}>Specific Instructions or Preferences</label>
                    <textarea name="specificInstructions" value={formData.specificInstructions} onChange={handleChange} rows={3} className={inputClass} />
                </div>
                
                {/* How did you hear */}
                <div>
                  <label className={labelClass}>How did you hear about this project?</label>
                  <input type="text" name="heardAbout" value={formData.heardAbout} onChange={handleChange} className={inputClass} />
                </div>
                
                {/* General Comments */}
                <div>
                  <label className={labelClass}>Comments (optional)</label>
                  <input type="text" name="comments" value={formData.comments} onChange={handleChange} className={inputClass} />
                </div>
            </div>
          </div>

          {/* Submission Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              // Button uses the primary red color
              className="w-full md:w-auto bg-red-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-red-800 transition duration-300 transform hover:scale-[1.01] flex items-center justify-center mx-auto"
            >
              <FaHandHoldingHeart className="mr-3 text-xl" /> Submit Sponsorship Commitment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SponsorProjectSimpleRed;