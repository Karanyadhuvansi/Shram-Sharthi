import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import SectionWrapper from './SectionWrapper';

const AboutUs: React.FC = () => {
  const { t } = useLocalization();

  return (
    <SectionWrapper id="about" title={t('about.title')} className="bg-slate-100">
      <div className="max-w-4xl mx-auto text-center animate-slide-up">
        <div className="relative p-8 bg-white rounded-lg shadow-xl">
           <div className="absolute top-0 left-0 -mt-4 -ml-4 w-16 h-16 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
           <div className="absolute bottom-0 right-0 mt-4 mr-4 w-16 h-16 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t('about.mission')}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;