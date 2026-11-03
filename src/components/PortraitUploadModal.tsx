import { useState } from 'react';
import { Camera, RefreshCw, X, Upload, Check } from 'lucide-react';

interface PortraitUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onSavePhoto: (photoUrl: string | null) => void;
}

export function PortraitUploadModal({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto
}: PortraitUploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(currentPhoto);
  const [urlInput, setUrlInput] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setSelectedFile(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      setSelectedFile(urlInput.trim());
    }
  };

  const handleSave = () => {
    onSavePhoto(selectedFile);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUrlInput('');
    onSavePhoto(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0B192C] hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#1E50A2] font-semibold">
            Official Portrait
          </span>
          <h3 className="text-2xl font-serif text-[#0B192C] mt-1">
            Replace Doctor Portrait
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Upload Dr. D. Bibisha's professional portrait photograph. The image is saved locally in your browser.
          </p>
        </div>

        {/* Preview Frame */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-48 rounded-2xl border-2 border-dashed border-[#1E50A2]/40 overflow-hidden bg-[#F0F5FA] flex items-center justify-center relative shadow-inner">
            {selectedFile ? (
              <img 
                src={selectedFile} 
                alt="Portrait Preview" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="text-center p-3">
                <Camera className="w-8 h-8 text-[#1E50A2] mx-auto mb-2 opacity-70" />
                <span className="text-xs text-slate-500 block">Editorial Monogram Active</span>
              </div>
            )}
          </div>
        </div>

        {/* Upload Options */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-semibold text-slate-600 mb-2 tracking-wider">
              Upload from Device (PNG / JPG)
            </label>
            <label className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-[#F0F5FA] hover:border-[#1E50A2]/50 cursor-pointer text-sm font-medium text-[#0B192C] transition-colors">
              <Upload className="w-4 h-4 text-[#1E50A2]" />
              <span>Choose Photo File</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </label>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-xs text-slate-400 uppercase tracking-wider">or provide image URL</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="flex gap-2">
            <input 
              type="url" 
              placeholder="https://example.com/dr-bibisha-portrait.jpg"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#1E50A2] text-[#0B192C]"
            />
            <button
              onClick={handleApplyUrl}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-[#F0F5FA] text-[#0B192C] hover:bg-[#1E50A2] hover:text-white transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-600 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Placeholder</span>
          </button>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 hover:text-[#0B192C] hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 text-xs font-medium rounded-lg bg-[#0B192C] text-white hover:bg-[#1E50A2] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Portrait</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
