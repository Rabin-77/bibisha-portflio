import { ArrowDown, PhoneCall, Sparkles, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTOR_INFO } from '../data/portfolioData';
import { DoctorPortrait } from './DoctorPortrait';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' as const } 
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 overflow-hidden bg-white">
      {/* Animated Subtle Luxury White & Blue Radial Atmospheric Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E0EBF7]/80 via-[#F0F5FA]/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.75, 0.5]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#1E50A2]/10 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & CTAs with staggered animations */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            {/* Small Label Kicker */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="h-0.5 w-8 bg-[#1E50A2]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#1E50A2]">
                DENTAL PROFESSIONAL | BDS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0B192C] font-normal leading-[1.12] tracking-tight text-balance"
            >
              Creating Healthier Smiles with{' '}
              <span className="italic font-serif text-[#1E50A2] font-medium">Compassion</span>,{' '}
              Precision & Care.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light"
            >
              {DOCTOR_INFO.heroBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#expertise')}
                className="px-7 py-3.5 rounded-full bg-[#0B192C] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1E50A2] hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Expertise</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 rounded-full border-2 border-[#0B192C] text-[#0B192C] text-xs uppercase tracking-widest font-semibold hover:bg-[#F0F5FA] hover:border-[#1E50A2] hover:text-[#1E50A2] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#1E50A2]" />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Trust Badges / Verification Row */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E50A2]" />
                <span className="font-semibold text-[#0B192C]">MGR Medical University BDS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E50A2]" />
                <span className="font-semibold text-[#0B192C]">Rotary Endodontics Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E50A2]" />
                <span className="font-semibold text-[#0B192C]">CBCT & OPG Certified</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Large Professional Portrait with Floating Entrance */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-none">
              <DoctorPortrait size="hero" />
            </div>
          </motion.div>

        </div>

        {/* Full-Width Metric & Highlights Strip with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-10 pb-8 px-6 sm:px-10 rounded-2xl bg-[#F0F5FA] border border-blue-100 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 shadow-xs"
        >
          
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-[#1E50A2] mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-bold">Credential</span>
            </div>
            <p className="text-xl sm:text-2xl font-serif font-medium text-[#0B192C]">Bachelor of Dental Surgery</p>
            <span className="text-xs text-slate-500 mt-0.5">BDS · 2018–2025</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-[#1E50A2] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-bold">Specialty Focus</span>
            </div>
            <p className="text-xl sm:text-2xl font-serif font-medium text-[#0B192C]">Rotary Endodontics</p>
            <span className="text-xs text-slate-500 mt-0.5">Anterior & Posterior RCT</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-[#1E50A2] mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-bold">Radiology Tech</span>
            </div>
            <p className="text-xl sm:text-2xl font-serif font-medium text-[#0B192C]">CBCT & Digital OPG</p>
            <span className="text-xs text-slate-500 mt-0.5">3D Diagnostics & Planning</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-[#1E50A2] mb-1">
              <HeartHandshake className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-bold">Philosophy</span>
            </div>
            <p className="text-xl sm:text-2xl font-serif font-medium text-[#0B192C]">Patient-Centered</p>
            <span className="text-xs text-slate-500 mt-0.5">Compassion & Precision</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
