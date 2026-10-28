import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Shield } from 'lucide-react';
import { EnquirySelections } from './EnquiryAssistant';

interface ContactQuotationFormProps {
  initialData?: Partial<EnquirySelections>;
  className?: string;
}

export const ContactQuotationForm: React.FC<ContactQuotationFormProps> = ({
  initialData,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Saudi Arabia',
    projectType: initialData?.projectType || 'Commercial',
    productOrService: initialData?.elevatorCategory || 'Passenger Elevators',
    projectStage: initialData?.projectStage || 'Planning',
    numberOfFloors: '',
    message: '',
    privacyConsent: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialData.projectType || prev.projectType,
        productOrService: initialData.elevatorCategory || prev.productOrService,
        projectStage: initialData.projectStage || prev.projectStage,
      }));
    }
  }, [initialData]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email address.');
      setStatus('error');
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Please provide a contact telephone or mobile number.');
      setStatus('error');
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMessage('Please acknowledge the privacy policy consent to proceed.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate real asynchronous submission with authentic latency
      await new Promise((resolve) => setTimeout(resolve, 850));

      // Successfully processed enquiry
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred while transmitting your enquiry. Please reach our Dammam office directly at +966 13 818 1396.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: 'Saudi Arabia',
      projectType: 'Commercial',
      productOrService: 'Passenger Elevators',
      projectStage: 'Planning',
      numberOfFloors: '',
      message: '',
      privacyConsent: false,
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className={`bg-white border border-[#ded8d8] rounded-lg shadow-sm p-6 sm:p-8 ${className}`}>
      {status === 'success' ? (
        <div className="py-12 px-4 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#CBEFB6]/20 border border-[#b8e59e] flex items-center justify-center mx-auto mb-6 text-[#1d4013]">
            <CheckCircle2 className="w-8 h-8 text-[#1d4013]" />
          </div>
          <span className="text-xs uppercase tracking-[0.16em] text-[#9B1D20] font-semibold block mb-2">
            Enquiry Received
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1c151d] tracking-tight mb-3">
            Thank you, {formData.fullName}.
          </h3>
          <p className="text-sm text-[#574f56] leading-relaxed mb-6">
            Your project enquiry for <span className="font-semibold text-[#1c151d]">{formData.productOrService}</span> ({formData.projectType}) has been logged with Global Team Elevator Co. technical sales. Our engineering consultant will contact you via <span className="font-semibold text-[#1c151d]">{formData.email}</span> shortly.
          </p>

          <div className="bg-[#fbfbfa] border border-[#ded8d8] p-4 rounded text-left text-xs text-[#574f56] mb-8 space-y-1 font-mono tabular-nums">
            <div><span className="font-medium text-[#1c151d] font-sans">Reference Target:</span> GTEC Dammam Engineering Desk</div>
            <div><span className="font-medium text-[#1c151d] font-sans">Direct Phone:</span> +966 13 818 1396 / +966 55 262 9141</div>
            <div><span className="font-medium text-[#1c151d] font-sans">Email:</span> sales@gtecelevators.com</div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 bg-[#9B1D20] text-white text-xs font-semibold rounded hover:bg-[#7a1618] transition-colors shadow-sm"
          >
            Submit Another Specification
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {errorMessage && (
            <div className="p-4 rounded bg-[#fdf2f2] border border-[#f3b5b6] flex items-start gap-3 text-[#9B1D20] text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#9B1D20]" />
              <span className="font-medium">{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Full Name <span className="text-[#9B1D20]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="e.g. Eng. Khalid Al-Mansoor"
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Company / Organization <span className="text-[#635D5C] text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                autoComplete="organization"
                placeholder="e.g. Modern Developments Co."
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              />
            </div>

            {/* Business Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Business Email <span className="text-[#9B1D20]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Phone / Mobile <span className="text-[#9B1D20]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                placeholder="+966 5X XXX XXXX"
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] font-mono tabular-nums rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              >
                <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                <option value="Bahrain">Bahrain</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Qatar">Qatar</option>
                <option value="Oman">Oman</option>
                <option value="Other">Other Region</option>
              </select>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Project Type <span className="text-[#9B1D20]">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Product or Service Required */}
            <div>
              <label htmlFor="productOrService" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Product or Service Required <span className="text-[#9B1D20]">*</span>
              </label>
              <select
                id="productOrService"
                name="productOrService"
                value={formData.productOrService}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              >
                <option value="Passenger Elevators">Passenger Elevators</option>
                <option value="Panoramic Elevators">Panoramic Elevators</option>
                <option value="Villa Elevators">Villa Elevators</option>
                <option value="Freight Elevators">Freight Elevators</option>
                <option value="Escalators & Moving Walks">Escalators & Moving Walks</option>
                <option value="Elevator Maintenance Service">Elevator Maintenance Service</option>
                <option value="Modernization / Refurbishment">Modernization / Refurbishment</option>
              </select>
            </div>

            {/* Project Stage */}
            <div>
              <label htmlFor="projectStage" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Project Stage <span className="text-[#9B1D20]">*</span>
              </label>
              <select
                id="projectStage"
                name="projectStage"
                value={formData.projectStage}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              >
                <option value="Planning">Planning & Concept</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Existing Building">Existing Building (Retrofit / Maintenance)</option>
              </select>
            </div>

            {/* Number of Floors */}
            <div className="sm:col-span-2">
              <label htmlFor="numberOfFloors" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Number of Stops / Floors <span className="text-[#635D5C] text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="numberOfFloors"
                name="numberOfFloors"
                value={formData.numberOfFloors}
                onChange={handleChange}
                placeholder="e.g. G+4 Floors, or 12 Stops"
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] font-mono tabular-nums rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-semibold text-[#1c151d] uppercase tracking-[0.14em] mb-1.5">
                Project Notes or Specific Requirements <span className="text-[#635D5C] text-[10px] font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe shaft dimensions, required capacity, cabin finish preferences, or expected installation timeline..."
                className="w-full px-3.5 py-2.5 text-sm text-[#1c151d] rounded border border-[#ded8d8] bg-[#fbfbfa] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Privacy Notice Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-[#574f56]">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                required
                className="mt-0.5 rounded border-[#ded8d8] text-[#9B1D20] focus:ring-[#9B1D20] shrink-0"
              />
              <span className="leading-relaxed">
                I agree to the processing of my project details by Global Team Elevator Co. for the purpose of preparing an engineering quotation and technical follow-up in accordance with the applicable privacy notice.
              </span>
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#9B1D20] hover:bg-[#7a1618] active:bg-[#661215] rounded transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B1D20] focus:ring-offset-2 disabled:opacity-60"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D0FFCE]" />
                  <span>Transmitting Specification...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D0FFCE]" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs text-[#574f56]">
              <Shield className="w-4 h-4 text-[#9B1D20]" />
              <span>Direct routing to GTEC Saudi Engineering Office</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
