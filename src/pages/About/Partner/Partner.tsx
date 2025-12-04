import React, { useState } from 'react';
import { 
  FaHandshake, 
  FaBuilding, 
  FaUserTie, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe, 
  FaLink, 
  FaCheckCircle, 
  FaChartBar, 
  FaClock, 
  FaLightbulb, 
  FaSeedling, 
  FaQuestion
} from 'react-icons/fa';

// Define the static list of projects for collaboration interest
const PROJECT_LIST = [
  'Social Business Project',
  'Dastakari Project',
  'Education Project',
  'Health Camps',
  'Blood Donation Drive',
  'Winter Drive',
  'Natural Disaster Relief',
  'Ramadan Projects',
  'General/All Projects',
];

const COLLABORATION_TYPES = [
  'Project sponsorship',
  'Joint initiative',
  'Volunteer programs',
  'Fundraising partnership',
  'Media / outreach collaboration',
  'Other (please specify)',
];

const CollaborationEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // Organisation Details
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    // Collaboration Interests
    collaborationType: '',
    projectInterest: '',
    goals: '',
    timeline: '',
    // Additional Information
    previousCollaboration: 'No',
    requirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Collaboration Form Submitted:', formData);
    alert('Thank you for your partnership enquiry! A member of our team will contact you shortly.');
    // Add your actual form submission logic here (e.g., API call)
  };

  const labelClass = "block text-sm font-medium text-gray-700 mb-1 flex items-center";
  const inputClass = "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 transition duration-150";
  const sectionTitleClass = "text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-red-400 flex items-center";
  const primaryColor = "text-red-700"; 

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header Block - Focused on Partnership */}
        <div className="bg-red-700 text-white p-8 rounded-t-xl shadow-2xl">
          <div className="flex items-center space-x-4 mb-3">
            <FaHandshake className="text-4xl text-white" />
            <h2 className="text-4xl font-extrabold">Collaborate With Us</h2>
          </div>
          <p className="text-red-100 text-lg">
            Falah-e-Ummat welcomes **partnerships** with organizations, institutions, and community groups to work together on impactful, specialized initiatives across Pakistan and internationally.
          </p>
          <p className="mt-4 text-sm font-medium border-t border-red-500 pt-3">
            Please submit an enquiry below, and a member of our partnership team will contact you shortly.
          </p>
        </div>
        
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-xl shadow-2xl border-t-2 border-red-500">
          
          {/* Section 1: Organisation Details */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaBuilding className={`${primaryColor} mr-3`} /> 1. Organisation Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div>
                <label className={labelClass}><FaBuilding className={`${primaryColor} mr-2`} /> Organisation / Company Name<span className="text-red-500 ml-1">*</span></label>
                <input type="text" name="orgName" required value={formData.orgName} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}><FaUserTie className={`${primaryColor} mr-2`} /> Contact Person’s Name<span className="text-red-500 ml-1">*</span></label>
                <input type="text" name="contactName" required value={formData.contactName} onChange={handleChange} className={inputClass} />
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
                <label className={labelClass}><FaLink className={`${primaryColor} mr-2`} /> Website / Social Media (optional)</label>
                <input type="text" name="website" value={formData.website} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label className={labelClass}><FaGlobe className={`${primaryColor} mr-2`} /> Country<span className="text-red-500 ml-1">*</span></label>
                <input type="text" name="country" required value={formData.country} onChange={handleChange} className={inputClass} />
              </div>

            </div>
          </div>

          {/* Section 2: Collaboration Interests */}
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaLightbulb className={`${primaryColor} mr-3`} /> 2. Collaboration Interests
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div>
                <label className={labelClass}><FaChartBar className={`${primaryColor} mr-2`} /> What type of collaboration are you interested in?<span className="text-red-500 ml-1">*</span></label>
                <select name="collaborationType" required value={formData.collaborationType} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a collaboration type</option>
                  {COLLABORATION_TYPES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div>
                <label className={labelClass}><FaSeedling className={`${primaryColor} mr-2`} /> Which of our projects are you interested in collaborating on?</label>
                <select name="projectInterest" value={formData.projectInterest} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a project</option>
                  {PROJECT_LIST.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Describe your goals for this collaboration<span className="text-red-500 ml-1">*</span></label>
                <textarea name="goals" required value={formData.goals} onChange={handleChange} rows={3} className={inputClass} />
              </div>
              
              <div className="md:col-span-2">
                <label className={labelClass}><FaClock className={`${primaryColor} mr-2`} /> Expected timeline (optional)</label>
                <input type="text" name="timeline" placeholder="e.g., Q4 2025, Next 6 months" value={formData.timeline} onChange={handleChange} className={inputClass} />
              </div>

            </div>
          </div>

          {/* Section 3: Additional Information */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className={sectionTitleClass}>
                <FaQuestion className={`${primaryColor} mr-3`} /> 3. Additional Requirements
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
                
                <div className="mt-2">
                    <label className={labelClass}><FaCheckCircle className={`${primaryColor} mr-2`} /> Have you collaborated with charitable organisations before?</label>
                    <div className="flex items-center space-x-6 mt-1">
                      <label><input type="radio" name="previousCollaboration" value="Yes" checked={formData.previousCollaboration === 'Yes'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">Yes</span></label>
                      <label><input type="radio" name="previousCollaboration" value="No" checked={formData.previousCollaboration === 'No'} onChange={handleChange} className="form-radio text-red-600 focus:ring-red-500" /><span className="ml-2 text-gray-700">No</span></label>
                    </div>
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Any additional questions or requirements?</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={3} className={inputClass} />
                </div>
            </div>
          </div>

          {/* Submission Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-red-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-red-800 transition duration-300 transform hover:scale-[1.01] flex items-center justify-center mx-auto"
            >
              <FaHandshake className="mr-3 text-xl" /> Submit Collaboration Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CollaborationEnquiryForm;