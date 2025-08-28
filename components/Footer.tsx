import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

const SocialIcon: React.FC<{ href: string, path: string }> = ({ href, path }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
        </svg>
    </a>
);


const Footer: React.FC = () => {
    const { t } = useLocalization();

    return (
        <footer className="bg-slate-100 border-t border-slate-200 py-8">
            <div className="container mx-auto px-4 text-center text-slate-500">
                <div className="flex justify-center items-center mb-4">
                     <div className="text-xl font-bold text-slate-800">
                        Shram<span className="text-blue-600">Sharthi</span>
                    </div>
                </div>
                <p className="mb-4">{t('footer.copyright')}</p>
                 {/* Social media icons would go here if needed */}
            </div>
        </footer>
    );
};

export default Footer;