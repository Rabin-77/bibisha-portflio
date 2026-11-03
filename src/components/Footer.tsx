import { DOCTOR_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#06101E] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Tier: Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex flex-col text-center md:text-left">
            <span className="font-serif text-2xl font-semibold tracking-tight text-white">
              DR. D. BIBISHA
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold mt-1">
              Dental Professional | BDS
            </span>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              Committed to providing compassionate, precise, and evidence-based clinical dental healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-300">
            {quickLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="hover:text-[#38BDF8] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

        </div>

        {/* Bottom Tier: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Dr. D. Bibisha. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Personal Dental Portfolio</span>
            <span>·</span>
            <span>Bachelor of Dental Surgery (BDS)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
