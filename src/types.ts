export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  borderColor: string;
  glowColor: string;
  badge?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "interior" | "workout" | "equipment";
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

// Custom data store for M.M.G OUTLET
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "offline-form",
    name: "OFFLINE REGISTRATION",
    price: "₦1,000",
    period: "One-time Fee",
    popular: false,
    borderColor: "border-slate-800",
    glowColor: "shadow-slate-900/40",
    features: [
      "Official Membership Card",
      "Gym Access Token",
      "Health & Fitness Assessment Form",
      "General Orientation Guide"
    ]
  },
  {
    id: "daily-gym",
    name: "DAILY ACCESS",
    price: "₦3,000",
    period: "Per Day",
    popular: false,
    borderColor: "border-red-900/50",
    glowColor: "shadow-red-900/30 md:hover:shadow-red-500/20",
    features: [
      "Full Gym Floor Access",
      "Locker Room & Shower Access",
      "High-speed Gym Wi-Fi",
      "Premium Cardio & Strength Machines"
    ]
  },
  {
    id: "monthly-gym",
    name: "ONE MONTH VIP",
    price: "₦20,000",
    period: "Per Month",
    popular: true,
    badge: "MOST POPULAR",
    borderColor: "border-amber-500/70",
    glowColor: "shadow-amber-500/20 md:hover:shadow-amber-500/40",
    features: [
      "Unlimited Access for 30 Days",
      "1x Professional Trainer Session/week",
      "Personalized Diet & Workout Blueprint",
      "Locker, Towel Service & Refreshments",
      "Cardio & Strength Conditioning"
    ]
  },
  {
    id: "quarterly-gym",
    name: "THREE MONTHS FORCE",
    price: "₦60,000",
    period: "3 Months",
    popular: false,
    borderColor: "border-red-600/60",
    glowColor: "shadow-red-600/10 md:hover:shadow-red-600/30",
    features: [
      "All VIP Features Included",
      "Save ₦10,500 compared to monthly",
      "Unrestricted Trainer Consultations",
      "Advanced Body Bio-impedance analysis",
      "Priority Event & Club invites"
    ]
  },
  {
    id: "yearly-gym",
    name: "ANNUAL WARRIOR",
    price: "₦220,000",
    period: "Per Year",
    popular: false,
    badge: "ELITE",
    borderColor: "border-amber-400/80",
    glowColor: "shadow-amber-500/30 md:hover:shadow-amber-500/50",
    features: [
      "Complete 365-Day Access",
      "Premium Branded M.M.G Pack",
      "Fully Dedicated Trainer support",
      "Complimentary Nutrition shakes",
      "2 Invites for friends/month"
    ]
  },
  {
    id: "family-gym",
    name: "FAMILY SYNERGY",
    price: "₦85,000",
    period: "Per Month (4 Members)",
    popular: false,
    borderColor: "border-slate-700",
    glowColor: "shadow-slate-500/10 md:hover:shadow-slate-500/20",
    features: [
      "Up to 4 Direct Family Members",
      "Coordinated Trainer Sessions for Families",
      "Weekly Group Conditioning",
      "Access to Premium Kids Zones"
    ]
  },
  {
    id: "club-gym",
    name: "CLUBS & CORPORATE",
    price: "Custom",
    period: "Annual / Custom",
    popular: false,
    badge: "CUSTOM",
    borderColor: "border-blue-500/50",
    glowColor: "shadow-blue-500/10 md:hover:shadow-blue-500/25",
    features: [
      "Available for Clubs & Corporate Teams",
      "Custom Team-Building Events",
      "Corporate Rewards Program",
      "Dedicated Wellness Seminars"
    ]
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "offer-tour",
    title: "FREE GYM TOUR",
    description: "Explore our top-of-the-line amenities, ultra-premium free-weight zones, and cinematic lighting system guided by a fitness expert before you buy.",
    iconName: "Compass"
  },
  {
    id: "offer-discount",
    title: "EXCLUSIVE DISCOUNTS",
    description: "Refer friends or join as a family or certified athletic club member to unlock dynamic discounted pricing tiers of up to 25% off.",
    iconName: "Percent"
  },
  {
    id: "offer-consultation",
    title: "FREE DIET & BODY CONSULTATION",
    description: "Get a comprehensive baseline analysis detailing muscle volume, body fat percentage, and custom nutrition blueprint maps with our top tier coaches.",
    iconName: "ClipboardCheck"
  },
  {
    id: "offer-refreshments",
    title: "REFRESHMENTS & GIVEAWAYS",
    description: "Stay hydrated and fueled with nutritious post-workout protein shakes, energetic amino acids, and premium M.M.G merchandise giveaways.",
    iconName: "Gift"
  },
  {
    id: "offer-trainers",
    title: "MEET ELITE TRAINERS",
    description: "Receive real-time expert correction and elite-level programming from internationally experienced powerlifters, bodybuilders, and certified trainers.",
    iconName: "Users"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Elite Dumbbell Bay",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=800"
  },
  {
    id: "gal-2",
    title: "Heavy Cardio Training",
    category: "workout",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800"
  },
  {
    id: "gal-3",
    title: "Cinematic Gym Front",
    category: "interior",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800"
  },
  {
    id: "gal-4",
    title: "Precision Squat Cages",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800"
  },
  {
    id: "gal-5",
    title: "Core Conditioning Area",
    category: "workout",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800"
  },
  {
    id: "gal-6",
    title: "Precor Cable Station",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800"
  },
  {
    id: "gal-7",
    title: "Olympic Powerlifting Bar",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800"
  },
  {
    id: "gal-8",
    title: "Atmospheric Weight Deck",
    category: "interior",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ibrahim Sadiq",
    role: "Powerlifter & Club Member",
    quote: "M.M.G OUTLET completely changed the fitness game in Kano State! The atmosphere is highly competitive but supportive. The premium gold-standard free-weight plates and cinematic atmosphere make every lift feel elite.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
  },
  {
    id: "test-2",
    name: "Fatima Aliyu",
    role: "Cardio Devotee",
    quote: "The VIP membership plan has incredible value! The professional trainer helped correct my deadlift posture and completely restructured my daily diet. I lost 8kg of fat and gained clean, healthy muscle definition.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
  },
  {
    id: "test-3",
    name: "Emeka Okafor",
    role: "Amateur Bodybuilder",
    quote: "Having tried several local and standard gyms, M.M.G is truly an international standard luxury outlet. Modern weight racks, spacious dumbbell rows, and high-energy music. Best gym in Tudun Yola!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  }
];
