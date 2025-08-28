import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

interface HeaderProps {
  onAuthClick: () => void;
  onNavigate: (section: 'home' | 'findJob' | 'postJob' | 'profiles' | 'about' | 'help') => void;
  onProfileClick: () => void;
  profileImageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick, onNavigate, onProfileClick, profileImageUrl }) => {
  const { language, setLanguage, t } = useLocalization();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', label: t('nav.home') },
    { key: 'findJob', label: t('nav.findJob') },
    { key: 'postJob', label: t('nav.postJob') },
    { key: 'profiles', label: t('nav.profiles') },
    { key: 'about', label: t('nav.about') },
    { key: 'help', label: t('nav.help') },
  ];

  const handleNavClick = (key: string) => {
    onNavigate(key as any);
    setMenuOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="text-2xl font-bold text-slate-800">
              Shram<span className="text-blue-600">Sharthi</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <button key={link.key} onClick={() => handleNavClick(link.key)} className="nav-link text-slate-700 transition-colors duration-300">{link.label}</button>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className="flex items-center justify-center w-20 h-8 bg-slate-100 rounded-full transition-colors duration-300">
              <span className={`absolute left-1 transition-transform duration-300 ${language === 'en' ? 'translate-x-0' : 'translate-x-10'} w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold`}>{language === 'en' ? 'EN' : 'HI'}</span>
            </button>
          </div>
          <button onClick={onAuthClick} className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            {t('nav.login')}
          </button>
          <button onClick={onProfileClick} className="flex items-center space-x-2">
            <img src={profileImageUrl} alt="My Profile" className="w-10 h-10 rounded-full border-2 border-blue-600" />
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
           <button onClick={onProfileClick}>
            <img src={profileImageUrl} alt="My Profile" className="w-10 h-10 rounded-full border-2 border-blue-600" />
          </button>
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 animate-fade-in p-4 flex flex-col items-center space-y-4">
           {navLinks.map(link => (
            <button key={link.key} onClick={() => handleNavClick(link.key)} className="text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2">{link.label}</button>
          ))}
           <div className="relative my-2">
            <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className="flex items-center justify-center w-20 h-8 bg-slate-200 rounded-full transition-colors duration-300">
              <span className={`absolute left-1 transition-transform duration-300 ${language === 'en' ? 'translate-x-0' : 'translate-x-10'} w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold`}>{language === 'en' ? 'EN' : 'HI'}</span>
            </button>
          </div>
          <button onClick={() => { onAuthClick(); setMenuOpen(false); }} className="bg-blue-600 text-white w-full px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            {t('nav.login')}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;