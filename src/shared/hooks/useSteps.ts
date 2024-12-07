import { stepAtom, totalStepsAtom } from "@/shared/atoms";
import { useAtom } from "jotai";

interface IUseStep {
  totalSteps: number;
  cb?: () => void;
}

export const useStep = ({ totalSteps, cb }: IUseStep) => {
  const [currentStep, setCurrentStep] = useAtom(stepAtom);
  const [_, setTotalSteps] = useAtom(totalStepsAtom);
  setTotalSteps(totalSteps);

  const nextStep = () => {
    if (currentStep === totalSteps) return null;
    setCurrentStep(currentStep + 1);
    cb?.();
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    cb?.();
  };

  return { currentStep, nextStep, prevStep };
};
