import React, { useState, useMemo } from 'react';
// Import necessary icons from react-icons/fa
import { 
  FaHeart, 
  FaUsers, 
  FaChartLine, 
  FaBullseye, 
  FaLock, 
  FaDollarSign 
} from 'react-icons/fa';

interface DonationProgressProps {
  goalAmount: number;
  initialRaisedAmount?: number;
}

// Custom SVG icon definitions have been replaced by Fa* imports

const suggestedAmounts = [50, 100, 250, 500];

const DonationJar: React.FC<DonationProgressProps> = ({
  goalAmount,
  initialRaisedAmount = 0,
}) => {
  const [raisedAmount, setRaisedAmount] = useState(initialRaisedAmount);
  const [donationInput, setDonationInput] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const progressPercentage = useMemo(() => {
    const safeRaised = raisedAmount ?? 0;
    const safeGoal = goalAmount > 0 ? goalAmount : 1;
    return Math.min(100, (safeRaised / safeGoal) * 100);
  }, [raisedAmount, goalAmount]);

  const formatCurrency = (amount?: number, includeDecimals = true) =>
    (amount ?? 0).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: includeDecimals ? 2 : 0,
      maximumFractionDigits: 2,
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) {
      setDonationInput(`${parts[0]}.${parts[1]}`);
    } else {
      setDonationInput(value);
    }
    setSelectedAmount(null);
  };
  
  const processDonation = (donationValue: number) => {
    setRaisedAmount(prev => (prev ?? 0) + donationValue);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setDonationInput('');
      setSelectedAmount(null);
    }, 2000);
  };

  const handleDonate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const donationValue = selectedAmount || parseFloat(donationInput);
    if (donationValue > 0) {
      processDonation(donationValue);
    }
  };

  const handleQuickSelect = (amount: number) => {
    setSelectedAmount(amount);
    setDonationInput('');
  };

  const remainingAmount = Math.max(0, (goalAmount ?? 0) - (raisedAmount ?? 0));
  const isGoalReached = remainingAmount <= 0;
  const donorCount = Math.floor(initialRaisedAmount / 50 + (raisedAmount - initialRaisedAmount) / 100); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-5 shadow-lg">
                {/* FaHeart Icon */}
                <FaHeart className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Make a Difference Today
              </h1>
              <p className="text-xl text-red-50 max-w-2xl mx-auto font-medium">
                Join our community of supporters in creating lasting impact
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-red-600 px-8 py-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="border-r border-red-500">
                {/* FaUsers Icon */}
                <FaUsers className="w-6 h-6 text-white mx-auto mb-2 opacity-90" />
                <p className="text-2xl font-bold text-white">{donorCount}+</p>
                <p className="text-sm text-red-100 font-medium">Donors</p>
              </div>
              <div className="border-r border-red-500">
                {/* FaChartLine Icon */}
                <FaChartLine className="w-6 h-6 text-white mx-auto mb-2 opacity-90" />
                <p className="text-2xl font-bold text-white">{Math.round(progressPercentage)}%</p>
                <p className="text-sm text-red-100 font-medium">Complete</p>
              </div>
              <div>
                {/* FaBullseye Icon */}
                <FaBullseye className="w-6 h-6 text-white mx-auto mb-2 opacity-90" />
                <p className="text-2xl font-bold text-white">{formatCurrency(remainingAmount, false)}</p>
                <p className="text-sm text-red-100 font-medium">To Go</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-5 gap-6">
          
          {/* Left Column - Progress */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Campaign Progress</h2>
            
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Raised</p>
                  <p className="text-4xl font-black text-red-600">{formatCurrency(raisedAmount, false)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Goal</p>
                  <p className="text-2xl font-bold text-gray-700">{formatCurrency(goalAmount, false)}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-600">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-red-100">
                  <div
                    style={{ width: `${progressPercentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-500 to-red-600 transition-all duration-1000"
                  ></div>
                </div>
              </div>
            </div>

            {isGoalReached ? (
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-6 text-center">
                <p className="text-xl font-bold text-red-700 mb-2">Goal Achieved!</p>
                <p className="text-sm text-red-600">Thank you to all our supporters</p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Still Needed</p>
                <p className="text-3xl font-black text-gray-800 mb-2">{formatCurrency(remainingAmount, false)}</p>
                <p className="text-sm text-gray-600">to reach our goal</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Every contribution matters.</span> Your support directly funds our mission and creates real change in our community.
              </p>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-xl p-8">
            {showThankYou ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
                    {/* FaHeart Icon for thank you */}
                    <FaHeart className="w-12 h-12 text-red-600 fill-red-600 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">Thank You!</h3>
                  <p className="text-lg text-gray-600">Your generosity makes a difference</p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Impact</h2>
                <p className="text-gray-600 mb-8">Select an amount or enter your own</p>

                {/* Suggested Amounts */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleQuickSelect(amount)}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'bg-red-600 border-red-600 text-white shadow-lg scale-105'
                          : 'bg-white border-gray-300 text-gray-800 hover:border-red-400 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <p className={`text-sm font-semibold mb-1 ${selectedAmount === amount ? 'text-red-100' : 'text-gray-500'}`}>
                          USD
                        </p>
                        <p className="text-4xl font-black">${amount}</p>
                      </div>
                      {selectedAmount === amount && (
                        <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-xl font-bold text-gray-400">
                      {/* FaDollarSign Icon */}
                      <FaDollarSign />
                    </span>
                    <input
                      type="text"
                      className={`w-full pl-16 pr-6 py-5 border-2 rounded-xl text-2xl font-bold transition-all duration-200 ${
                        donationInput ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                      } focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100`}
                      placeholder="Enter amount"
                      value={donationInput}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={!selectedAmount && (!donationInput || parseFloat(donationInput) <= 0)}
                  className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-xl shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-red-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none uppercase tracking-wide"
                >
                  {selectedAmount || donationInput ? `Donate ${formatCurrency(selectedAmount || parseFloat(donationInput || '0'))}` : 'Select Amount to Continue'}
                </button>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-500">
                  {/* FaLock Icon */}
                  <FaLock className="w-4 h-4 text-green-600" />
                  <span className="font-medium">Secure & encrypted donation</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl p-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-red-600">Your contribution is tax-deductible</span> and goes directly toward our programs. 
            We are committed to transparency and ensuring every dollar creates maximum impact in the communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationJar;