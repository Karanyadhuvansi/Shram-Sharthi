import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { mockProfiles } from '../constants/data';
import SectionWrapper from './SectionWrapper';
import { Profile } from '../types';

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  const { language, t } = useLocalization();
  return (
    <div className="bg-white rounded-lg text-center p-6 shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-2 transform cursor-pointer animate-slide-up">
      <img src={profile.imageUrl} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-200 object-cover" />
      <h3 className="text-xl font-bold text-slate-900">{profile.name}</h3>
      <p className="text-blue-600 font-semibold mb-2">{profile.skill[language]}</p>
      <p className="text-slate-500 mb-4">{profile.location}</p>
      <div className="flex items-center justify-center mb-4">
        <span className="text-yellow-400 font-bold">{profile.rating.toFixed(1)}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <button className="w-full bg-slate-100 text-slate-800 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
        {t('profiles.viewProfile')}
      </button>
    </div>
  );
};

const WorkerProfiles: React.FC = () => {
  const { t, language } = useLocalization();
  const [skillSearch, setSkillSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');

  const uniqueSkills = [...new Set(mockProfiles.map(p => p.skill.en))].map(skillEn => {
    const profile = mockProfiles.find(p => p.skill.en === skillEn);
    return profile ? profile.skill : { en: skillEn, hi: skillEn };
  });

  const filteredProfiles = mockProfiles.filter(profile => {
    const skillMatch = skillSearch === '' || profile.skill.en === skillSearch;
    const locationMatch = locationSearch === '' || profile.location.toLowerCase().includes(locationSearch.toLowerCase());
    return skillMatch && locationMatch;
  });

  return (
    <SectionWrapper id="profiles" title={t('profiles.title')} className="bg-white">
      <div className="max-w-2xl mx-auto mb-10 animate-slide-up">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={skillSearch}
            onChange={(e) => setSkillSearch(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Skills</option>
            {uniqueSkills.map(skill => (
              <option key={skill.en} value={skill.en}>{skill[language]}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search by City / Location..."
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WorkerProfiles;