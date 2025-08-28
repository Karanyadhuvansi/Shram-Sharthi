import React, { useState, useEffect } from 'react';
import { Job } from '../types';
import { useLocalization } from '../hooks/useLocalization';

interface FeaturedJobCardProps {
  jobs: Job[];
  onJobClick: (jobId: number) => void;
}

const FeaturedJobCard: React.FC<FeaturedJobCardProps> = ({ jobs, onJobClick }) => {
  const { language } = useLocalization();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (jobs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % jobs.length);
    }, 5000); // Change job every 5 seconds

    return () => clearInterval(interval);
  }, [jobs.length]);

  if (jobs.length === 0) {
    return null;
  }

  const currentJob = jobs[currentIndex];

  return (
    <div
      key={currentIndex} // Re-triggers animation on change
      onClick={() => onJobClick(currentJob.id)}
      className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-200 cursor-pointer transition-shadow duration-300 hover:shadow-xl animate-fade-in-up"
    >
      <div className="text-left">
        <p className="text-sm font-semibold text-blue-600 mb-1">Featured Opportunity</p>
        <h3 className="text-lg font-bold text-slate-800 truncate">{currentJob.title[language]}</h3>
        <p className="text-sm text-slate-500">
          {currentJob.company} &bull; {currentJob.location}
        </p>
      </div>
    </div>
  );
};

export default FeaturedJobCard;