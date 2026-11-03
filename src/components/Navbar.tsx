import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar at Very Top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#1E50A2] via-[#2563EB] to-[#38BDF8] origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Left: Brand Lockup */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col group cursor-pointer"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0B192C] group-hover:text-[#1E50A2] transition-colors whitespace-nowrap">
            DR. D. BIBISHA
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#1E50A2] font-semibold whitespace-nowrap">
            Dental Surgeon | BDS
          </span>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#1E50A2] transition-colors relative py-1 hover:border-b-2 hover:border-[#1E50A2] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button with motion */}
        <div className="hidden sm:flex items-center gap-4">
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-[#1E50A2] text-xs uppercase tracking-widest font-semibold text-[#1E50A2] hover:bg-[#1E50A2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="sm:hidden px-3 py-1.5 rounded-full border border-[#1E50A2] text-[10px] uppercase tracking-wider font-semibold text-[#1E50A2]"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0B192C] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl p-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif font-medium text-[#0B192C] hover:text-[#1E50A2] py-1 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0B192C] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1E50A2] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
