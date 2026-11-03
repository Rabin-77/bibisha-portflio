interface LogoProps {
  className?: string;
}

// 1. Restorative Dentistry: Detailed molar crown with aesthetic restoration margin
export function RestorativeLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Outer anatomical tooth crown & roots */}
      <path d="M7 3C5.5 3 4 4.5 4 6.5C4 9.5 5 12 5.5 15C6 18 6.5 21 8 21C9.2 21 9.5 18 10 15C10.5 12 11.5 12 12 12C12.5 12 13.5 12 14 15C14.5 18 14.8 21 16 21C17.5 21 18 18 18.5 15C19 12 20 9.5 20 6.5C20 4.5 18.5 3 17 3C15 3 13.5 4.2 12 4.2C10.5 4.2 9 3 7 3Z" />
      {/* Precision composite restorative inlay facet */}
      <path d="M9 7L12 5L15 7L12 9L9 7Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M12 9V12" />
    </svg>
  );
}

// 2. Endodontics: Tooth roots with visible pulp chamber & root canal paths
export function EndodonticsLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Tooth contour */}
      <path d="M7 3C5 3 4 5 4 7C4 10 5.2 13 5.8 16C6.3 18.5 6.8 21 8 21C9.2 21 9.6 18 10 15C10.5 12 11.2 11.5 12 11.5C12.8 11.5 13.5 12 14 15C14.4 18 14.8 21 16 21C17.2 21 17.7 18.5 18.2 16C18.8 13 20 10 20 7C20 5 19 3 17 3C15 3 13.8 4 12 4C10.2 4 9 3 7 3Z" />
      {/* Dual canal paths with apex lines */}
      <path d="M10 6C10 8 8.8 12 8.5 18" strokeDasharray="1.5 1.5" />
      <path d="M14 6C14 8 15.2 12 15.5 18" strokeDasharray="1.5 1.5" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

// 3. Oral Surgery: Surgical scalpel with surgical cross and extraction indicator
export function OralSurgeryLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Surgical scalpel angled */}
      <path d="M4 20L13.5 10.5" />
      <path d="M13.5 10.5L16.5 7.5C17.5 6.5 19 6.5 20 7.5C21 8.5 21 10 20 11L17 14L13.5 10.5Z" fill="currentColor" fillOpacity="0.2" />
      {/* Surgical Medical Cross in top corner */}
      <path d="M7 3H11" />
      <path d="M9 1V5" />
      {/* Precision suture knot motif */}
      <circle cx="4" cy="20" r="1.5" fill="currentColor" />
      <path d="M6 18C7.5 16 7.5 14 6 12" />
    </svg>
  );
}

// 4. Periodontics: Periodontal pocket probe measuring gingival tissue & tooth root
export function PeriodonticsLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Gingival margin wave */}
      <path d="M2 13C4 11 6 11 8 13C10 15 12 15 14 13C16 11 18 11 20 13C21 14 22 14 22 14" strokeWidth="2" />
      {/* Tooth root descending beneath gingiva */}
      <path d="M8 8V6C8 4.5 9 3 11 3C13 3 14 4.5 14 6V8" />
      <path d="M9 13V19C9 20.5 10 21 11 21C12 21 13 20.5 13 19V13" />
      {/* Calibrated periodontal probe with millimeter markings */}
      <path d="M17 3L15 17" strokeWidth="1.5" />
      <line x1="16.5" y1="6" x2="18.5" y2="6.3" />
      <line x1="16" y1="9" x2="18" y2="9.3" />
      <line x1="15.5" y1="12" x2="17.5" y2="12.3" />
    </svg>
  );
}

// 5. Prosthodontics: 3-Unit fixed partial dental bridge arch
export function ProsthodonticsLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Bridge Framework */}
      <path d="M3 11C3 9 4.5 7 6.5 7C8 7 9 8 9.5 9.5C10 8 11 7 12.5 7C14 7 15 8 15.5 9.5C16 8 17 7 18.5 7C20.5 7 22 9 22 11V14C22 15 21 16 20 16H5C4 16 3 15 3 14V11Z" fill="currentColor" fillOpacity="0.15" />
      {/* Separating interproximal embrasures */}
      <line x1="9.5" y1="8" x2="9.5" y2="15" />
      <line x1="15.5" y1="8" x2="15.5" y2="15" />
      {/* Substructure support pillars */}
      <path d="M5.5 16V19" />
      <path d="M19.5 16V19" />
      {/* Pontic pontoon curve */}
      <path d="M10 16C11 17 14 17 15 16" strokeDasharray="1 1" />
    </svg>
  );
}

// 6. Pedodontics: Friendly pediatric milk tooth with protective gentle sparkles
export function PedodonticsLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Petite rounded primary tooth */}
      <path d="M8 5C6.5 5 5 6.5 5 8.5C5 11 6 13 6.5 16C7 18 7.5 19.5 8.5 19.5C9.5 19.5 10 18 10.5 15.5C11 13.5 11.5 13.5 12 13.5C12.5 13.5 13 13.5 13.5 15.5C14 18 14.5 19.5 15.5 19.5C16.5 19.5 17 18 17.5 16C18 13 19 11 19 8.5C19 6.5 17.5 5 16 5C14.5 5 13.5 6 12 6C10.5 6 9.5 5 8 5Z" />
      {/* Gentle smile */}
      <path d="M9.5 10C10.2 11.2 11.8 11.2 12.5 10" strokeWidth="1.5" />
      {/* Pediatric sparkles */}
      <path d="M18.5 2.5L19 4L20.5 4.5L19 5L18.5 6.5L18 5L16.5 4.5L18 4L18.5 2.5Z" fill="currentColor" />
    </svg>
  );
}

// 7. Orthodontics: Tooth row with orthodontic brackets and curved archwire
export function OrthodonticsLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Teeth outline */}
      <path d="M3 8C3 6 4 4 6 4C7.5 4 8.5 5 9 6.5C9.5 5 10.5 4 12 4C13.5 4 14.5 5 15 6.5C15.5 5 16.5 4 18 4C20 4 21 6 21 8V16H3V8Z" fill="currentColor" fillOpacity="0.08" />
      {/* Orthodontic Archwire */}
      <path d="M2 11.5C8 10 16 10 22 11.5" strokeWidth="2" />
      {/* Brackets */}
      <rect x="4.5" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="10.5" y="9.5" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="16.5" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

// 8. Dental Radiology: 3D CBCT digital volumetric scan with sensor rays & tooth slice
export function DentalRadiologyLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Digital Sensor Aperture Frame */}
      <rect x="3" y="3" width="18" height="18" rx="3" />
      {/* 3D Volumetric Crosshair Scan Lines */}
      <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="2 2" strokeWidth="1.2" />
      <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="2 2" strokeWidth="1.2" />
      {/* Radiographic Tooth Silhouette inside Scanner */}
      <path d="M9 8C9 7 9.5 6.5 10.5 6.5C11.2 6.5 11.5 7 12 7.5C12.5 7 12.8 6.5 13.5 6.5C14.5 6.5 15 7 15 8C15 9.5 14.5 11 14 12.5C13.8 13.5 13.5 14.5 13 15.5C12.8 16 12.5 16 12 14.5C11.5 16 11.2 16 11 15.5C10.5 14.5 10.2 13.5 10 12.5C9.5 11 9 9.5 9 8Z" fill="currentColor" fillOpacity="0.3" />
      {/* Radiation wave indicator */}
      <path d="M17 6C18.5 7.5 18.5 10 17 11.5" strokeWidth="1.5" />
    </svg>
  );
}

// 9. Implantology: Complete dental implant with titanium screw threads, abutment, & crown
export function ImplantologyLogo({ className = "w-6 h-6" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Prosthetic Crown */}
      <path d="M7 3C5.5 3 5 4.5 5 6C5 7.5 6 9 8 9H16C18 9 19 7.5 19 6C19 4.5 18.5 3 17 3C15.5 3 14.5 3.8 12 3.8C9.5 3.8 8.5 3 7 3Z" fill="currentColor" fillOpacity="0.25" />
      {/* Hexagonal Abutment Connection */}
      <path d="M9 9H15V11H9V9Z" />
      {/* Titanium Implant Body with Osteotomy Threads */}
      <path d="M9.5 11H14.5L13.5 20C13.2 21 10.8 21 10.5 20L9.5 11Z" />
      {/* Spiral Threads */}
      <line x1="9" y1="13" x2="15" y2="13" strokeWidth="1.5" />
      <line x1="9.2" y1="15" x2="14.8" y2="15" strokeWidth="1.5" />
      <line x1="9.5" y1="17" x2="14.5" y2="17" strokeWidth="1.5" />
      <line x1="10" y1="19" x2="14" y2="19" strokeWidth="1.5" />
    </svg>
  );
}

export function DentalSpecialtyLogo({ id, className = "w-6 h-6" }: { id: string; className?: string }) {
  switch (id) {
    case 'restorative-dentistry':
      return <RestorativeLogo className={className} />;
    case 'endodontics':
      return <EndodonticsLogo className={className} />;
    case 'oral-surgery':
      return <OralSurgeryLogo className={className} />;
    case 'periodontics':
      return <PeriodonticsLogo className={className} />;
    case 'prosthodontics':
      return <ProsthodonticsLogo className={className} />;
    case 'pedodontics':
      return <PedodonticsLogo className={className} />;
    case 'orthodontics':
      return <OrthodonticsLogo className={className} />;
    case 'dental-radiology':
      return <DentalRadiologyLogo className={className} />;
    case 'implantology':
      return <ImplantologyLogo className={className} />;
    default:
      return <RestorativeLogo className={className} />;
  }
}
