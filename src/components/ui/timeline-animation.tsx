"use client";
import { motion } from "framer-motion";
import { forwardRef, ElementType } from "react";

interface TimelineContentProps {
  as?: ElementType | string;
  children: React.ReactNode;
  animationNum?: number;
  timelineRef?: any;
  customVariants?: any;
  className?: string;
  [key: string]: any;
}

export const TimelineContent = forwardRef<any, TimelineContentProps>(
  (
    {
      as = "div",
      children,
      animationNum,
      timelineRef,
      customVariants,
      className,
      ...props
    },
    ref
  ) => {
    const MotionComponent = (motion as any)[as] || motion.div;
    return (
      <MotionComponent
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={animationNum}
        variants={customVariants}
        className={className}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

TimelineContent.displayName = "TimelineContent";
