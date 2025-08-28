import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import CloseIcon from './icons/CloseIcon';

interface AuthModalProps {
  onClose: () => void;
}

type AuthStep = 'initial' | 'otp';
type AuthTab = 'login' | 'register';

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const { t } = useLocalization();
  const [step, setStep] = useState<AuthStep>('initial');
  const [tab, setTab] = useState<AuthTab>('login');

  const handleGetOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, verify OTP and log in/register
    alert('Successfully verified!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md m-4 transform transition-all duration-300 animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{t('auth.welcome')}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800">
            <CloseIcon />
          </button>
        </div>

        {step === 'initial' && (
          <div>
            <div className="flex border-b border-slate-200 mb-6">
              <button
                onClick={() => setTab('login')}
                className={`flex-1 py-2 font-semibold transition-colors duration-300 ${tab === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}
              >
                {t('auth.login')}
              </button>
              <button
                onClick={() => setTab('register')}
                className={`flex-1 py-2 font-semibold transition-colors duration-300 ${tab === 'register' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}
              >
                {t('auth.register')}
              </button>
            </div>
            <form onSubmit={handleGetOtp}>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-slate-600 mb-2">{t('auth.mobile')}</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="9876543210"
                  className="w-full bg-slate-100 border border-slate-300 rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
                {t('auth.getOTP')}
              </button>
            </form>
          </div>
        )}

        {step === 'otp' && (
          <div className="animate-fade-in">
             <h3 className="text-xl font-bold text-slate-800 mb-4">{t('auth.otp')}</h3>
            <form onSubmit={handleVerify}>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-slate-600 mb-2">{t('auth.otp')}</label>
                <input
                  type="text"
                  id="otp"
                  maxLength={6}
                  placeholder="123456"
                  className="w-full bg-slate-100 border border-slate-300 rounded-md px-3 py-2 text-slate-900 text-center tracking-[1em] text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
                {t('auth.verify')}
              </button>
              <button onClick={() => setStep('initial')} className="w-full mt-2 text-slate-500 hover:text-blue-600">
                Back
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;