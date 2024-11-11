export const marketplaceItems = [
  {
    id: 1,
    name: 'Handmade Diwali Diyas',
    price: '₹299',
    image: 'https://images.unsplash.com/photo-1610630694347-8adf4b552ad7?auto=format&fit=crop&q=80&w=400&h=300',
    seller: 'Craft Bazaar',
    location: 'Jaipur, Rajasthan',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Organic Spices Combo',
    price: '₹499',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400&h=300',
    seller: 'Nature\'s Basket',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    reviews: 256
  }
];

export const appointments = [
  {
    id: 1,
    name: 'Dr. Mehta\'s Clinic',
    type: 'General Physician',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.9,
    reviews: 256,
    location: 'Pune, Maharashtra',
    price: '₹500/consultation',
    nextAvailable: 'Today, 4:00 PM',
    category: 'Healthcare',
    verified: true,
    timeSlots: [
      { time: '4:00 PM', available: true },
      { time: '4:30 PM', available: true },
      { time: '5:00 PM', available: false },
      { time: '5:30 PM', available: true },
      { time: '6:00 PM', available: true },
      { time: '6:30 PM', available: false }
    ]
  },
  {
    id: 2,
    name: 'Elegance Beauty Salon',
    type: 'Beauty & Wellness',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.7,
    reviews: 189,
    location: 'Pune, Maharashtra',
    price: '₹800/session',
    nextAvailable: 'Tomorrow, 11:00 AM',
    category: 'Beauty',
    verified: true,
    timeSlots: [
      { time: '11:00 AM', available: true },
      { time: '11:30 AM', available: false },
      { time: '12:00 PM', available: true },
      { time: '12:30 PM', available: true },
      { time: '1:00 PM', available: false },
      { time: '1:30 PM', available: true }
    ]
  },
  {
    id: 3,
    name: 'Adv. Sharma & Associates',
    type: 'Legal Consultation',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.8,
    reviews: 145,
    location: 'Pune, Maharashtra',
    price: '₹2000/consultation',
    nextAvailable: 'Tomorrow, 2:00 PM',
    category: 'Professional',
    verified: true,
    timeSlots: [
      { time: '2:00 PM', available: true },
      { time: '2:30 PM', available: true },
      { time: '3:00 PM', available: false },
      { time: '3:30 PM', available: true },
      { time: '4:00 PM', available: false },
      { time: '4:30 PM', available: true }
    ]
  }
];

export const freelancers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    skill: 'Building Planner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.9,
    reviews: 156,
    hourlyRate: '₹2000/hr',
    location: 'Pune, Maharashtra',
    experience: '10+ years',
    availability: 'Mon-Sat, 9 AM to 6 PM',
    verified: true,
    services: [
      { name: 'Custom House Blueprint', price: '₹15,000' },
      { name: 'Renovation Planning', price: '₹8,000' },
      { name: '3D Modeling', price: '₹12,000' }
    ]
  },
  {
    id: 2,
    name: 'Anil Patil',
    skill: 'Professional Plumber',
    image: 'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=150&h=150',
    rating: 4.7,
    reviews: 89,
    hourlyRate: '₹500/hr',
    location: 'Pune, Maharashtra',
    experience: '8 years',
    availability: '24/7 Emergency Service',
    verified: true,
    services: [
      { name: 'Leak Repair', price: '₹800' },
      { name: 'Pipe Installation', price: '₹2,000' },
      { name: 'Bathroom Fitting', price: '₹3,500' }
    ]
  }
];

export const shops = [
  {
    id: 1,
    name: 'Rajesh\'s Pottery Hub',
    type: 'Handicrafts',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.6,
    reviews: 89,
    location: 'Pune, Maharashtra',
    isOpen: true
  },
  {
    id: 2,
    name: 'Digital Gadgets Store',
    type: 'Electronics',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.4,
    reviews: 156,
    location: 'Chennai, Tamil Nadu',
    isOpen: true
  }
];