import { Heart, Compass, Sparkles, Shield, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTOR_INFO } from '../data/portfolioData';

export function PersonalApproach() {
  const values = [
    {
      title: "COMPASSION",
      subtitle: "Empathetic Patient Rapport",
      description: "Understanding every patient's needs and concerns. Dental anxiety is met with gentle communication, active listening, and customized comfort protocols.",
      icon: Heart
    },
    {
      title: "PRECISION",
      subtitle: "Meticulous Biological Accuracy",
      description: "A careful and detail-oriented approach to dental procedures. From micron-level marginal fit in restorations to gentle tissue handling in surgery.",
      icon: Eye
    },
    {
      title: "COMMITMENT",
      subtitle: "Uncompromising Healthcare Ethics",
      description: "Continuous professional development and quality patient care. Dedicated to evidence-based practice, modern techniques, and enduring patient trust.",
      icon: Shield
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Background Architectural Dental Studio with Deep Royal Sapphire Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/luxury_dental_operatory_4k.jpg"
          alt="4K Modern Dental Operatory Studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C] via-[#0B192C]/95 to-[#06101E]" />
      </div>

      {/* Subtle Floating Ambient Radial Particles */}
      <motion.div 
        animate={{ 
          x: [0, 25, 0],
          y: [0, -20, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#38BDF8]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#38BDF8]">
              Guiding Philosophy
            </span>
            <span className="h-0.5 w-6 bg-[#38BDF8]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-white text-balance">
            Every Smile Deserves Thoughtful Care.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Rooted in three unwavering tenets that govern clinical judgment, procedural execution, and doctor-patient relationships.
          </p>
        </motion.div>

        {/* 3 Core Values Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-white/[0.06] backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-[#38BDF8]/60 transition-all duration-300 group shadow-lg"
              >
                {/* Sapphire Top Accent Line */}
                <div className="w-12 h-1 bg-[#38BDF8] rounded-full mb-6 group-hover:w-20 transition-all duration-300" />

                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38BDF8] mb-6 group-hover:bg-[#1E50A2] group-hover:text-white transition-colors duration-300 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-serif font-semibold tracking-wider text-white">
                  {val.title}
                </h3>
                <span className="text-[11px] uppercase tracking-widest text-[#38BDF8] font-semibold block mt-1">
                  {val.subtitle}
                </span>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Doctor's Signature Affirmation with Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-white/10 text-center max-w-2xl mx-auto"
        >
          <p className="text-base sm:text-lg font-serif italic text-white/90 leading-relaxed">
            "I believe that every smile I help create is a step closer to fulfilling my purpose as a healthcare provider."
          </p>
          <span className="block mt-3 text-xs uppercase tracking-[0.2em] text-[#38BDF8] font-bold">
            — Dr. D. Bibisha (BDS)
          </span>
        </motion.div>

      </div>
    </section>
  );
}
