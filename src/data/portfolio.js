import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiBriefcase,
  FiCode,
  FiCpu,
  FiFigma,
  FiGlobe,
  FiLayers,
  FiMessageCircle,
  FiPenTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "react-icons/si";

// CHANGE THEME COLORS HERE in tailwind.config.js and src/index.css.
// UPDATE PROFILE IMAGE HERE. Add a real image to /public/profile.jpg, then set profileImage to "/profile.jpg".
export const personal = {
  name: "Shaheer Iqbal",
  role: "Web Developer",
  location: "Pakistan",
  email: "shaheeriqballl@gmail.com",
  phone: "03057974482",
  whatsapp: "https://wa.me/923057974482",
  resume: "/shaheer-cv-may-2026.pdf",
  profileImage: "/profile.jpg",
  tagline: "Building modern web experiences with speed, clarity, and creative frontend thinking.",
  intro:
    "I am a passionate web developer and computer science student focused on responsive interfaces, clean user experiences, and practical digital products. I bring strong communication, leadership, and a fast-learning mindset to every project.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// UPDATE SOCIAL LINKS HERE.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaheer-rana-a12b14347",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/shaheerrana01",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewith_shaheer",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923057974482",
    icon: FaWhatsapp,
  },
];

export const heroStats = [
  { value: "07+", label: "Featured builds" },
  { value: "02", label: "Professional roles" },
  { value: "2026", label: "Career focus" },
];

export const aboutCards = [
  {
    title: "Creative Frontend",
    icon: FiLayers,
    text: "I care about interfaces that feel polished, readable, and easy to use across every device.",
  },
  {
    title: "Clear Communication",
    icon: FiMessageCircle,
    text: "My experience in client handling and team leadership helps me translate ideas into useful outcomes.",
  },
  {
    title: "Growth Mindset",
    icon: FiZap,
    text: "I learn quickly, improve continuously, and treat every project as a chance to sharpen my craft.",
  },
];

export const technicalSkills = [
  { name: "HTML", level: 95, icon: SiHtml5, tone: "from-orange-500 to-coral" },
  { name: "CSS", level: 90, icon: SiCss, tone: "from-cyan to-blue-600" },
  { name: "JavaScript", level: 82, icon: SiJavascript, tone: "from-yellow-300 to-amber-500" },
  { name: "React.js", level: 78, icon: SiReact, tone: "from-cyan to-mint" },
  { name: "Figma", level: 84, icon: SiFigma, tone: "from-violet to-pink-500" },
];

export const softSkills = [
  { name: "English Communication", icon: FiGlobe },
  { name: "Team Leadership", icon: FiUsers },
  { name: "Problem Solving", icon: FiCpu },
  { name: "Client Handling", icon: FiBriefcase },
  { name: "Creativity", icon: FiPenTool },
];

// ADD NEW PROJECT HERE.
export const projects = [
  {
    title: "Ecommerce Web Store",
    category: "Frontend",
    tech: ["HTML", "CSS"],
    description:
      "A responsive ecommerce landing experience built around product clarity, strong visual hierarchy, and clean shopping interactions for modern retail brands.",
    github: "https://github.com/shaheerrana01/ecommerce-store",
    live: "#contact",
    accent: "cyan",
  },
  {
    title: "Amazon Clone",
    category: "Frontend",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    description:
      "A responsive Amazon-inspired shopping interface with marketplace-style navigation, product presentation, and polished ecommerce layout structure.",
    github: "https://github.com/shaheerrana01/amazonclone",
    live: "https://amazonclone-six-beryl.vercel.app/",
    accent: "violet",
  },
  {
    title: "Trillionaire Shop",
    category: "Ecommerce",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    description:
      "A modern ecommerce storefront focused on premium product browsing, clean conversion paths, responsive spacing, and a client-ready shopping experience.",
    github: "https://github.com/shaheerrana01/trillionaireshop",
    live: "https://trillionaireshop.vercel.app/",
    accent: "cyan",
  },
  {
    title: "Currency Converter",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A clean real-time currency conversion interface designed with API integration in mind, precise input states, and a simple financial workflow.",
    github: "https://github.com/shaheerrana01/currency-converter",
    live: "#contact",
    accent: "mint",
  },
  {
    title: "Password Generator",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A utility-focused password generator concept designed for quick secure password creation, simple controls, readable output, and practical frontend logic.",
    github: "https://github.com/shaheerrana01/passwordGenerator",
    live: "",
    accent: "mint",
  },
  {
    title: "Erozgar Bridge",
    category: "Startup",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A startup-style digital connectivity concept that helps people discover employment opportunities through focused content, accessible navigation, and trust-building UI.",
    github: "https://github.com/shaheerrana01/erozgar-bridge",
    live: "#contact",
    accent: "coral",
  },
  {
    title: "JazzWorld Clone",
    category: "UI/UX",
    tech: ["Figma", "UI/UX Design"],
    description:
      "A mobile JazzWorld redesign case study with wallet balance, usage tracking, package discovery, support navigation, and colorful telecom service flows.",
    github: "https://figma.com/@shaheerrana01",
    live: "https://figma.com/@shaheerrana01",
    accent: "violet",
    previewImages: ["/jazz-world-s1.png", "/jazz-world-s2.png"],
  },
];
// UPDATE EXPERIENCE HERE.
export const experience = [
  {
    company: "Easypaisa Digital Bank",
    role: "BDE & Team Lead",
    period: "Professional Experience",
    summary:
      "Led business development communication, supported team coordination, and handled client-facing interactions with a focus on trust, clarity, and execution.",
    points: [
      "Managed client communication and helped convert opportunities into practical business actions.",
      "Guided team members with a leadership-first approach and steady daily coordination.",
      "Built confidence in professional communication, planning, and customer handling.",
    ],
  },
  {
    company: "Ruwwaad",
    role: "Social Media Handler",
    period: "Creative Experience",
    summary:
      "Handled social communication and digital content with attention to brand tone, audience connection, and consistent presentation.",
    points: [
      "Created and managed content ideas for social platforms.",
      "Supported visual branding and communication across digital touchpoints.",
      "Strengthened creative thinking through audience-focused messaging.",
    ],
  },
];

// UPDATE CERTIFICATIONS HERE.
export const certifications = [
  {
    title: "Certificate in IT Web Development",
    issuer: "NAVTTC",
    description:
      "A practical web development certification focused on foundational frontend skills, structured learning, and employable digital capability.",
  },
  {
    title: "English Language Scholarship Program",
    issuer: "ACCESS 2024-2026",
    description:
      "A long-form communication program strengthening English speaking, professional confidence, and cross-cultural presentation skills.",
  },
];
