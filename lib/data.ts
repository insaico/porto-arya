import { FaCertificate, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const experienceData = [
  {
    title: "Data & Web Developer Intern",
    company: "Dinas Pendidikan dan Kebudayaan Kota Malang",
    location: "Malang, Indonesia",
    description: [
      "Managed and maintained the SOLIKIN (Sistem Online Kartu Induk Kesenian) database.",
      "Supported the team in preparing digital-based reports on the progress of data entered into the system.",
      "Engaged in understanding the fundamental workflow of web applications and data management.",

    ],
    date: "Jul 2024 — Sep 2024",
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    location: "Remote",
    description: [
      "Designed and Developed web applications using modern technologies like Next.js, TypeScript, and Tailwind CSS.",
      "Configured AWS services, such as EC2, S3, and Amplify, to streamline development and deployment processes.",
    ],
    date: "Aug 2023 - Present",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/insaico",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryalink/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ristiantoarya@gmail.com",
    icon: MdMail,
  },
  
] as const;

export const projects = [
  {
    title: "ATS-friendly CV Resume",
    description: "fully ATS-compliant resume solution using Markdown formatting.",
    tags: ["JavaScript", "CSS"],
    github: "https://github.com/insaico/cvmarkdown",
    demo: "https://cvmarkdown.vercel.app",
    icon: "💸",
  },
  {
    title: "SendBy",
    description: "file transfer web application using SolidJS and Firebase, implementing a 6-digit key sharing system.",
    tags: ["SolidJS", "Firebase", "Tailwind CSS", "TypeScript", "HTML"],
    github: "https://github.com/insaico/sendby",
    demo: "https://sendby.vercel.app",
    icon: "🌟",
  },
] as const;

export const certificates = [
  {
    id: 1,
    title: "Alterra Coding Bootcamp",
    institution: "Alterra Academy",
    duration: "Issued: March 2023",
    description: "Mastering back-end development to apply first-principles understanding across languages, databases, and frameworks.",
    link: "https://www.linkedin.com/in/aryalink/details/certifications/",
    icon: FaGithub,
  },
  {
    id: 2,
    title: "Online Scholarship Competition",
    institution: "Medcom.id | Surya Edukasi Bangsa Foundation",
    duration: "Issued: January 2021",
    description: "Awarded 4 years of full tuition coverage by being selected among the top 440 candidates from over 41,400 nationwide applicants.",
    link: "https://www.linkedin.com/in/aryalink/details/certifications/",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
     title: "Dicoding Web Development",
    institution: "Dicoding Academy",
    duration: "Issued: September 2019",
    description: "Mastering front-end development skills to build proper, user-friendly websites.",
    link: "https://www.linkedin.com/in/aryalink/details/certifications/",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    title: "BEKRAF Animation Conference",
    institution: "Badan Ekonomi Kreatif",
    duration: "Issued: September 2019",
    description: "As a selected applicant, I presented a concept character that could be developed as intellectual property (IP).",
    link: "https://www.linkedin.com/in/aryalink/details/certifications/",
    icon: FaLinkedinIn,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Information Systems",
    institution: "Universitas Gajayana",
    duration: "2021 - 2025",
    description:
      "Pursuing Full-Stack Web Development skills through academic projects, gaining experience in Back-End development using PHP (Laravel) and building dynamic Front-End interfaces with Figma, JavaScript and React.",
  },
  {
    id: 2,
    title: "Science Major High School Diploma",
    institution: "SMA Negeri 4 Kota Metro",
    duration: "2015 - 2018",
    description: "Completed Science stream education.",
  },
];
