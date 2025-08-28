import React from 'react';
import CloseIcon from './icons/CloseIcon';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md m-4 transform transition-all duration-300 animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800">
            <CloseIcon />
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-slate-600">
            For immediate assistance, please reach out to us via WhatsApp or Email.
          </p>
          <a
            href="https://wa.me/919310532919"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-300"
          >
            <span className="font-semibold">WhatsApp 1:</span>
            <span className="ml-2">+91 9310532919</span>
          </a>
           <a
            href="https://wa.me/917982771823"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-300"
          >
            <span className="font-semibold">WhatsApp 2:</span>
            <span className="ml-2">+91 79827 71823</span>
          </a>
          <a
            href="mailto:karanyadhuvansi005@gmail.com"
            className="flex items-center w-full p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-300"
          >
            <span className="font-semibold">Email:</span>
            <span className="ml-2">karanyadhuvansi005@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;