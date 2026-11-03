import { Award, ShieldCheck, HeartPulse, UserCheck, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data/portfolioData';

export function Certifications() {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'hands-on': return Sparkles;
      case 'clinical': return HeartPulse;
      case 'communication': return UserCheck;
      default: return Award;
    }
  };

  const getBadgeLabel = (type: string) => {
    switch (type) {
      case 'hands-on': return 'Hands-on Clinical Course';
      case 'clinical': return 'Clinical Certification';
      case 'communication': return 'Behavioral & Psychological Training';
      default: return 'Certified Course';
    }
  };

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#F8FAFC] relative border-t border-slate-200">
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
              Advanced Credentials
            </span>
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B192C] font-normal tracking-tight">
            Certifications & Continuous Learning
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-xl">
            Specialized clinical workshops, life support preparedness, and behavioral training enhancing comprehensive patient care.
          </p>
        </motion.div>

        {/* Certificate Style Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const BadgeIcon = getBadgeIcon(cert.type);
            const badgeText = getBadgeLabel(cert.type);

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#1E50A2] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Decorative Sapphire Seal Corner */}
                <div className="absolute top-4 right-4 text-blue-200 group-hover:text-[#1E50A2] transition-colors">
                  <Award className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </div>

                <div>
                  {/* Badge Label */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1E50A2] uppercase tracking-wider mb-3">
                    <BadgeIcon className="w-3.5 h-3.5" />
                    <span>{badgeText}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#0B192C] group-hover:text-[#1E50A2] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>

                {/* Focus Areas List */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#0B192C] block mb-2">
                    Competencies:
                  </span>
                  <div className="space-y-1.5">
                    {cert.focusAreas.map((focus, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3 h-3 text-[#1E50A2] shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Continuous Learning Pledge Note */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-blue-200 text-xs text-slate-700 shadow-xs hover:shadow-md transition-shadow">
            <ShieldCheck className="w-4 h-4 text-[#1E50A2]" />
            <span>Regularly participating in continuing dental education (CDE) programs & clinical symposiums</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
