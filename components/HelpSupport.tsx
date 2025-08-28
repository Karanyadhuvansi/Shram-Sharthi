import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { mockFaqs } from '../constants/data';
import SectionWrapper from './SectionWrapper';
import { FAQItem } from '../types';

const FaqAccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  const { language } = useLocalization();
  return (
    <div className="border-b border-slate-200 animate-slide-up">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-2">
        <span className="text-lg font-medium text-slate-800">{item.question[language]}</span>
        <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-slate-600 pb-5 px-2">
          {item.answer[language]}
        </p>
      </div>
    </div>
  );
};

interface HelpSupportProps {
  onContactClick: () => void;
}

const HelpSupport: React.FC<HelpSupportProps> = ({ onContactClick }) => {
  const { t } = useLocalization();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <SectionWrapper id="help" title={t('help.title')} className="bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">{t('help.subtitle')}</h3>
          <div>
            {mockFaqs.map(item => (
              <FaqAccordionItem 
                key={item.id} 
                item={item} 
                isOpen={openFaq === item.id}
                onClick={() => toggleFaq(item.id)}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-1 bg-slate-100 rounded-lg p-8 text-center shadow-lg animate-slide-up">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('help.chat')}</h3>
            <p className="text-slate-600 mb-6">{t('help.chatDescription')}</p>
            <button onClick={onContactClick} className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                {t('help.startChat')}
            </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HelpSupport;