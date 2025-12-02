"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils";
import { ONBOARDING_STEPS } from "./Constants/onBoardingData";
import { overlayVariants, modalVariants, contentVariants } from "./Constants/onBoardingAnimations";

interface OnboardingModalProps {
  onClose: () => void;
}

const STORAGE_KEY = "hasSeenOnboarding";

const OnBoardingModal = ({ onClose }: OnboardingModalProps) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem(STORAGE_KEY);
    }
    return false;
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentData = ONBOARDING_STEPS[currentStep];
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;
  const totalSteps = ONBOARDING_STEPS.length;

  const handleComplete = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
    onClose();
  };

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setDirection(stepIndex > currentStep ? 1 : -1);
    setCurrentStep(stepIndex);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="서비스 온보딩"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center",
            "bg-background-primary",
            "tablet:bg-black/60 tablet:backdrop-blur-sm tablet:px-10",
            "pc:px-10",
          )}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "w-full h-dvh flex flex-col bg-background-primary",
              "tablet:h-[500px] tablet:max-w-[768px] tablet:rounded-2xl tablet:shadow-2xl",
              "pc:h-[600px] pc:max-w-[1180px]",
            )}
          >
            <div className={cn("flex-1 flex flex-col overflow-hidden", "tablet:flex-row tablet:p-8", "pc:p-10")}>
              <div
                className={cn(
                  "relative w-full h-[45vh] min-h-[350px] max-h-[400px] shrink-0 overflow-hidden",
                  "tablet:order-2 tablet:flex-1 tablet:h-[300px] tablet:min-h-0 tablet:max-h-none tablet:ml-8 tablet:rounded-2xl",
                  "pc:h-[400px] pc:ml-10",
                )}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    {currentData.imageSrc ? (
                      <Image
                        src={currentData.imageSrc}
                        alt={currentData.title}
                        fill
                        className={cn("object-contain", "bg-background-secondary tablet:rounded-2xl")}
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-background-secondary text-text-disabled">
                        이미지 준비중
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div
                className={cn(
                  "flex flex-col justify-center px-6 py-4 my-auto overflow-hidden",
                  "tablet:order-1 tablet:flex-1 tablet:px-0 tablet:py-4 tablet:justify-center",
                  "pc:py-6",
                )}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <span
                      className={cn(
                        "block mobile:text-md-semibold mobile:hidden text-center text-brand-primary mb-3",
                        "tablet:text-lg-semibold tablet:mb-4 tablet:text-left",
                        "pc:text-xl-semibold",
                      )}
                    >
                      Step {currentStep + 1} / {totalSteps}
                    </span>
                    <h2
                      className={cn(
                        "mobile:text-2xl-bold text-text-primary text-center whitespace-pre-line",
                        "tablet:text-2xl-bold tablet:whitespace-pre-line tablet:text-left",
                        "pc:text-3xl-bold",
                      )}
                    >
                      {currentData.title}
                    </h2>
                    <p
                      className={cn(
                        "mobile:text-md-regular text-text-secondary mt-4 text-center whitespace-normal-line",
                        "tablet:text-lg-regular tablet:mt-6 tablet:whitespace-pre-line tablet:text-left",
                        "pc:text-xl-regular pc:mt-8",
                      )}
                    >
                      {currentData.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div
              className={cn(
                "shrink-0 flex items-center justify-between px-6 py-4 pb-safe",
                "tablet:px-8 tablet:py-6",
                "pc:px-10 pc:py-8",
              )}
            >
              <button
                type="button"
                onClick={handleComplete}
                className={cn(
                  "text-md-medium text-text-secondary hover:text-text-primary transition-colors",
                  "min-w-[60px]",
                  "pc:text-lg-medium",
                )}
              >
                건너뛰기
              </button>
              <nav aria-label="온보딩 단계" className="flex gap-2 items-center justify-center">
                {ONBOARDING_STEPS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleStepClick(index)}
                    aria-label={`${index + 1}단계로 이동`}
                    aria-current={index === currentStep ? "step" : undefined}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      index === currentStep
                        ? "w-8 bg-brand-primary"
                        : "w-2 bg-interaction-inactive hover:bg-interaction-hover",
                    )}
                  />
                ))}
              </nav>
              <button
                type="button"
                onClick={handleNext}
                className={cn(
                  "text-md-bold text-brand-primary hover:text-brand-primary/80 transition-colors",
                  "min-w-[60px] text-right",
                  "pc:text-lg-bold",
                )}
              >
                {isLastStep ? "시작하기" : "다음"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnBoardingModal;
