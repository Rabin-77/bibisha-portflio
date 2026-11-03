import { GraduationCap, Landmark, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_INFO } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#1E50A2]">
              Scholastic Foundation
            </span>
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B192C] font-normal tracking-tight">
            Academic Background
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-xl">
            A comprehensive dental medical education accredited under the Dental Council of India and The Tamil Nadu Dr. M.G.R. Medical University.
          </p>
        </motion.div>

        {/* Academic Profile Hero Card with Zoom-in Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-white to-[#F0F5FA] rounded-3xl border border-blue-200/80 shadow-lg p-8 sm:p-12 relative overflow-hidden group"
        >
          
          {/* Subtle Watermark Decorative Crest */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none select-none text-[#1E50A2] transition-transform duration-700 group-hover:scale-105">
            <GraduationCap className="w-64 h-64" />
          </div>

          <div className="relative z-10">
            {/* Top Badge & Duration */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#1E50A2] shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#1E50A2] block">
                    Medical Degree Conferred
                  </span>
                  <span className="text-xs font-mono text-slate-500">Official Medical Council Registration Eligible</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-semibold text-[#0B192C] shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-[#1E50A2]" />
                <span>{EDUCATION_INFO.duration}</span>
              </div>
            </div>

            {/* Degree Title & Affiliated University */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0B192C] tracking-tight">
              {EDUCATION_INFO.degree}
            </h3>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-base font-serif text-[#0B192C]">
                <Landmark className="w-4 h-4 text-[#1E50A2] shrink-0" />
                <span className="font-semibold">{EDUCATION_INFO.institution}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Award className="w-4 h-4 text-[#1E50A2] shrink-0" />
                <span>Affiliated to {EDUCATION_INFO.university}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#1E50A2] shrink-0" />
                <span>{EDUCATION_INFO.location}</span>
              </div>
            </div>

            {/* Curriculum & Clinical Milestones */}
            <div className="mt-8 pt-6 border-t border-blue-100">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B192C] mb-4">
                Curricular Focus & Clinical Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {EDUCATION_INFO.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#1E50A2] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Departmental Disciplines Completed */}
            <div className="mt-8 pt-6 border-t border-blue-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-2">Core Disciplines:</span>
              {[
                "Oral Medicine & Radiology",
                "Oral & Maxillofacial Surgery",
                "Conservative Dentistry & Endodontics",
                "Prosthodontics",
                "Periodontics",
                "Pediatric Dentistry",
                "Orthodontics",
                "Public Health Dentistry",
                "Oral Pathology"
              ].map((dept, dIdx) => (
                <span 
                  key={dIdx} 
                  className="px-2.5 py-1 text-[11px] rounded-md bg-white border border-blue-100 text-[#0B192C] font-medium shadow-xs"
                >
                  {dept}
                </span>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
