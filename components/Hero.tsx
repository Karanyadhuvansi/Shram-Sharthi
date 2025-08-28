import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { mockJobs } from '../constants/data';
import FeaturedJobCard from './FeaturedJobCard';

interface HeroProps {
    onNavigate: (section: 'findJob' | 'postJob') => void;
    onAuthClick: () => void;
    onJobClick: (jobId: number) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onAuthClick, onJobClick }) => {
  const { t } = useLocalization();
  const recentJobs = mockJobs.slice(0, 4); // Get first 4 jobs for the feature card

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.title1')}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {t('hero.title2')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button onClick={() => onNavigate('findJob')} className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('hero.findWork')}
          </button>
          <button onClick={() => onNavigate('postJob')} className="w-full sm:w-auto bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('hero.hireWorkers')}
          </button>
        </div>
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <FeaturedJobCard jobs={recentJobs} onJobClick={onJobClick} />
        </div>
      </div>
    </section>
  );
};

export default Hero;