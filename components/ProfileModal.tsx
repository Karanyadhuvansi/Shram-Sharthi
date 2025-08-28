import React, { useState, useRef } from 'react';
import ReactCrop, { type Crop, centerCrop, makeAspectCrop } from 'react-image-crop';

import CloseIcon from './icons/CloseIcon';

interface ProfileModalProps {
  onClose: () => void;
  onSave: (newImageUrl: string) => void;
  currentImage: string;
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose, onSave, currentImage }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop>();
  const [aspect] = useState<number>(1);
  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedFileName, setSelectedFileName] = useState('');


  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      setSelectedFileName(e.target.files[0].name);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  }
  
  const handleSaveCrop = () => {
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;

    if (!imgSrc) {
        alert('Profile updated! (No new image selected)');
        onClose();
        return;
    }

    if (!image || !canvas || !completedCrop) {
      alert('Please complete the crop selection before saving.');
      return;
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    
    const offscreen = new OffscreenCanvas(completedCrop.width * scaleX, completedCrop.height * scaleY);
    const ctx = offscreen.getContext('2d');
    if (!ctx) {
        throw new Error('No 2d context');
    }

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    
    // Converting to blob first then to data url is better for performance
    offscreen.convertToBlob({type: 'image/png'}).then(blob => {
        const reader = new FileReader();
        reader.onload = () => {
            onSave(reader.result as string);
            alert('Profile updated!');
        };
        reader.readAsDataURL(blob);
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg m-4 transform transition-all duration-300 animate-slide-up flex flex-col max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200 flex-shrink-0">
          <h2 className="text-2xl font-bold text-slate-800">User Profile</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800">
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6">
            <div className="text-center mb-4">
                <img src="/shram-sharthi-logo.png" alt="Shram Sharthi Logo" className="h-16 mx-auto" />
            </div>
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-slate-600 mb-2">Full Name</label>
                    <input type="text" id="name" className="form-input" defaultValue="Ramesh Kumar" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-slate-600 mb-2">Email</label>
                    <input type="email" id="email" className="form-input" defaultValue="ramesh.k@example.com" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-slate-600 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="form-input" defaultValue="+91 9876543210" />
                </div>
                <div>
                    <label htmlFor="bio" className="block text-slate-600 mb-2">Bio / About Yourself</label>
                    <textarea id="bio" rows={3} className="form-input" placeholder="Tell us about your skills and experience..."></textarea>
                </div>

                <div>
                    <label className="block text-slate-600 mb-2">Profile Photo</label>
                    <div className="flex items-center">
                        <label htmlFor="profile-photo-upload" className="cursor-pointer bg-white border border-slate-300 rounded-md px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors duration-200">
                            Choose File
                        </label>
                        <input id="profile-photo-upload" type="file" accept="image/*" onChange={onSelectFile} className="hidden"/>
                        <span className="ml-4 text-slate-500 truncate">{selectedFileName || 'No file chosen'}</span>
                    </div>
                </div>

                {imgSrc && (
                    <div className="flex justify-center bg-slate-100 p-4 rounded-md">
                        <ReactCrop
                            crop={crop}
                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                            onComplete={(c) => setCompletedCrop(c)}
                            aspect={aspect}
                            className="max-w-full"
                        >
                            <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} style={{ maxHeight: '300px' }} />
                        </ReactCrop>
                    </div>
                )}
            </div>
        </div>
        
        {/* Hidden canvas for processing cropped image */}
        <canvas ref={previewCanvasRef} style={{ display: 'none' }} />

        {/* Footer with action buttons */}
        <div className="flex justify-end gap-4 p-6 border-t border-slate-200 bg-slate-50 rounded-b-lg flex-shrink-0">
            <button onClick={onClose} className="bg-slate-200 text-slate-800 px-6 py-2 rounded-md font-semibold hover:bg-slate-300 transition-colors">Cancel</button>
            <button onClick={handleSaveCrop} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">Update Profile</button>
        </div>
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
    </div>
  );
};

export default ProfileModal;