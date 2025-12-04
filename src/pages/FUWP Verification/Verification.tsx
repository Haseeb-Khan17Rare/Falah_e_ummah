import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Shield, Award, Lock, BadgeCheck, AlertTriangle } from 'lucide-react';

// --- Types & Mock Data ---

interface VolunteerData {
  letterNumber: string;
  name: string;
  designation: string;
  status: boolean; // true for Active/Verified, false for Inactive/Not Verified
}

interface VerificationResult {
  verified: boolean;
  name?: string;
  designation?: string;
}

const MOCK_VOLUNTEERS: VolunteerData[] = [
  { letterNumber: "FUWF-2024-001", name: "Ali Khan", designation: "Team Lead (Logistics)", status: true },
  { letterNumber: "FUWF-2024-002", name: "Sara Malik", designation: "Coordinator (HR)", status: true },
  // This volunteer is in the system but marked inactive, resulting in a NOT VERIFIED message.
  { letterNumber: "FUWF-2024-003", name: "Usman Riaz", designation: "Field Officer (Ops)", status: false }, 
  // Any other number will result in a Record Not Found / NOT VERIFIED
];

// --- Component ---

const App: React.FC = () => {
  const [letterNumber, setLetterNumber] = useState('');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Function to simulate backend verification
  const handleVerify = () => {
    if (!letterNumber.trim()) {
      return;
    }

    setIsLoading(true);
    setResult(null); // Clear previous result immediately
    
    // Simulate API call delay
    setTimeout(() => {
      const key = letterNumber.trim().toUpperCase();
      const found = MOCK_VOLUNTEERS.find((v) => v.letterNumber === key);

      let newResult: VerificationResult | null = null;
      if (found) {
        // If found, use the 'status' property to set the 'verified' state
        newResult = {
          verified: found.status,
          name: found.name,
          designation: found.designation,
        };
      } else {
        // If not found, result is 'Not Verified'
        newResult = { verified: false };
      }

      setResult(newResult);
      setIsLoading(false);
    }, 1500); // 1.5 second delay for better visual of the loading state
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };
  
  // Quick access buttons logic
  const handleQuickAccess = (number: string) => {
    setLetterNumber(number);
    setResult(null);
    handleVerify();
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden font-sans text-slate-900">
      
      {/* Subtle Background Pattern (White/Light Gray) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(203, 213, 225) 1px, transparent 0)`, /* Very Light Dots */
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated Gradient Orbs (Red only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        
        {/* Premium Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-2xl transform group-hover:scale-110 transition-all duration-500 border border-slate-100">
              <Shield className="w-20 h-20 text-red-600" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-6xl font-black mb-4 tracking-tight text-black">
            FUWF
          </h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Verification Portal</h2>
          
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 rounded-full shadow-xl shadow-red-200">
            <Lock className="w-5 h-5 text-white" />
            <p className="text-lg text-white font-bold tracking-wide">
              SECURE VOLUNTEER AUTHENTICATION
            </p>
          </div>
        </div>

        {/* Premium Main Card */}
        <div className="relative group mb-6">
          {/* Card Glow Effect - Accent for Light Theme */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-600 to-red-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-200">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-10 h-10 sm:w-20 sm:h-20 border-t-4 border-l-4 border-red-600 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-20 sm:h-20 border-b-4 border-r-4 border-red-600 rounded-br-3xl"></div>
            
            {/* Input Section */}
            <div className="mb-8">
              <label 
                htmlFor="letterNumber" 
                className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest"
              >
                <BadgeCheck className="w-4 h-4 text-red-500" />
                Letter Number Verification
              </label>
              <div className={`relative group/input transition-all duration-300 ${isFocused ? 'scale-[1.01]' : ''}`}>
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur opacity-0 group-hover/input:opacity-50 transition duration-300 ${isFocused ? 'opacity-20' : ''}`}></div>
                <div className="relative">
                  <input
                    id="letterNumber"
                    type="text"
                    value={letterNumber}
                    onChange={(e) => {
                      setLetterNumber(e.target.value);
                      if (result) setResult(null); // Clear result on input change
                    }}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Enter verification code (e.g., FUWF-2024-001)"
                    className="w-full px-6 py-5 bg-white border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 transition-all text-lg font-semibold text-black placeholder-gray-400 shadow-inner"
                  />
                  <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                    <Search className={`w-6 h-6 transition-colors duration-300 ${isFocused ? 'text-red-500' : 'text-gray-400'}`} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <Lock className="w-3 h-3 text-red-500" />
                All verifications are encrypted and secure
              </p>
            </div>
            
            {/* Quick Access Buttons (Red and White only) */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <p className="w-full text-center text-sm font-semibold text-gray-500 mb-2">Test with Mock IDs:</p>
              {MOCK_VOLUNTEERS.map(v => (
                <button
                  key={v.letterNumber}
                  onClick={() => handleQuickAccess(v.letterNumber)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 ${
                    v.status
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-300' // Verified: Red Button, White Text
                      : 'bg-white text-red-600 border border-red-600 hover:bg-red-50 shadow-md shadow-red-100' // Inactive: White Button, Red Text/Border
                  }`}
                >
                  {v.letterNumber} ({v.status ? 'Verified' : 'Inactive'})
                </button>
              ))}
              <button
                onClick={() => handleQuickAccess("INVALID-000")}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
              >
                INVALID-000 (Not Found)
              </button>
            </div>

            {/* Premium Verify Button */}
            <button
              onClick={handleVerify}
              disabled={!letterNumber.trim() || isLoading}
              className="w-full relative group/btn overflow-hidden rounded-2xl transition-all duration-300 shadow-lg shadow-red-200 disabled:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600 to-red-700 transition-transform duration-300 group-hover/btn:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-700 to-red-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="relative py-5 px-6 flex items-center justify-center gap-3 text-white font-bold text-lg disabled:opacity-50 disabled:bg-gray-400">
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>AUTHENTICATING...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-6 h-6" strokeWidth={2.5} />
                    <span className="tracking-wider">VERIFY VOLUNTEER</span>
                    <Shield className="w-6 h-6" strokeWidth={2.5} />
                  </>
                )}
              </div>
            </button>

            {/* Result Section */}
            {result && (
              <div className="mt-8 animate-reveal">
                {result.verified ? (
                  <div className="relative group/result">
                    {/* Verified state now uses red for official confirmation/branding */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-30 group-hover/result:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white border-2 border-red-500 rounded-2xl p-8 shadow-xl shadow-red-100">
                      {/* Success Header */}
                      <div className="flex items-center gap-5 mb-6 pb-6 border-b-2 border-red-300">
                        <div className="relative">
                          <div className="absolute inset-0 bg-red-400 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                          <div className="relative p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl">
                            <CheckCircle className="w-12 h-12 text-white" strokeWidth={3} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-4xl font-black text-red-900 mb-1">
                            VERIFIED
                          </h3>
                          <p className="text-red-700 font-semibold flex items-center gap-2">
                            <BadgeCheck className="w-4 h-4" />
                            Authenticated Volunteer Credential
                          </p>
                        </div>
                      </div>
                      
                      {/* Volunteer Details */}
                      <div className="space-y-4">
                        <div className="relative group/detail">
                          <div className="absolute -inset-0.5 bg-red-500 rounded-xl blur opacity-0 group-hover/detail:opacity-20 transition duration-300"></div>
                          <div className="relative bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-md">
                            <p className="text-xs text-red-600 font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
                              <Award className="w-3 h-3" />
                              Volunteer Name
                            </p>
                            <p className="text-2xl text-black font-black">{result.name}</p>
                          </div>
                        </div>
                        
                        <div className="relative group/detail">
                          <div className="absolute -inset-0.5 bg-red-500 rounded-xl blur opacity-0 group-hover/detail:opacity-20 transition duration-300"></div>
                          <div className="relative bg-white rounded-xl p-5 border-l-4 border-red-500 shadow-md">
                            <p className="text-xs text-red-600 font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
                              <BadgeCheck className="w-3 h-3" />
                              Official Designation
                            </p>
                            <p className="text-2xl text-black font-black">{result.designation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative group/result">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur opacity-30 group-hover/result:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white border-2 border-red-500 rounded-2xl p-8 shadow-xl shadow-red-100">
                      <div className="flex items-start gap-5">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-red-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                          <div className="relative p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl">
                            <XCircle className="w-12 h-12 text-white" strokeWidth={3} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-4xl font-black text-red-900 mb-3">
                            NOT VERIFIED
                          </h3>
                          <p className="text-red-700 font-semibold leading-relaxed mb-4">
                            This letter number is not currently active in our system. The credential may be inactive, fraudulent, or invalid.
                          </p>
                          <div className="bg-red-50 border border-red-300 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <AlertTriangle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-red-700 font-bold text-sm mb-1">SECURITY WARNING</p>
                                <p className="text-red-700 text-xs">
                                  Do not proceed with unverified individuals. Report suspicious credentials immediately.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Premium Footer */}
        <div className="text-center">
          <div className="inline-block relative group/footer">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur opacity-10 group-hover/footer:opacity-25 transition duration-300"></div>
            <div className="relative bg-white border border-gray-200 px-8 py-4 rounded-full shadow-md">
              <p className="text-sm text-gray-500 font-bold tracking-wider">
                © 2024 <span className="text-red-500">FUWF</span> • Secure Authentication System
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations for Blob and Reveal */}
      <style>{`
        /* Animation keyframes */
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Apply animations */
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        /* Animation delays (Tailwind cannot do this natively) */
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-reveal {
          animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Custom border width for loader (if needed) */
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
};

export default App;