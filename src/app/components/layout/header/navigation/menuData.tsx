import { HeaderItem } from "@/type/menu";

const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    href: "#",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Faq", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ]
  },
  {
    label: "Services",
    href: "/services",
   
  },
  {
    label: "Projects",
    href: "/projects",
    submenu: [
      { label: "Projects", href: "/projects" },
      { label: "Digital-Transformation-Platform", href: "/projects/digital-transformation-platform" },
      { label: "Business-Intelligence-Dashboard", href: "/projects/business-intelligence-dashboard" },
      { label: "Customer-Experience-Redesign", href: "/projects/customer-experience-redesign" },
      { label: "Cloud-Modernization-Project", href: "/projects/cloud-modernization-project" },
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    submenu: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Details", href: "/blog/harnessing-digital-transform" }
    ]
  },
  { label: "Contact", href: "contact" },
];

export default headerData;