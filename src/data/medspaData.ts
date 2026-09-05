export interface Treatment {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fullDetails: string;
  image: string;
  idealFor: string[];
  downtime: string;
  duration: string;
  resultsTimeline: string;
  featuredBadge?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  treatment: string;
  date: string;
  quote: string;
  verified: boolean;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'injectables',
    name: 'Injectables & Dermal Fillers',
    category: 'Facial Harmonization',
    tagline: 'Artfully sculpted contours & subtle softening',
    description: 'Precision Botox®, Dysport®, and Juvederm® treatments tailored to preserve natural facial mobility while smoothing dynamic lines.',
    fullDetails: 'Administered exclusively by Marina Shamis, FNP BC, and our board-certified master injectors. We analyze your unique facial architecture to restore volume in temples, cheeks, tear troughs, and lips without an overfilled appearance.',
    image: 'https://res.cloudinary.com/yc7cencg/image/upload/v1788570340/Medi-Spa-Photos-Final-34-scaled_cw17e0.jpg',
    idealFor: ['Fine lines & wrinkles', 'Volume restoration', 'Lip symmetry', 'Jawline definition'],
    downtime: 'None to minimal (24 hrs)',
    duration: '30 - 45 min',
    resultsTimeline: 'Visible in 3-7 days, lasting 4-12 months',
    featuredBadge: 'Most Popular'
  },
  {
    id: 'laser-resurfacing',
    name: 'AdvaTX & Laser Rejuvenation',
    category: 'Skin Rejuvenation',
    tagline: 'Flawless clarity, tone & cellular repair',
    description: 'Next-generation AdvaTX laser and phototherapy targeting fine lines, wrinkles, stretch marks, and acne scars.',
    fullDetails: 'The breakthrough AdvaTX laser machine combines dual 589nm and 1319nm wavelengths to treat active acne, vascular lesions, hyperpigmentation, fine lines, and textural irregularities with unmatched comfort and zero social downtime.',
    image: 'https://res.cloudinary.com/yc7cencg/image/upload/v1788570339/Medi-Spa-Photos-Final-23-scaled_z86ijf.jpg',
    idealFor: ['Sun spots & melasma', 'Fine lines & wrinkles', 'Acne scars & redness', 'Stretch marks'],
    downtime: 'Minimal to no downtime',
    duration: '45 - 60 min',
    resultsTimeline: 'Visible brightening in 5-7 days; cumulative cellular renewal',
    featuredBadge: 'New Technology'
  },
  {
    id: 'rf-microneedling',
    name: 'RF Microneedling & Contouring',
    category: 'Collagen Remodeling',
    tagline: 'Deep subdermal remodeling & firming',
    description: 'Medical-grade radiofrequency microneedling penetrating subdermal layers to remodel tissue and stimulate natural collagen production.',
    fullDetails: 'Combines micro-fine pins with localized RF heat to stimulate elastin and structural collagen deep beneath the dermis. Effectively tightens loose skin, softens deep scars, and contours the lower face and neck.',
    image: 'https://res.cloudinary.com/yc7cencg/image/upload/v1788570339/Medi-Spa-Photos-Final-28-scaled_xuzdar.jpg',
    idealFor: ['Jawline sagging', 'Acne scarring', 'Deep textural crepiness', 'Neck rejuvenation'],
    downtime: '1 - 2 days mild flushing',
    duration: '60 min',
    resultsTimeline: 'Optimal results at 6-12 weeks',
    featuredBadge: 'Trending'
  },
  {
    id: 'body-contouring',
    name: 'Body Contouring & Sculpting',
    category: 'Physique Definition',
    tagline: 'Non-surgical muscle toning & targeted fat reduction',
    description: 'Target stubborn fat pockets and enhance muscle definition with advanced non-invasive medical sculpting technologies.',
    fullDetails: 'Clinically proven protocols designed to eliminate stubborn subcutaneous fat and strengthen underlying core and gluteal muscles with zero surgical incisions or anesthesia.',
    image: 'https://res.cloudinary.com/yc7cencg/image/upload/v1788570344/Medi-Spa-Photos-Final-86-scaled_boghms.jpg',
    idealFor: ['Submental fullness', 'Abdominal sculpting', 'Flank contouring', 'Muscle toning'],
    downtime: 'Zero downtime',
    duration: '35 - 50 min',
    resultsTimeline: 'Noticeable reduction within 4-8 weeks'
  },
  {
    id: 'medical-facials',
    name: 'Medical-Grade Facials & Hydration',
    category: 'Dermal Infusion',
    tagline: 'Deep vortex extraction & antioxidant hydration',
    description: 'Advanced medical facial customized with targeted boosters, deep pore clarification, and therapeutic LED rejuvenation.',
    fullDetails: 'A multi-step medical treatment that simultaneously cleanses, exfoliates, extracts impurities, and saturates the skin barrier with personalized peptide cocktails, hyaluronic acid, and powerful antioxidants.',
    image: 'https://res.cloudinary.com/yc7cencg/image/upload/v1788570340/Medi-Spa-Photos-Final-88-scaled_ebjcxb.jpg',
    idealFor: ['Congested pores', 'Dehydration', 'Dull complexion', 'Event prep glow'],
    downtime: 'Instant radiance, no downtime',
    duration: '45 - 60 min',
    resultsTimeline: 'Immediate luminous glow lasting 2-4 weeks',
    featuredBadge: 'Instant Glow'
  }
];

export const TRUST_INDICATORS = [
  {
    title: 'Board Certified Provider',
    description: 'Physician-directed clinical protocols & master injector precision'
  },
  {
    title: 'Advanced Laser Technology',
    description: 'FDA-cleared medical systems including Sciton BBL & Morpheus8'
  },
  {
    title: 'Personalized Treatment Plans',
    description: 'Comprehensive 3D skin analysis & tailored aesthetic blueprints'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: '01',
    title: 'Anatomical Precision & Master Injections',
    description: 'Marina has performed over 10,000 procedures and serves as an advanced clinical trainer. Every syringe is placed with micro-level anatomical precision to guarantee natural, unclockable enhancement.'
  },
  {
    id: '02',
    title: 'Gold-Standard FDA Medical Systems',
    description: 'We do not compromise with generic devices. MediSpa Solutions exclusively invests in world-renowned platforms like Sciton BBL, InMode Morpheus8, and Hydrafacial Syndeo.'
  },
  {
    id: '03',
    title: 'Bespoke Aesthetic Blueprinting',
    description: 'No two faces are alike. We begin with a deep clinical diagnostic of your dermal layers, lifestyle, and facial symmetry before curating your individualized treatment journey.'
  },
  {
    id: '04',
    title: 'Serene Sanctuary & Concierge Care',
    description: 'Designed as a calm, discreet Beverly Hills retreat. From private consult suites to dedicated post-care follow-up, your comfort and privacy are strictly safeguarded.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Nicole G.',
    location: 'Staten Island, NY',
    rating: 5,
    treatment: 'Patient of 3 Years',
    date: 'Verified Client',
    quote: 'I have been going to Marina for the past 3 years and not only is she incredible at what she does and professional, but she’s also such a genuine, kind soul.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Brianne S.',
    location: 'Staten Island, NY',
    rating: 5,
    treatment: 'Aesthetic Rejuvenation',
    date: 'Verified Client',
    quote: 'Marina is absolutely amazing. She does beautiful work. Very professional and kind. She loves what she does!! Highly recommend:) you will not be disappointed',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Wendy F.',
    location: 'Staten Island, NY',
    rating: 5,
    treatment: 'Clinical Aesthetics',
    date: 'Verified Client',
    quote: 'Such a great experience! Marina is so patient, understanding, and accommodating. She takes her time, listens, and gives great results. I highly recommend!',
    verified: true
  }
];

export const BRANDS: BrandPartner[] = [
  {
    id: 'botox',
    name: 'BOTOX® Cosmetic',
    category: 'Neuromodulators',
    tagline: 'FDA-approved wrinkle reduction',
    badge: 'Allergan Aesthetics'
  },
  {
    id: 'juvederm',
    name: 'JUVÉDERM® Collection',
    category: 'HA Dermal Fillers',
    tagline: 'Voluma, Vollure, Volbella',
    badge: 'Allergan Aesthetics'
  },
  {
    id: 'morpheus8',
    name: 'MORPHEUS8®',
    category: 'Subdermal RF Remodeling',
    tagline: 'InMode Fractional Technology',
    badge: 'InMode Aesthetic'
  },
  {
    id: 'sciton',
    name: 'SCITON® BBL HERO',
    category: 'High-Energy Phototherapy',
    tagline: 'BroadBand Light Innovation',
    badge: 'Sciton Medical'
  },
  {
    id: 'hydrafacial',
    name: 'HYDRAFACIAL™ Syndeo',
    category: 'Vortex Dermal Infusion',
    tagline: 'Connected Medical Skincare',
    badge: 'Beauty Health Co.'
  },
  {
    id: 'skinceuticals',
    name: 'SKINCEUTICALS®',
    category: 'Advanced Clinical Skincare',
    tagline: 'Antioxidant Authority',
    badge: 'L’Oréal Dermatological'
  },
  {
    id: 'restylane',
    name: 'RESTYLANE® Kysse & Lyft',
    category: 'Hyaluronic Matrix',
    tagline: 'XpresHAn Technology',
    badge: 'Galderma Aesthetics'
  },
  {
    id: 'sculptra',
    name: 'SCULPTRA® Aesthetic',
    category: 'Biostimulatory PLLA',
    tagline: 'Progressive Collagen Renewal',
    badge: 'Galderma Aesthetics'
  }
];
