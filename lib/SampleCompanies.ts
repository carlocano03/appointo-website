export interface Company {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  contact: string;
  url: string;
  image: string;
  stat: string;
  statLabel: string;
}

export const sampleCompaniesFormatted: Company[] = [
  {
    id: 1,
    title: "Manila Tech Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Makati, Metro Manila",
    category: "Technology",
    contact: "+63 (2) 555-0123",
    url: "/companies/manila-tech-solutions",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    stat: "98%",
    statLabel: "Client Satisfaction",
  },
  {
    id: 2,
    title: "GreenPhil Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Quezon City, Metro Manila",
    category: "Consulting",
    contact: "+63 (2) 555-0456",
    url: "/companies/greenphil-consulting",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    stat: "92%",
    statLabel: "Sustainability Score",
  },
  {
    id: 3,
    title: "PhilFinance Group",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Makati, Metro Manila",
    category: "Finance",
    contact: "+63 (2) 555-0789",
    url: "/companies/philfinance-group",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    stat: "₱5B",
    statLabel: "Assets Managed",
  },
  {
    id: 4,
    title: "HealthPlus Medical Center",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Cebu City, Cebu",
    category: "Healthcare",
    contact: "+63 (32) 555-0321",
    url: "/companies/healthplus-medical-center",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    stat: "97%",
    statLabel: "Recovery Rate",
  },
  {
    id: 5,
    title: "BuildWell Construction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Davao City, Davao del Sur",
    category: "Construction",
    contact: "+63 (82) 555-0654",
    url: "/companies/buildwell-construction",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    stat: "150+",
    statLabel: "Projects Completed",
  },
  {
    id: 6,
    title: "DataPhil Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Taguig, Metro Manila",
    category: "Technology",
    contact: "+63 (2) 555-0987",
    url: "/companies/dataphil-analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    stat: "99%",
    statLabel: "Data Accuracy",
  },
  {
    id: 7,
    title: "LegalLink Philippines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Makati, Metro Manila",
    category: "Legal",
    contact: "+63 (2) 555-0147",
    url: "/companies/legallink-philippines",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    stat: "300+",
    statLabel: "Cases Handled",
  },
  {
    id: 8,
    title: "CreativeMinds PH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Makati, Metro Manila",
    category: "Marketing",
    contact: "+63 (2) 555-0258",
    url: "/companies/creativeminds-ph",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    stat: "4.9★",
    statLabel: "Client Rating",
  },
  {
    id: 9,
    title: "EcoTrans PH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Cebu City, Cebu",
    category: "Logistics",
    contact: "+63 (32) 555-0369",
    url: "/companies/ecotrans-ph",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    stat: "100%",
    statLabel: "Carbon Neutral",
  },
  {
    id: 10,
    title: "SmartLearn Philippines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Quezon City, Metro Manila",
    category: "Education",
    contact: "+63 (2) 555-0741",
    url: "/companies/smartlearn-philippines",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    stat: "15,000+",
    statLabel: "Students Enrolled",
  },
  
];
