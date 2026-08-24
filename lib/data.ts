export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  technologies: string[];
  link: string | null; // null => "No Link"
  keyFeatures?: string[];
};

export const profile = {
  name: "ZiyadHamzah",
  logo: "ZiyadHamzah",
  role: "Frontend Developer",
  school: "SMK Al-Hadiid Cileungsi",
  major: "Teknik Komputer dan Jaringan (TKJ)",
  graduationYear: "2026",
  careerGoal: "Engineering Cyber Security",
  location: "Cileungsi, Bogor, Indonesia",
  quote: "Turning ideas into clean, modern, and meaningful digital experiences.",
  heroParagraph:
    "Saya adalah fresh graduate SMK Al-Hadiid Cileungsi jurusan Teknik Komputer dan Jaringan yang memiliki ketertarikan pada frontend development, UI/UX, teknologi web, IoT, dan cyber security. Saya senang membangun website yang clean, responsive, modern, interaktif, dan memiliki visual yang kuat.",
  aboutParagraph:
    "Saya merupakan fresh graduate SMK Al-Hadiid Cileungsi jurusan Teknik Komputer dan Jaringan (TKJ) tahun 2026. Saya memiliki passion dalam frontend development, UI/UX, dan teknologi digital. Saya berfokus pada pembuatan website yang clean, responsive, modern, serta memiliki visual yang menarik dan pengalaman pengguna yang baik.",
  cvLink: null as string | null,
  socials: {
    github: null as string | null,
    linkedin: null as string | null,
    instagram: null as string | null,
    tiktok: null as string | null,
  },
};

export const stats = [
  { label: "PROJECTS", value: "3+", icon: "code" as const },
  { label: "CERTIFICATES", value: "1+", icon: "medal" as const },
  { label: "COMPLETED WORKS", value: "2+", icon: "globe" as const },
];

export const heroSkillPills = ["HTML / CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"];

export const projects: Project[] = [
  {
    slug: "hydroponik-iot",
    title: "Hydroponik IoT",
    description:
      "Dashboard monitoring dan control system untuk sistem hidroponik berbasis IoT dengan pemantauan kondisi air dan lingkungan secara real-time.",
    longDescription:
      "Hydroponik IoT merupakan project website dashboard yang dirancang untuk membantu monitoring dan pengendalian sistem hidroponik. Dashboard menampilkan data kondisi air dan lingkungan serta menyediakan fitur control untuk membantu proses perawatan tanaman.",
    tags: ["Monitoring", "Control System", "IoT", "Dashboard"],
    technologies: ["HTML", "CSS", "JavaScript", "IoT"],
    link: null,
    keyFeatures: [
      "Real-time monitoring",
      "Monitoring pH air",
      "Monitoring TDS/PPM",
      "Monitoring suhu air dan udara",
      "Monitoring volume air tandon",
      "Auto dosing",
      "Auto pH balancer",
      "Scheduled water circulation",
      "Auto grow light",
    ],
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "Website personal branding ZiyadHamzah untuk menampilkan profil, skill, project, dan perjalanan di bidang teknologi.",
    tags: ["Personal Branding", "Portfolio"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: null,
    keyFeatures: [],
  },
  {
    slug: "travel-sahabat-qolbu-digital-support",
    title: "Travel Sahabat Qolbu Digital Support",
    description:
      "Digital support project yang mencakup pembuatan desain, editing video, pengelolaan data, dan kebutuhan digital untuk bisnis travel.",
    tags: ["Design", "Video Editing", "Digital Support"],
    technologies: ["Canva", "CapCut", "Digital Support"],
    link: null,
    keyFeatures: [],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  link: string | null;
};

// No verified certificate data was provided — kept as an editable placeholder.
// Replace with real certificate details when available.
export const certificates: Certificate[] = [];

export type TechItem = {
  name: string;
  color: string; // brand color used for icon bg / glow
  textColor?: string;
  glyph: string; // short glyph/letters shown inside the icon box
};

export const techStack: TechItem[] = [
  { name: "HTML5", color: "#e34f26", glyph: "5" },
  { name: "CSS3", color: "#264de4", glyph: "3" },
  { name: "JavaScript", color: "#f7df1e", textColor: "#000000", glyph: "JS" },
  { name: "TypeScript", color: "#3178c6", glyph: "TS" },
  { name: "React.js", color: "#20232a", textColor: "#61dafb", glyph: "⚛" },
  { name: "Next.js", color: "#000000", glyph: "N" },
  { name: "Tailwind CSS", color: "#0f172a", textColor: "#38bdf8", glyph: "≈" },
  { name: "PHP", color: "#777bb4", glyph: "php" },
  { name: "Laravel", color: "#ff2d20", glyph: "L" },
  { name: "MySQL", color: "#4479a1", glyph: "DB" },
  { name: "Python", color: "#3776ab", glyph: "Py" },
  { name: "Node.js", color: "#3c873a", glyph: "JS" },
  { name: "Git", color: "#f05032", glyph: "Git" },
  { name: "Figma", color: "#a259ff", glyph: "Fg" },
  { name: "Canva", color: "#00c4cc", glyph: "Cv" },
];
