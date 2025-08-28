import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { mockJobs, jobCategories } from '../constants/data';
import SectionWrapper from './SectionWrapper';
import { Job } from '../types';

const JobCard: React.FC<{ job: Job; isHighlighted: boolean }> = ({ job, isHighlighted }) => {
  const { language, t } = useLocalization();
  return (
    <div 
      id={`job-${job.id}`} 
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transform cursor-pointer animate-slide-up border-2 ${isHighlighted ? 'border-blue-500 ring-4 ring-blue-200' : 'border-transparent'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900">{job.title[language]}</h3>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">{job.type[language]}</span>
      </div>
      <p className="text-slate-500 mb-1">{job.company}</p>
      <p className="text-slate-500 mb-4">{job.location}</p>
      <p className="text-lg font-semibold text-slate-800 mb-4">{job.salary}</p>
      <p className="text-slate-600 mb-6 line-clamp-2">{job.description[language]}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
        {t('findJob.applyNow')}
      </button>
    </div>
  );
};

interface FindJobProps {
  highlightedJobId: number | null;
}

const FindJob: React.FC<FindJobProps> = ({ highlightedJobId }) => {
  const { t, language } = useLocalization();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    if (highlightedJobId) {
      const element = document.getElementById(`job-${highlightedJobId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [highlightedJobId]);

  const filteredJobs = mockJobs.filter(job => {
    const titleMatch = job.title[language].toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = locationTerm === '' || job.location.toLowerCase().includes(locationTerm.toLowerCase());
    const categoryMatch = category === 'All' || job.category === category;
    return titleMatch && locationMatch && categoryMatch;
  });

  return (
    <SectionWrapper id="findJob" title={t('findJob.title')} className="bg-slate-100">
      <div className="max-w-4xl mx-auto mb-10 animate-slide-up">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder={t('findJob.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="City or Location..."
            value={locationTerm}
            onChange={(e) => setLocationTerm(e.target.value)}
            className="flex-grow bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">{t('findJob.allCategories')}</option>
            {jobCategories.map(cat => (
              <option key={cat.en} value={cat.en}>{cat[language]}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} isHighlighted={job.id === highlightedJobId} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FindJob;