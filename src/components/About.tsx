import { Heart, Stethoscope, BookOpen, Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTOR_INFO } from '../data/portfolioData';

export function About() {
  const highlights = [
    {
      title: "Patient-Centered Care",
      subtitle: "Empathy & Comfort",
      description: "Dedicated to alleviating dental apprehension with patient listening, gentle clinical touch, and transparent treatment consultations.",
      icon: Heart
    },
    {
      title: "Clinical Excellence",
      subtitle: "Precision & Technique",
      description: "Trained in contemporary rotary endodontics, prosthetics, and surgical extractions, grounded in sound biological principles.",
      icon: Stethoscope
    },
    {
      title: "Continuous Learning",
      subtitle: "Knowledge & Innovation",
      description: "Actively pursuing hands-on workshops, advanced CE certifications, and staying attuned to digital dental technology.",
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
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
              Professional Profile
            </span>
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B192C] font-normal tracking-tight">
            About Dr. Bibisha
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-xl">
            A dedication to clinical integrity, meticulous surgical precision, and genuine empathy for every individual.
          </p>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-200/60 group">
              <img
                src="/assets/dental_precision_instruments_4k.jpg"
                alt="4K Precision dental surgical instruments on clinical surface"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent" />
              
              {/* Overlay Badge with Dr. Bibisha's Actual Portrait Thumbnail */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-3 bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/20">
                  <img
                    src="/assets/dr_bibisha_portrait.jpg"
                    alt="Dr. D. Bibisha, BDS"
                    className="w-12 h-12 rounded-xl object-cover object-top border-2 border-white shadow-md shrink-0"
                  />
                  <div>
                    <p className="font-serif font-bold text-sm text-white">Dr. D. Bibisha</p>
                    <span className="text-[11px] text-[#38BDF8] font-semibold block uppercase tracking-wider">
                      Dental Surgeon (BDS)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
                <p className="font-serif text-base leading-snug">
                  "Every procedure demands uncompromising biological accuracy and gentleness."
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-[#E0EBF7]">
                  <span>Rajas Dental College & Hospital</span>
                  <span>·</span>
                  <span>Alumna (BDS)</span>
                </div>
              </div>
            </div>

            {/* Subtle floating quote accent with gentle animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden sm:block absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-blue-100 shadow-xl max-w-[200px]"
            >
              <Quote className="w-5 h-5 text-[#1E50A2] mb-1 opacity-80" />
              <p className="text-[11px] text-[#0B192C] italic font-serif">
                Committed to lifelong clinical education and compassionate patient healing.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Bio Prose & Three Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            <div className="prose prose-lg text-[#0B192C]">
              <p className="text-base sm:text-lg text-[#0B192C] leading-relaxed font-light">
                {DOCTOR_INFO.aboutParagraph1}
              </p>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                {DOCTOR_INFO.aboutParagraph2}
              </p>
            </div>

            {/* Three Elegant Highlights with Staggered Hover */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.6 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1E50A2]/60 transition-all duration-300 shadow-sm hover:shadow-lg group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F0F5FA] flex items-center justify-center text-[#1E50A2] group-hover:bg-[#1E50A2] group-hover:text-white transition-colors duration-300 mb-3 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-serif font-semibold text-[#0B192C]">
                      {item.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-[#1E50A2] font-semibold block mt-0.5">
                      {item.subtitle}
                    </span>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
