import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FindJob from './components/FindJob';
import PostJob from './components/PostJob';
import WorkerProfiles from './components/WorkerProfiles';
import AboutUs from './components/AboutUs';
import HelpSupport from './components/HelpSupport';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
  const [highlightedJobId, setHighlightedJobId] = useState<number | null>(null);

  const sections = {
    home: useRef<HTMLDivElement>(null),
    findJob: useRef<HTMLDivElement>(null),
    postJob: useRef<HTMLDivElement>(null),
    profiles: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    help: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProfileUpdate = (newImageUrl: string) => {
    setProfileImageUrl(newImageUrl);
    setProfileModalOpen(false);
  };

  const handleFeaturedJobClick = (jobId: number) => {
    setHighlightedJobId(jobId);
    scrollToSection('findJob');
     // Reset after a delay so it can be re-triggered
    setTimeout(() => setHighlightedJobId(null), 3000);
  };

  return (
    <div className="bg-slate-50 font-sans">
      <Header 
        onAuthClick={() => setAuthModalOpen(true)}
        onNavigate={scrollToSection}
        onProfileClick={() => setProfileModalOpen(true)}
        profileImageUrl={profileImageUrl}
      />
      <main>
        <div ref={sections.home}>
          <Hero onNavigate={scrollToSection} onAuthClick={() => setAuthModalOpen(true)} onJobClick={handleFeaturedJobClick} />
        </div>
        <div ref={sections.findJob}>
          <FindJob highlightedJobId={highlightedJobId} />
        </div>
        <div ref={sections.postJob}>
          <PostJob />
        </div>
        <div ref={sections.profiles}>
          <WorkerProfiles />
        </div>
        <div ref={sections.about}>
          <AboutUs />
        </div>
        <div ref={sections.help}>
          <HelpSupport onContactClick={() => setContactModalOpen(true)} />
        </div>
      </main>
      <Footer />
      {isAuthModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
      {isProfileModalOpen && <ProfileModal onClose={() => setProfileModalOpen(false)} onSave={handleProfileUpdate} currentImage={profileImageUrl} />}
      {isContactModalOpen && <ContactModal onClose={() => setContactModalOpen(false)} />}
    </div>
  );
};

export default App;