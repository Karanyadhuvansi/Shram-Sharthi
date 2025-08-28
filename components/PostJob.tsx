import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { jobCategories } from '../constants/data';
import SectionWrapper from './SectionWrapper';

const PostJob: React.FC = () => {
  const { t, language } = useLocalization();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Job posted successfully! (This is a demo)');
    // In a real app, you would handle form submission
  };

  return (
    <SectionWrapper id="postJob" title={t('postJob.title')} subtitle={t('postJob.subtitle')} className="bg-slate-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl animate-slide-up">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="job-title" className="block text-slate-600 mb-2">{t('postJob.jobTitle')}</label>
              <input type="text" id="job-title" placeholder={t('postJob.jobTitlePlaceholder')} className="form-input" required />
            </div>
            <div>
              <label htmlFor="location" className="block text-slate-600 mb-2">{t('postJob.location')}</label>
              <input type="text" id="location" placeholder={t('postJob.locationPlaceholder')} className="form-input" required />
            </div>
            <div>
              <label htmlFor="category" className="block text-slate-600 mb-2">{t('postJob.category')}</label>
              <select id="category" className="form-input" required>
                {jobCategories.map(cat => (
                  <option key={cat.en} value={cat.en}>{cat[language]}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="salary" className="block text-slate-600 mb-2">{t('postJob.salary')}</label>
              <input type="text" id="salary" placeholder={t('postJob.salaryPlaceholder')} className="form-input" required />
            </div>
          </div>
          <div>
            <label htmlFor="skills" className="block text-slate-600 mb-2">{t('postJob.skills')}</label>
            <input type="text" id="skills" placeholder={t('postJob.skillsPlaceholder')} className="form-input" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-slate-600 mb-2">{t('postJob.jobDescription')}</label>
            <textarea id="description" rows={4} className="form-input" required></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              {t('postJob.postJobButton')}
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .form-input {
          width: 100%;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 0.375rem;
          padding: 0.75rem 1rem;
          color: #1e293b;
        }
        .form-input:focus {
          outline: none;
          box-shadow: 0 0 0 2px #2563eb;
          border-color: #2563eb;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default PostJob;