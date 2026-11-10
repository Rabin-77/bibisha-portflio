import { CheckCircle2, Award } from 'lucide-react';

interface DoctorPortraitProps {
  className?: string;
  size?: 'hero' | 'about' | 'compact';
}

// Official verified photo extracted directly from Dr. D. Bibisha's resume
const PORTRAIT_URL = '/assets/dr_bibisha_portrait.jpg';

export function DoctorPortrait({ className = '' }: DoctorPortraitProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Decorative Luxury Background Glow in Sapphire Blue */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#1E50A2]/25 via-[#2563EB]/15 to-[#38BDF8]/25 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Main Frame with White & Sapphire Accents */}
      <div className="relative rounded-[2.25rem] overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F0F5FA] border-2 border-[#1E50A2]/30 shadow-[0_25px_60px_rgba(11,25,44,0.15)]">
        {/* Official Portrait of Dr. D. Bibisha from Resume */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#1E50A2]/5">
          <img
            src={PORTRAIT_URL}
            alt="Dr. D. Bibisha – Dental Surgeon BDS"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Elegant Luxury Scrim & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/20 to-transparent pointer-events-none" />
          
          {/* Top Verified Medical Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200/80 shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E50A2]" />
            <span className="text-[11px] font-bold text-[#0B192C] uppercase tracking-wider">
              Verified Dental Surgeon
            </span>
          </div>

          {/* Top Right Distinction Badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200/80 shadow-md">
            <Award className="w-3.5 h-3.5 text-[#1E50A2]" />
            <span className="text-[11px] font-bold text-[#0B192C] uppercase tracking-wider">
              BDS · MGR Univ
            </span>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#38BDF8]">
                Dental Surgeon | BDS
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[11px] text-slate-300">
                Rajas Dental College
              </span>
            </div>
            <p className="text-2xl font-serif font-bold tracking-tight text-white">
              Dr. D. Bibisha
            </p>
            <p className="text-xs text-slate-200 mt-1 font-light">
              Committed to clinical precision and compassionate patient care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
