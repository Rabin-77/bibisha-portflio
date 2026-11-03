import { Phone, Mail, MessageSquare, Globe2, Download, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DOCTOR_INFO, EDUCATION_INFO } from '../data/portfolioData';

export function Contact() {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Bibisha;D.;;Dr.;
FN:Dr. D. Bibisha
TITLE:Dental Surgeon (BDS)
ORG:Dr. Mercy's Dental Implant and Laser Center
TEL;TYPE=CELL,VOICE:${DOCTOR_INFO.phone}
EMAIL;TYPE=INTERNET,PREF:${DOCTOR_INFO.email}
NOTE:Languages: Tamil, English. BDS - The Tamil Nadu Dr. M.G.R. Medical University.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_D_Bibisha_Dentist.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactChannels = [
    {
      title: "Direct Telephony",
      label: "Phone / Voice",
      value: DOCTOR_INFO.phoneDisplay,
      href: `tel:${DOCTOR_INFO.phone}`,
      buttonLabel: "Call Now",
      icon: Phone,
      primary: true
    },
    {
      title: "Electronic Correspondence",
      label: "Email Address",
      value: DOCTOR_INFO.email,
      href: `mailto:${DOCTOR_INFO.email}`,
      buttonLabel: "Send Email",
      icon: Mail,
      primary: false
    },
    {
      title: "Instant Messaging",
      label: "WhatsApp Channel",
      value: "Chat on WhatsApp",
      href: DOCTOR_INFO.whatsappUrl,
      buttonLabel: "Open WhatsApp",
      icon: MessageSquare,
      whatsapp: true
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative border-t border-slate-200">
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
              Direct Reach
            </span>
            <span className="h-0.5 w-6 bg-[#1E50A2]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B192C] font-normal tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light max-w-xl">
            For professional enquiries, academic exchange, and dental-related discussions, feel free to get in touch.
          </p>
        </motion.div>

        {/* 3 Direct Communication Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#F8FAFC] rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200/80 flex items-center justify-center text-[#1E50A2] group-hover:bg-[#1E50A2] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Channel 0{index + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#1E50A2] font-bold block mb-1">
                    {channel.label}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-[#0B192C] mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-600 font-medium break-all">
                    {channel.value}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/70">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={channel.href}
                    target={channel.whatsapp ? "_blank" : undefined}
                    rel={channel.whatsapp ? "noopener noreferrer" : undefined}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center justify-center gap-2 cursor-pointer ${
                      channel.whatsapp
                        ? 'bg-[#25D366] text-white hover:bg-[#20ba59]'
                        : channel.primary
                        ? 'bg-[#0B192C] text-white hover:bg-[#1E50A2]'
                        : 'bg-white border-2 border-blue-200 text-[#0B192C] hover:border-[#1E50A2] hover:text-[#1E50A2] hover:bg-[#F0F5FA]'
                    }`}
                  >
                    <span>{channel.buttonLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Dossier Summary Card (Centrally Displayed Showcase) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#F8FAFC] to-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left: Professional Summary */}
            <div className="flex items-center gap-5">
              <img
                src="/assets/dr_bibisha_portrait.jpg"
                alt="Dr. D. Bibisha, BDS"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-[#1E50A2]/30 shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#1E50A2]" />
                  <span className="text-xs uppercase tracking-widest text-[#1E50A2] font-bold">
                    Official Professional Dossier
                  </span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#0B192C]">
                  {DOCTOR_INFO.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {DOCTOR_INFO.title} · {DOCTOR_INFO.qualification}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-[#1E50A2]" />
                    <span>Languages: {DOCTOR_INFO.languages.join(" & ")}</span>
                  </span>
                  <span>·</span>
                  <span>{EDUCATION_INFO.institution}</span>
                </div>
              </div>
            </div>

            {/* Right: One-Click Address Book vCard Download */}
            <div className="w-full md:w-auto shrink-0">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleDownloadVCard}
                className="w-full md:w-auto px-6 py-4 rounded-2xl bg-[#0B192C] text-white hover:bg-[#1E50A2] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#38BDF8]" />
                <span>Save Contact to Address Book (.vcf)</span>
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
