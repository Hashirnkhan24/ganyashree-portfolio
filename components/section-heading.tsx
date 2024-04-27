import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold text-[#0f0f2f] dark:text-white capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
