import React, { useState, useMemo, useCallback } from 'react';

const DonationForm = ({
  onSubmit = null,
  defaultAmount = null,
  donationType = 'general', // 'general', 'child-sponsorship', 'education', 'emergency'
  childId = null,
  showRecurring = true,
  className = ''
}) => {
  // Form state
  const [formData, setFormData] = useState({
    amount: defaultAmount || '',
    donationType,
    isRecurring: false,
    frequency: 'monthly', // monthly, quarterly, yearly
    donorInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      panNumber: ''
    },
    paymentMethod: 'card', // card, upi, netbanking, wallet
    anonymous: false,
    newsletter: true,
    taxReceipt: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Amount, 2: Details, 3: Payment

  // Predefined donation amounts
  const predefinedAmounts = useMemo(() => {
    const amounts = {
      'child-sponsorship': [2500, 5000, 10000, 15000],
      'education': [500, 1000, 2500, 5000],
      'emergency': [1000, 2500, 5000, 10000],
      'general': [500, 1000, 2500, 5000, 10000]
    };
    return amounts[donationType] || amounts.general;
  }, [donationType]);

  // Form validation
  const validateStep = useCallback((step) => {
    const newErrors = {};

    if (step >= 1) {
      if (!formData.amount || formData.amount < 100) {
        newErrors.amount = 'Minimum donation amount is ₹100';
      }
    }

    if (step >= 2) {
      const { donorInfo } = formData;
      if (!donorInfo.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!donorInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!donorInfo.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!donorInfo.phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^[6-9]\d{9}$/.test(donorInfo.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Invalid phone number';
      }
      if (!donorInfo.city.trim()) newErrors.city = 'City is required';
      if (!donorInfo.state.trim()) newErrors.state = 'State is required';
      if (!donorInfo.pincode.trim()) {
        newErrors.pincode = 'Pincode is required';
      } else if (!/^\d{6}$/.test(donorInfo.pincode)) {
        newErrors.pincode = 'Invalid pincode';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Update form data
  const updateFormData = useCallback((field, value) => {
    setFormData(prev => {
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });
  }, []);

  // Handle amount selection
  const handleAmountSelect = useCallback((amount) => {
    updateFormData('amount', amount);
    setErrors(prev => ({ ...prev, amount: null }));
  }, [updateFormData]);

  // Handle next step
  const handleNext = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  }, [currentStep, validateStep]);

  // Handle previous step
  const handlePrevious = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    
    try {
      const donationData = {
        ...formData,
        childId,
        timestamp: new Date().toISOString()
      };

      if (onSubmit) {
        await onSubmit(donationData);
      } else {
        // Default behavior - log to console
        console.log('Donation submitted:', donationData);
        alert('Thank you for your generous donation!');
      }
    } catch (error) {
      console.error('Donation submission error:', error);
      alert('There was an error processing your donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, childId, onSubmit, validateStep]);

  // Calculate tax savings
  const taxSavings = useMemo(() => {
    const amount = parseFloat(formData.amount) || 0;
    return Math.round(amount * 0.5); // 50% tax deduction under 80G
  }, [formData.amount]);

  // Step 1: Amount Selection
  const renderAmountStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose Donation Amount</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountSelect(amount)}
              className={`p-3 rounded-lg border-2 text-center transition-all ${
                formData.amount === amount
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-25'
              }`}
            >
              <div className="font-semibold">₹{amount.toLocaleString()}</div>
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="number"
            placeholder="Enter custom amount"
            value={formData.amount}
            onChange={(e) => updateFormData('amount', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <span className="absolute left-3 top-3 text-gray-500">₹</span>
        </div>
        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
      </div>

      {showRecurring && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.isRecurring}
              onChange={(e) => updateFormData('isRecurring', e.target.checked)}
              className="mt-1"
            />
            <div>
              <div className="font-medium text-blue-800">Make this a recurring donation</div>
              <div className="text-sm text-blue-600">Help us create lasting impact with regular support</div>
              {formData.isRecurring && (
                <select
                  value={formData.frequency}
                  onChange={(e) => updateFormData('frequency', e.target.value)}
                  className="mt-2 p-2 border border-blue-200 rounded focus:ring-2 focus:ring-blue-500"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              )}
            </div>
          </label>
        </div>
      )}

      {formData.amount && (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-800">
            <div className="font-medium">Tax Benefits:</div>
            <div className="text-sm">You can save up to ₹{taxSavings.toLocaleString()} in taxes under Section 80G</div>
          </div>
        </div>
      )}
    </div>
  );

  // Step 2: Donor Information
  const renderDetailsStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Donor Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input
            type="text"
            value={formData.donorInfo.firstName}
            onChange={(e) => updateFormData('donorInfo.firstName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input
            type="text"
            value={formData.donorInfo.lastName}
            onChange={(e) => updateFormData('donorInfo.lastName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            value={formData.donorInfo.email}
            onChange={(e) => updateFormData('donorInfo.email', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            type="tel"
            value={formData.donorInfo.phone}
            onChange={(e) => updateFormData('donorInfo.phone', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          value={formData.donorInfo.address}
          onChange={(e) => updateFormData('donorInfo.address', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
          <input
            type="text"
            value={formData.donorInfo.city}
            onChange={(e) => updateFormData('donorInfo.city', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
          <input
            type="text"
            value={formData.donorInfo.state}
            onChange={(e) => updateFormData('donorInfo.state', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
          <input
            type="text"
            value={formData.donorInfo.pincode}
            onChange={(e) => updateFormData('donorInfo.pincode', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number (for tax receipt)</label>
        <input
          type="text"
          value={formData.donorInfo.panNumber}
          onChange={(e) => updateFormData('donorInfo.panNumber', e.target.value.toUpperCase())}
          placeholder="ABCDE1234F"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-3">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.anonymous}
            onChange={(e) => updateFormData('anonymous', e.target.checked)}
          />
          <span className="text-sm">Make this donation anonymous</span>
        </label>
        
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => updateFormData('newsletter', e.target.checked)}
          />
          <span className="text-sm">Subscribe to our newsletter for updates</span>
        </label>
        
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.taxReceipt}
            onChange={(e) => updateFormData('taxReceipt', e.target.checked)}
          />
          <span className="text-sm">Send me tax receipt via email</span>
        </label>
      </div>
    </div>
  );

  // Step 3: Payment
  const renderPaymentStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
          { value: 'upi', label: 'UPI', icon: '📱' },
          { value: 'netbanking', label: 'Net Banking', icon: '🏦' },
          { value: 'wallet', label: 'Wallet', icon: '👛' }
        ].map((method) => (
          <button
            key={method.value}
            type="button"
            onClick={() => updateFormData('paymentMethod', method.value)}
            className={`p-3 rounded-lg border-2 text-center transition-all ${
              formData.paymentMethod === method.value
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 hover:border-orange-300'
            }`}
          >
            <div className="text-2xl mb-1">{method.icon}</div>
            <div className="text-sm font-medium">{method.label}</div>
          </button>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Donation Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Amount:</span>
            <span className="font-medium">₹{parseFloat(formData.amount || 0).toLocaleString()}</span>
          </div>
          {formData.isRecurring && (
            <div className="flex justify-between">
              <span>Frequency:</span>
              <span className="font-medium capitalize">{formData.frequency}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Payment Gateway Fee:</span>
            <span className="font-medium">₹0 (We cover this)</span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span>₹{parseFloat(formData.amount || 0).toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-600">
        <p>🔒 Your donation is secure and encrypted. We use industry-standard security measures to protect your information.</p>
        <p className="mt-1">📧 You will receive a confirmation email and tax receipt within 24 hours.</p>
      </div>
    </div>
  );

  return (
    <div className={`max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Progress Bar */}
      <div className="bg-gray-100 p-4">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                step <= currentStep
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="flex text-xs text-gray-600">
          <span className="flex-1">Amount</span>
          <span className="flex-1 text-center">Details</span>
          <span className="flex-1 text-right">Payment</span>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6">
        {currentStep === 1 && renderAmountStep()}
        {currentStep === 2 && renderDetailsStep()}
        {currentStep === 3 && renderPaymentStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
          )}
          
          <div className="ml-auto">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentStep === 1 && !formData.amount}
                className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  `Donate ₹${parseFloat(formData.amount || 0).toLocaleString()}`
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;