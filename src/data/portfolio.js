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
  location: "Lahore, Pakistan",
  email: "shaheeriqballl@gmail.com",
  phone: "03057974482",
  whatsapp: "https://wa.me/923057974482",
  resume: "/shaheer-cv-september-2026.pdf",
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
  { value: "07", label: "Selected projects" },
  { value: "05", label: "Professional roles" },
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
    "title": "Currency Converter",
    "category": "JavaScript",
    "tech": ["HTML", "CSS", "JavaScript", "Exchange Rate API"],
    "description": "Convert between 166 currencies using current exchange rates, swap currencies, and switch between dark and light themes.",
    "github": "https://github.com/shaheerrana01/currency-converter",
    "live": "https://currency-converter-shaheer.vercel.app",
    "privateSource": false,
    "accent": "cyan",
    "image": "/projects/currency-converter.svg"
  },
  {
    "title": "Zaiqa Ghar",
    "category": "Full-stack",
    "tech": [
      "Next.js",
      "Supabase",
      "TypeScript"
    ],
    "description": "Meal requests, manager menus, Urdu/English support and cash-on-delivery tracking.",
    "github": "https://github.com/shaheerrana01/zaiqaghar12",
    "live": "https://zaiqaghar12.vercel.app",
    "privateSource": true,
    "accent": "cyan",
    "image": "/projects/zaiqa.png"
  },
  {
    "title": "RozgarBridge",
    "category": "Full-stack",
    "tech": [
      "React",
      "Supabase"
    ],
    "description": "A bilingual jobs platform with account access, job discovery and administration.",
    "github": "https://github.com/shaheerrana01/Rozgarbridge",
    "live": "https://rozgarbridge.vercel.app",
    "privateSource": true,
    "accent": "mint",
    "image": "/projects/rozgarbridge.png"
  },
  {
    "title": "Trillionaire Shop",
    "category": "Frontend",
    "tech": [
      "HTML",
      "CSS"
    ],
    "description": "A fashion storefront interface with product collections and a responsive landing page.",
    "github": "https://github.com/shaheerrana01/trillionaireshop",
    "live": "https://trillionaireshop.vercel.app",
    "privateSource": false,
    "accent": "violet",
    "image": "/projects/trillionaire.png"
  },
  {
    "title": "Amazon Clone",
    "category": "Frontend",
    "tech": [
      "HTML",
      "CSS"
    ],
    "description": "An Amazon-inspired frontend layout showcasing navigation, product cards and retail page design.",
    "github": "https://github.com/shaheerrana01/amazonclone",
    "live": "https://amazonclone-six-beryl.vercel.app",
    "privateSource": false,
    "accent": "coral",
    "image": "/projects/amazon.png"
  },
  {
    "title": "Password Generator",
    "category": "JavaScript",
    "tech": [
      "React",
      "JavaScript"
    ],
    "description": "Generate and copy passwords with adjustable length, numbers and symbols.",
    "github": "https://github.com/shaheerrana01/passwordGenerator",
    "live": "https://password-generator-nine-mu-43.vercel.app",
    "privateSource": false,
    "accent": "cyan",
    "image": "/projects/password.png"
  },
  {
    "title": "JazzWorld Design",
    "category": "UI/UX",
    "tech": [
      "Figma",
      "UI Design"
    ],
    "description": "A mobile interface design study. View the original screen designs in the full-size gallery.",
    "github": "https://figma.com/@shaheerrana01",
    "live": "/jazzworld.html",
    "accent": "violet",
    "previewImages": [
      "/jazz-world-s1.png",
      "/jazz-world-s2.png"
    ]
  }
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
      "Led a team of 10–15 members, coordinating daily operations, sales strategies, and targets.",
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
  {
    company: "SkyLux Travel",
    role: "Independent Travel Manager",
    period: "Remote & Freelance",
    summary: "Managed international luxury travel enquiries and premium flight sales, combining tailored planning with attentive customer service.",
    points: [
      "Handled premium leads, sales negotiations, and personalised international itineraries.",
      "Managed remote follow-ups and supported customers with global booking changes.",
    ],
  },
  {
    company: "Tricon Marketing",
    role: "Tele Sales Representative",
    period: "2025",
    summary: "Worked on an international campaign, building experience in customer communication and telephone sales.",
    points: ["Handled customer enquiries and strengthened professional sales communication."],
  },
  {
    company: "Fellows of Heaven",
    role: "Operations & Communications Internee",
    period: "Two-month internship",
    summary: "Gained practical experience in operations and communications during a two-month internship.",
    points: ["Received a Certificate of Excellence from Fellows of Heaven."],
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
  {
    title: "Certificate of Excellence",
    issuer: "Fellows of Heaven",
    description: "Awarded following a two-month internship in operations and communications.",
  },
];
