import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;