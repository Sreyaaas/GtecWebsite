import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, RotateCcw, Building2, Wrench, Layers, Clock } from 'lucide-react';

export interface EnquirySelections {
  projectType: string;
  requirement: string;
  elevatorCategory: string;
  projectStage: string;
}

interface EnquiryAssistantProps {
  onComplete?: (selections: EnquirySelections) => void;
  className?: string;
  compact?: boolean;
}

export const EnquiryAssistant: React.FC<EnquiryAssistantProps> = ({
  onComplete,
  className = '',
  compact = false,
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [selections, setSelections] = useState<EnquirySelections>({
    projectType: '',
    requirement: '',
    elevatorCategory: '',
    projectStage: '',
  });

  const steps = [
    {
      id: 1,
      title: 'Project Type',
      icon: Building2,
      subtitle: 'What type of property is this for?',
      options: ['Residential', 'Commercial', 'Industrial', 'Hospitality', 'Other'],
      key: 'projectType' as keyof EnquirySelections,
    },
    {
      id: 2,
      title: 'Requirement',
      icon: Wrench,
      subtitle: 'What service or solution are you looking for?',
      options: ['New Installation', 'Product Enquiry', 'Maintenance', 'Other'],
      key: 'requirement' as keyof EnquirySelections,
    },
    {
      id: 3,
      title: 'Elevator Category',
      icon: Layers,
      subtitle: 'Which category best matches your need?',
      options: ['Passenger', 'Panoramic', 'Villa', 'Freight', 'Escalator', 'Not Sure'],
      key: 'elevatorCategory' as keyof EnquirySelections,
    },
    {
      id: 4,
      title: 'Project Stage',
      icon: Clock,
      subtitle: 'What is the current status of your project?',
      options: ['Planning', 'Under Construction', 'Existing Building'],
      key: 'projectStage' as keyof EnquirySelections,
    },
  ];

  const currentStepData = steps[step - 1];

  const handleSelectOption = (value: string) => {
    const updated = { ...selections, [currentStepData.key]: value };
    setSelections(updated);

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      // Completed all 4 steps
      if (onComplete) {
        onComplete(updated);
      } else {
        // Carry selections to the Contact Page via URL params / state
        const queryParams = new URLSearchParams({
          projectType: updated.projectType,
          requirement: updated.requirement,
          elevatorCategory: updated.elevatorCategory,
          projectStage: updated.projectStage,
        }).toString();
        navigate(`/contact?${queryParams}`, { state: { prefilled: updated } });
      }
    }
  };

  const handleReset = () => {
    setSelections({
      projectType: '',
      requirement: '',
      elevatorCategory: '',
      projectStage: '',
    });
    setStep(1);
  };

  return (
    <div
      className={`bg-white border border-[#ded8d8] shadow-sm rounded-lg overflow-hidden transition-all ${className}`}
      id="enquiry-assistant"
    >
      {/* Top Header - Midnight Violet Accent */}
      <div className="bg-[#201721] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#382739]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#CBEFB6]/15 border border-[#CBEFB6]/30 flex items-center justify-center shrink-0">
            <currentStepData.icon className="w-4 h-4 text-[#CBEFB6]" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#CBEFB6] font-semibold block">
              Interactive Enquiry Selector
            </span>
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              Step {step} of 4: {currentStepData.title}
            </h3>
          </div>
        </div>

        {/* Step Indicator Bubbles */}
        <div className="flex items-center gap-1.5">
          {steps.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                if (s.id <= step) setStep(s.id);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                s.id === step
                  ? 'bg-[#CBEFB6] ring-2 ring-[#CBEFB6]/40'
                  : s.id < step
                  ? 'bg-[#D0FFCE]/80'
                  : 'bg-white/20'
              }`}
              title={`Step ${s.id}: ${s.title}`}
              aria-label={`Step ${s.id}: ${s.title}`}
            />
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 sm:p-7">
        <p className="text-sm text-[#574f56] mb-5 font-medium">
          {currentStepData.subtitle}
        </p>

        {/* Options Grid */}
        <div className={`grid gap-2.5 ${compact ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {currentStepData.options.map((opt) => {
            const isSelected = selections[currentStepData.key] === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelectOption(opt)}
                className={`flex items-center justify-between p-3.5 sm:p-4 rounded border text-left text-sm font-medium transition-all group ${
                  isSelected
                    ? 'border-[#9B1D20] bg-[#fdf2f2] text-[#9B1D20] font-semibold ring-1 ring-[#9B1D20]'
                    : 'border-[#ded8d8] bg-[#fbfbfa] hover:bg-[#fdf2f2]/40 hover:border-[#9B1D20]/50 text-[#1c151d]'
                }`}
              >
                <span>{opt}</span>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-[#9B1D20] border-[#9B1D20] text-white'
                      : 'border-[#dcd7d6] bg-white group-hover:border-[#9B1D20]'
                  }`}
                >
                  {isSelected ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : (
                    <ArrowRight className="w-3 h-3 text-[#635D5C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Selections Summary Footer */}
        <div className="mt-6 pt-5 border-t border-[#ded8d8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#574f56]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#1c151d]">Selected:</span>
            {selections.projectType && (
              <span className="bg-[#CBEFB6]/20 text-[#1d4013] border border-[#b8e59e] px-2.5 py-0.5 rounded font-medium">
                {selections.projectType}
              </span>
            )}
            {selections.requirement && (
              <span className="bg-[#CBEFB6]/20 text-[#1d4013] border border-[#b8e59e] px-2.5 py-0.5 rounded font-medium">
                {selections.requirement}
              </span>
            )}
            {selections.elevatorCategory && (
              <span className="bg-[#CBEFB6]/20 text-[#1d4013] border border-[#b8e59e] px-2.5 py-0.5 rounded font-medium">
                {selections.elevatorCategory}
              </span>
            )}
            {!selections.projectType && (
              <span className="text-[#635D5C] italic">Make your selection to proceed</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="text-xs text-[#9B1D20] font-medium hover:underline flex items-center gap-1"
              >
                Back
              </button>
            )}
            {(selections.projectType || selections.requirement) && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#635D5C] hover:text-[#1c151d] flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
