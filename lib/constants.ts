
export const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "About", href: "/#about" },
  { name: "Partners", href: "/#companies" },
];


export  const services = [
  { name: "Branding"},
  { name: "Design"},
  { name: "Marketing"},
  { name: "Advertisement"},
];

export interface FeatureCard {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  accent: string;
}
export const features: FeatureCard[] = [
  {
    icon: "⏱",
    iconBg: "from-indigo-500 to-indigo-600",
    title: "Saves Time",
    description: "Find companies faster without endless searching",
    accent: "indigo-400",
  },
  {
    icon: "✔",
    iconBg: "from-indigo-600 to-indigo-700",
    title: "Verified Companies",
    description: "Trusted and reviewed providers only",
    accent: "indigo-500",
  },
  {
    icon: "🔍",
    iconBg: "from-indigo-500 to-indigo-600",
    title: "Easy Comparison",
    description: "Compare services in one place",
    accent: "indigo-400",
  },
  {
    icon: "🎁",
    iconBg: "from-indigo-600 to-indigo-700",
    title: "Free for Users",
    description: "No cost to browse or search",
    accent: "indigo-500",
  },
  
];