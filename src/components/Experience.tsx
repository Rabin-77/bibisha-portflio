import { Briefcase, Calendar, Check, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFESSIONAL_EXPERIENCE } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#F8FAFC] relative border-t border-slate-200">
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
              Career Milestones
            </span>
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B192C] font-normal tracking-tight">
            Professional Journey
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-xl">
            A continuum of dedicated clinical practice across high-volume outpatient centers and specialized implantology facilities.
          </p>
        </motion.div>

        {/* Sophisticated Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Vertical Spine in Sapphire Blue with Height Animation */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1E50A2] via-blue-200 to-[#1E50A2]/30 -translate-x-1/2" 
          />

          <div className="space-y-12 sm:space-y-16">
            {PROFESSIONAL_EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Marker with Pulse */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.4 }}
                      className="w-8 h-8 rounded-full bg-white border-2 border-[#1E50A2] flex items-center justify-center shadow-md"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? 'bg-[#1E50A2] animate-pulse' : 'bg-[#0B192C]'}`} />
                    </motion.div>
                  </div>

                  {/* Spacer for 2-column layout on Desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card with Slide-in Motion */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="pl-12 sm:pl-0 sm:w-1/2"
                  >
                    <div className={`${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                      <motion.div 
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#1E50A2]/60 shadow-sm hover:shadow-xl transition-all duration-300 group"
                      >
                        
                        {/* Header: Period & Badge */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-1.5 text-xs text-[#1E50A2] font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.period}</span>
                          </div>
                          {exp.isCurrent && (
                            <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E50A2] border border-blue-200/60">
                              Current Practice
                            </span>
                          )}
                        </div>

                        {/* Institution Name */}
                        <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#0B192C] group-hover:text-[#1E50A2] transition-colors">
                          {exp.institution}
                        </h3>

                        {/* Role */}
                        <div className="flex items-center gap-2 mt-1 text-xs font-semibold text-slate-500">
                          <Briefcase className="w-3.5 h-3.5 text-[#1E50A2]" />
                          <span>{exp.role}</span>
                          {exp.location && (
                            <>
                              <span>·</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#1E50A2]" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                          {exp.description}
                        </p>

                        {/* Key Contributions List */}
                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                          {exp.keyContributions.map((contrib, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <Check className="w-3.5 h-3.5 text-[#1E50A2] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{contrib}</span>
                            </div>
                          ))}
                        </div>

                      </motion.div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
