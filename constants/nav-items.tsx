import { FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";

export const navItems = [
  { name: "All", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <FaUser /> },
  { name: "Projects", href: "/projects", icon: <FaFolderOpen /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  { name: "Chatbot", href: "/chat", icon: <FaEnvelope /> },
];
