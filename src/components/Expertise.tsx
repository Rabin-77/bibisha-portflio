import { useState } from 'react';
import { 
  ChevronRight, 
  X,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINICAL_EXPERTISE, ExpertiseItem } from '../data/portfolioData';
import { DentalSpecialtyLogo } from './DentalSpecialtyLogos';

export function Expertise() {
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties (9)' },
    { id: 'restorative', label: 'Restorative & Endodontics' },
    { id: 'surgery', label: 'Oral Surgery & Implants' },
    { id: 'prosthetics', label: 'Prosthetics & Orthodontics' },
    { id: 'diagnostics', label: 'Radiology & Diagnostics' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? CLINICAL_EXPERTISE 
    : CLINICAL_EXPERTISE.filter(item => item.category === activeCategory);

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#1E50A2]">
              Scope of Practice
            </span>
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B192C] font-normal tracking-tight">
            Clinical Expertise
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-2xl">
            A comprehensive, patient-first clinical repertoire developed through rigorous academic training, intensive rotatory hospital postings, and ongoing practice.
          </p>
        </motion.div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-[#F0F5FA] text-slate-600 hover:text-[#0B192C] hover:bg-[#E0EBF7] border border-blue-100'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Clinical Areas Grid with Authentic Dental Specialty Logos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative bg-[#F8FAFC] rounded-2xl p-7 border border-slate-200/90 hover:border-[#1E50A2] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Bar: Authentic Clinical Specialty Logo & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-white to-[#F0F5FA] border border-blue-200/90 flex items-center justify-center text-[#1E50A2] group-hover:bg-[#1E50A2] group-hover:text-white transition-all duration-300 shadow-xs group-hover:shadow-md">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <DentalSpecialtyLogo id={item.id} className="w-7 h-7" />
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400 tracking-wider">
                        0{CLINICAL_EXPERTISE.findIndex(i => i.id === item.id) + 1}
                      </span>
                    </div>

                    {/* Title & Concise Summary */}
                    <h3 className="text-xl font-serif font-semibold text-[#0B192C] group-hover:text-[#1E50A2] transition-colors flex items-center gap-2">
                      <span>{item.title}</span>
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
                      {item.summary}
                    </p>
                  </div>

                  {/* Card Footer: Clinical Detail Trigger */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#1E50A2] font-semibold group-hover:text-[#0B192C] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E50A2]" />
                      <span>View clinical procedures</span>
                    </span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Feature Spotlight Banner with 4K CBCT Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 bg-gradient-to-r from-[#F0F5FA] to-white rounded-3xl border border-blue-200/70 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[280px]">
            <img
              src="/assets/dental_cbct_imaging_4k.jpg"
              alt="4K Digital Dental Radiology CBCT and Panoramic Suite"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/70 via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1E50A2]">
                Diagnostic Competency
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#0B192C]">
              Advanced Dental Radiology & 3D Imaging
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Proficient in operating modern CBCT and digital OPG units, ensuring precise diagnostic views for complex endodontic canal anatomy, nerve mapping, impactions, and pre-implant surgical evaluation.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[#0B192C] font-medium shadow-xs">
                CBCT 3D Volumes
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[#0B192C] font-medium shadow-xs">
                Digital OPG Panoramic
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[#0B192C] font-medium shadow-xs">
                RVG Digital Sensors
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[#0B192C] font-medium shadow-xs">
                DICOM Analysis
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Clinical Details Modal with Dental Specialty Logo */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl border border-blue-100 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0B192C] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F0F5FA] border border-blue-200 flex items-center justify-center text-[#1E50A2] shrink-0 shadow-xs">
                  <DentalSpecialtyLogo id={selectedItem.id} className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#1E50A2] font-semibold">
                    Clinical Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#0B192C] mt-0.5">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {selectedItem.summary}
                  </p>
                </div>
              </div>

              {/* Detailed Procedures */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B192C] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E50A2]" />
                  <span>Clinical Procedures & Competencies</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedItem.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-sm text-[#0B192C]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1E50A2] mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Armamentarium / Equipment */}
              <div className="pt-5 border-t border-slate-200">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-[#1E50A2]" />
                  <span>Clinical Armamentarium & Equipment</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.equipment.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-3 py-1 rounded-md text-xs bg-[#F0F5FA] border border-blue-100 text-[#0B192C] font-medium"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Close */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#0B192C] text-white hover:bg-[#1E50A2] transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
