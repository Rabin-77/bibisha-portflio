export interface ExpertiseItem {
  id: string;
  title: string;
  category: 'restorative' | 'surgery' | 'prosthetics' | 'diagnostics';
  summary: string;
  details: string[];
  equipment: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  institution: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  description: string;
  keyContributions: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  type: 'hands-on' | 'clinical' | 'communication';
  description: string;
  focusAreas: string[];
}

export const DOCTOR_INFO = {
  name: "Dr. D. Bibisha",
  title: "Dental Surgeon",
  qualification: "Bachelor of Dental Surgery (BDS)",
  shortQualification: "BDS",
  phone: "+91 7305122392",
  phoneDisplay: "+91 73051 22392",
  email: "d.bibisha23@gmail.com",
  whatsappUrl: "https://wa.me/917305122392",
  languages: ["Tamil", "English"],
  currentPosition: "Dental Surgeon at Dr. Mercy's Dental Implant and Laser Center",
  tagline: "Creating Healthier Smiles with Compassion, Precision & Care.",
  heroBio: "I am Dr. D. Bibisha, a dental professional committed to providing patient-centered dental care through clinical knowledge, modern techniques and a compassionate approach.",
  aboutParagraph1: "I am a motivated and compassionate dental professional with a deep passion for improving oral health and patient well-being. With a solid academic foundation and hands-on experience in clinical procedures, I strive to deliver high-quality, patient-centered care.",
  aboutParagraph2: "I am committed to continuous learning and personal growth, aiming to build a career defined by excellence, empathy and integrity. I believe that every smile I help create is a step closer to fulfilling my purpose as a healthcare provider.",
  values: [
    {
      title: "COMPASSION",
      description: "Understanding every patient's needs and concerns with empathetic listening and comfort-first protocols."
    },
    {
      title: "PRECISION",
      description: "A careful and detail-oriented approach to dental procedures, restorative accuracy, and tissue preservation."
    },
    {
      title: "COMMITMENT",
      description: "Continuous professional development, evidence-based modern dentistry, and unwavering quality patient care."
    }
  ]
};

export const CLINICAL_EXPERTISE: ExpertiseItem[] = [
  {
    id: "restorative-dentistry",
    title: "Restorative Dentistry",
    category: "restorative",
    summary: "Fillings, aesthetic restorations, crowns and bridges.",
    details: [
      "Tooth-colored composite restorations with anatomical matrix systems",
      "Direct and indirect veneer preparations and composite bonding",
      "Full contour ceramic, zirconia and porcelain-fused-to-metal (PFM) crown preparations",
      "Fixed bridge prostheses for functional arch reconstruction"
    ],
    equipment: ["Sectional matrix systems", "LED light-curing units", "Precision diamond burs"],
    icon: "Sparkles"
  },
  {
    id: "endodontics",
    title: "Endodontics",
    category: "restorative",
    summary: "Access openings, endomotor use and root canal treatments (anterior and posterior).",
    details: [
      "Precise coronal access cavity preparation preserving peri-cervical dentin",
      "Rotary instrumentation and biomechanical canal shaping using modern endomotors",
      "Electronic apex locator measurement and radiographic length verification",
      "Three-dimensional warm and cold lateral obturation for anterior and posterior teeth"
    ],
    equipment: ["Rotary Endomotor", "Electronic Apex Locator", "Ultrasonic irrigation tips", "Rubber dam isolation"],
    icon: "Activity"
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    category: "surgery",
    summary: "Extractions and impacted tooth removal.",
    details: [
      "Routine and atraumatic closed dental extractions",
      "Surgical exodontia and mandibular third molar impacted tooth removal",
      "Alveoloplasty, bone contouring, and socket preservation techniques",
      "Local anesthesia administration with profound nerve blocks and hemostatic management"
    ],
    equipment: ["Surgical handpieces", "Periotomes & luxators", "Suture armamentarium"],
    icon: "Cross"
  },
  {
    id: "periodontics",
    title: "Periodontics",
    category: "surgery",
    summary: "Scaling, root planing, periodontal maintenance and flap surgeries.",
    details: [
      "Full-mouth ultrasonic supra- and subgingival scaling",
      "Root planing and curettage for chronic periodontal pocket reduction",
      "Periodontal maintenance therapy and patient oral hygiene re-education",
      "Assistance in open flap debridement surgeries and regenerative procedures"
    ],
    equipment: ["Piezoelectric ultrasonic scalers", "Graceys curettes", "Periodontal probes"],
    icon: "ShieldCheck"
  },
  {
    id: "prosthodontics",
    title: "Prosthodontics",
    category: "prosthetics",
    summary: "Complete dentures, partial dentures and fixed partial dentures.",
    details: [
      "Complete denture fabrication: border molding, jaw relations, and balanced occlusion try-ins",
      "Cast partial dentures (CPD) and flexible acrylic partial dentures",
      "Fixed partial dentures (FPD) tooth preparation, gingival retraction, and precision elastomeric impressions",
      "Post-insertion occlusal adjustments and patient phonetic adaptation guidance"
    ],
    equipment: ["Semi-adjustable articulators", "Addition silicone (PVS) impression materials", "Shade matching guides"],
    icon: "Layers"
  },
  {
    id: "pedodontics",
    title: "Pedodontics",
    category: "restorative",
    summary: "Pulpectomy, pulpotomy and stainless steel crowns.",
    details: [
      "Primary tooth pulpotomy with biocompatible dressing agents",
      "Primary tooth pulpectomy and resorbable canal obturation",
      "Preformed Stainless Steel Crown (SSC) crimping, contouring, and cementation",
      "Behavior guidance, positive reinforcement, and preventive sealants / fluoride varnish"
    ],
    equipment: ["Pediatric SSC kits", "Tell-Show-Do behavioral aids", "Rubber dam kits"],
    icon: "Smile"
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    category: "prosthetics",
    summary: "Bracket and band placement, debonding, retainer placement and removable appliances.",
    details: [
      "Direct bonding of orthodontic brackets and molar band placement with cementation",
      "Archwire ligation and routine adjustment assistance",
      "Safe bracket debonding and adhesive resin removal without enamel abrasion",
      "Fabrication and fitting of Hawley retainers, clear vacuum-formed retainers, and removable appliances"
    ],
    equipment: ["Orthodontic bonding primers", "Bracket positioning gauges", "Debonding pliers", "Vacuum formers"],
    icon: "Target"
  },
  {
    id: "dental-radiology",
    title: "Dental Radiology",
    category: "diagnostics",
    summary: "Proficient in operating CBCT and OPG machines.",
    details: [
      "Cone Beam Computed Tomography (CBCT) volume acquisition and multi-planar reformatted analysis",
      "Panoramic Radiography (OPG) patient positioning, exposure calibration, and artifact elimination",
      "Digital intraoral periapical (IOPA) radiography using RVG digital sensors",
      "Radiographic interpretation for endodontic anatomy, impactions, and bone morphology"
    ],
    equipment: ["Modern CBCT 3D scanner", "Digital OPG unit", "RVG intraoral sensor", "DICOM imaging software"],
    icon: "Cpu"
  },
  {
    id: "implantology",
    title: "Implantology",
    category: "surgery",
    summary: "Posterior implant placement with staff guidance, assistance in All-on-Four and zygomatic implant procedures in OT, and patient communication and case acceptance for implants.",
    details: [
      "Posterior single and multi-unit implant placement carried out with senior staff guidance",
      "Surgical assistance in Operating Theatre (OT) for advanced All-on-Four and zygomatic implant reconstructions",
      "Patient consultation, diagnostic wax-ups, pre-surgical bone assessment, and case acceptance communication",
      "Sterile operating field maintenance and surgical guide handling"
    ],
    equipment: ["Surgical physiodispenser", "Implant osteotomy kits", "Torque wrenches", "Sterile surgical drape sets"],
    icon: "Anchor"
  }
];

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: "mercy-dental",
    institution: "Dr. Mercy's Dental Implant and Laser Center",
    role: "Dental Surgeon",
    period: "March 2026 – Present",
    isCurrent: true,
    description: "Delivering advanced dental care, surgical assistance in oral rehabilitation, rotary endodontics, and restorative treatments in a state-of-the-art implantology and laser facility.",
    keyContributions: [
      "Surgical assistance in complex implantology procedures including All-on-Four and zygomatic cases in OT",
      "Independent handling of rotary endodontic treatments and aesthetic restorative dentistry",
      "Comprehensive patient examinations, digital radiographic diagnostic workups, and treatment planning",
      "Patient education and case presentation for multidisciplinary rehabilitation"
    ]
  },
  {
    id: "nalam-dental",
    institution: "Nalam Dental Clinic, Thittuvilai",
    role: "Associate Dental Surgeon",
    period: "October 2025 – February 2026",
    isCurrent: false,
    description: "Managed outpatient clinical flow, performed routine and emergency dental procedures, tooth restorations, root canal therapies, and pediatric dental treatments.",
    keyContributions: [
      "Performed routine restorations, scaling, and closed extractions with high patient satisfaction",
      "Conducted anterior and posterior root canal treatments using rotary endomotor systems",
      "Provided compassionate pediatric care including pulpotomies and stainless steel crown placements",
      "Fostered comfortable doctor-patient relationships with attentive communication in Tamil and English"
    ]
  },
  {
    id: "aplus-a-dental",
    institution: "A Plus A Dental Clinic, Thukalai",
    role: "Associate Dental Surgeon",
    period: "December 2024 – September 2025",
    isCurrent: false,
    description: "Engaged in general dental practice, periodontal therapies, removable and fixed prosthodontics, and orthodontic appliance management.",
    keyContributions: [
      "Formulated comprehensive treatment plans for varied clinical cases across demographics",
      "Assisted with orthodontic bracket positioning, archwire changes, debonding, and retainer fabrication",
      "Fabricated complete and partial dentures, restoring masticatory function and aesthetics",
      "Emphasized strict infection control and autoclave sterilization protocols"
    ]
  },
  {
    id: "rajas-internship",
    institution: "Rajas Dental College and Hospital, Kavalkinaru",
    role: "Compulsory Rotatory Internship",
    period: "September 2023 – September 2024",
    isCurrent: false,
    location: "Kavalkinaru Junction, Tirunelveli, Tamil Nadu",
    description: "Completed intensive one-year compulsory rotatory internship across all nine specialized dental departments of the tertiary teaching dental hospital.",
    keyContributions: [
      "Completed hands-on rotations in Conservative Dentistry, Oral & Maxillofacial Surgery, Prosthodontics, Periodontics, Pedodontics, Orthodontics, and Oral Medicine & Radiology",
      "Managed emergency triage, maxillofacial trauma assistance, and routine patient clinical case records",
      "Operated institutional CBCT and OPG imaging units under radiographic faculty supervision",
      "Participated in rural community dental health camps and oral cancer screening initiatives"
    ]
  }
];

export const EDUCATION_INFO = {
  degree: "Bachelor of Dental Surgery (BDS)",
  degreeAbbr: "B.D.S.",
  university: "The Tamil Nadu Dr. M.G.R. Medical University",
  institution: "Rajas Dental College & Hospital",
  duration: "2018 – 2025",
  location: "Kavalkinaru Junction, Tirunelveli, Tamil Nadu, India",
  highlights: [
    "Full-time 5-year comprehensive curriculum followed by 1-year rotatory clinical internship",
    "Rigorous training in basic medical sciences, human anatomy, pathology, pharmacology, and all clinical dental specialties",
    "Extensive clinical patient contact hours across inpatient and outpatient hospital departments",
    "Adherence to Dental Council of India (DCI) academic standards and ethical healthcare codes"
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "rotary-endo",
    title: "Rotary Endodontics – Hands-on Course",
    type: "hands-on",
    description: "Advanced hands-on clinical workshop covering modern nickel-titanium (NiTi) rotary instrumentation, glide path preparation, irrigation dynamics, and 3D warm vertical compaction techniques.",
    focusAreas: ["NiTi rotary files", "Apex locators", "Canal irrigation protocols"]
  },
  {
    id: "post-and-core",
    title: "Post & Core Restorations – Hands-on Course",
    type: "hands-on",
    description: "Intensive training in post space preparation, fiber-reinforced composite post selection, adhesive bonding protocols, and anatomical core build-ups for structurally compromised endodontically treated teeth.",
    focusAreas: ["Fiber-reinforced posts", "Dual-cure resin cements", "Ferrule effect preservation"]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening – Hands-on Course",
    type: "hands-on",
    description: "Comprehensive hands-on training on in-office light-activated power bleaching and customized home bleaching systems, shade assessment, and tooth sensitivity management.",
    focusAreas: ["In-office bleaching protocols", "Gingival barrier application", "Hydrogen peroxide dynamics"]
  },
  {
    id: "bls",
    title: "Basic Life Support (BLS)",
    type: "clinical",
    description: "Certified clinical training in cardiopulmonary resuscitation (CPR), foreign-body airway obstruction relief, automated external defibrillator (AED) operation, and emergency medical triage.",
    focusAreas: ["Adult & pediatric CPR", "AED defibrillation", "Clinical emergency response"]
  },
  {
    id: "icd-coding",
    title: "ICD Coding",
    type: "clinical",
    description: "Professional training in International Classification of Diseases (ICD) diagnostic and procedural coding, standard medical record documentation, and healthcare data integrity.",
    focusAreas: ["Diagnostic terminology", "Clinical classification", "Dental health records"]
  },
  {
    id: "psychology-internship",
    title: "Psychology Internship",
    type: "communication",
    description: "Specialized training in interpersonal doctor-patient communication skills, dental anxiety alleviation, patient behavior management, and empathetic clinical counselling.",
    focusAreas: ["Dental phobia management", "Patient counselling", "Active listening & trust building"]
  }
];
