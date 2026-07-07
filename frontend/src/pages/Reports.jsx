import { useState } from "react";

import Step1Personal from "../components/onboarding/Step1Personal";
import Step2Medical from "../components/onboarding/Step2Medical";
import Step3Lifestyle from "../components/onboarding/Step3Lifestyle";
import Step4Goals from "../components/onboarding/Step4Goals";
import ProgressBar from "../components/onboarding/ProgressBar";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50">

      <ProgressBar step={step} totalSteps={4} />

      {step === 1 && (
        <Step1Personal
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <Step2Medical
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <Step3Lifestyle
          next={() => setStep(4)}
          back={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <Step4Goals
          back={() => setStep(3)}
        />
      )}

    </div>
  );
}