
/* Solution */
export const solutionData = [
  {
    title: "Digital Transformation",
    icon: "mdi:rocket-launch-outline",
    description:
      "Modernize operations with innovative digital solutions that improve efficiency, productivity, and business performance.",
  },
  {
    title: "Business Strategy & Growth",
    icon: "mdi:briefcase-outline",
    description:
      "Develop actionable strategies that help businesses scale, adapt to change, and achieve sustainable growth.",
  },
  {
    title: "Web & Software Development",
    icon: "mdi:web",
    description:
      "Build responsive websites, web applications, and custom software solutions designed around your business needs.",
  },
  {
    title: "Technology Consulting",
    icon: "mdi:lightbulb-on-outline",
    description:
      "Leverage expert guidance to identify opportunities, solve challenges, and maximize the value of technology investments.",
  },
  {
    title: "Data & Analytics",
    icon: "mdi:chart-line",
    description:
      "Turn business data into actionable insights that support smarter decisions and measurable results.",
  },
  {
    title: "Customer Experience Solutions",
    icon: "mdi:account-group-outline",
    description:
      "Create seamless customer journeys that improve engagement, satisfaction, and long-term loyalty.",
  },
  {
    title: "Cloud & Infrastructure",
    icon: "mdi:cloud-outline",
    description:
      "Secure and optimize your digital infrastructure with scalable cloud solutions built for reliability and growth.",
  },
  {
    title: "Cybersecurity & Risk Management",
    icon: "mdi:shield-check-outline",
    description:
      "Protect your business assets, systems, and data with proactive security strategies and best practices.",
  },
  {
    title: "Innovation & Product Development",
    icon: "mdi:cog-outline",
    description:
      "Transform ideas into market-ready products and services that create value and drive competitive advantage.",
  },
  {
    title: "Business Process Optimization",
    icon: "mdi:sync-circle",
    description:
      "Streamline workflows and eliminate inefficiencies to improve operational performance and reduce costs.",
  },
];



export const footerLinks: { link: string }[] = [
  {
    link: "Customer Experience",
  },
  {
    link: "Business Strategy",
  },
  {
    link: "Training Programs",
  },
  {
    link: "ESG Consulting",
  },
  {
    link: "Development Hub",
  },
  {
    link: "About Us",
  },
  {
    link: "Our Team",
  },
  {
    link: "Recognitions",
  },
  {
    link: "Careers",
  },
  {
    link: "News & Insights",
  },
  {
    link: "Contact Us",
  },
  {
    link: "Feedback",
  },
  {
    link: "Privacy Policy",
  },
  {
    link: "Security",
  },
  {
    link: "Disclaimer",
  },
];


/* Services */
export const services = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    icon: "mdi:rocket-launch-outline",
    image: "/images/services/digital.jpg",
    href: "/services/digital-transformation",
    description:
      "Modernize operations with innovative digital solutions that improve efficiency, productivity, and overall business performance.",
  },
  {
    id: "business-strategy",
    title: "Business Strategy",
    icon: "mdi:briefcase-outline",
    image: "/images/services/business.jpg",
    href: "/services/business-strategy",
    description:
      "Develop practical strategies that help businesses scale, adapt to change, and achieve sustainable growth.",
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    icon: "mdi:lightbulb-on-outline",
    image: "/images/services/technology.jpg",
    href: "/services/technology-consulting",
    description:
      "Get expert guidance to identify technology opportunities, solve business challenges, and maximize digital investments.",
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    icon: "mdi:account-group-outline",
    image: "/images/services/customer.jpg",
    href: "/services/customer-experience",
    description:
      "Create seamless customer experiences that strengthen engagement, improve satisfaction, and build lasting relationships.",
  },
  {
    id: "training-development",
    title: "Training & Development",
    icon: "mdi:school-outline",
    image: "/images/services/training.jpg",
    href: "/services/training-development",
    description:
      "Equip teams with practical skills, knowledge, and capabilities needed to perform effectively in a changing business environment.",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    icon: "mdi:chart-line",
    image: "/images/services/data.jpg",
    href: "/services/data-analytics",
    description:
      "Turn business data into meaningful insights that support smarter decisions, identify opportunities, and improve performance.",
  },
  {
    id: "process-optimization",
    title: "Process Optimization",
    icon: "mdi:cog-sync-outline",
    image: "/images/services/process.jpg",
    href: "/services/process-optimization",
    description:
      "Streamline workflows, reduce inefficiencies, and improve business processes for greater productivity and operational performance.",
  },
  {
    id: "innovation-product-development",
    title: "Innovation & Product Development",
    icon: "mdi:lightbulb-multiple-outline",
    image: "/images/services/innovation.jpg",
    href: "/services/innovation-product-development",
    description:
      "Transform ideas into practical products and solutions that create value, solve real problems, and support long-term growth.",
  },
];


/* Projects */
export const projects = [
  {
    id: "digital-transformation-platform",
    slug: "digital-transformation-platform",
    title: "Digital Transformation Platform",
    category: "Digital Transformation",
    image: "/images/projects/project-1.jpg",

    shortDescription:
      "A modern platform that streamlined business operations and improved organizational efficiency.",

    description:
      "SwiftCharge partnered with a growing enterprise to modernize internal processes through a centralized digital platform. The solution improved collaboration, reduced manual workflows, and enhanced operational visibility across departments.",

    challenge:
      "The client relied on disconnected systems and manual processes, resulting in inefficiencies and limited visibility into business operations.",

    solution:
      "We designed and implemented a scalable digital platform that unified workflows, automated repetitive tasks, and provided real-time reporting capabilities.",

    results: [
      "40% improvement in operational efficiency",
      "Reduced manual processes",
      "Improved team collaboration",
      "Real-time business insights",
    ],

    services: [
      "Digital Transformation",
      "Technology Consulting",
      "Process Optimization",
    ],

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Cloud Infrastructure",
    ],

    client: "Enterprise Client",
    duration: "6 Months",
    year: "2026",
  },

  {
    id: "business-intelligence-dashboard",
    slug: "business-intelligence-dashboard",
    title: "Business Intelligence Dashboard",
    category: "Data & Analytics",
    image: "/images/projects/project-2.jpg",

    shortDescription:
      "An analytics solution that transformed raw business data into actionable insights.",

    description:
      "We developed a centralized analytics dashboard that enabled leadership teams to monitor performance, identify trends, and make data-driven decisions faster.",

    challenge:
      "Critical business data was scattered across multiple sources, making reporting slow and inconsistent.",

    solution:
      "A unified dashboard was created to aggregate, visualize, and analyze business data in real time.",

    results: [
      "Faster reporting cycles",
      "Improved decision-making",
      "Single source of truth",
      "Enhanced performance tracking",
    ],

    services: [
      "Data & Analytics",
      "Technology Consulting",
    ],

    technologies: [
      "Next.js",
      "Chart.js",
      "Node.js",
      "SQL",
    ],

    client: "Financial Services Company",
    duration: "4 Months",
    year: "2026",
  },

  {
    id: "customer-experience-redesign",
    slug: "customer-experience-redesign",
    title: "Customer Experience Redesign",
    category: "Customer Experience",
    image: "/images/projects/project-3.jpg",

    shortDescription:
      "Improving customer engagement through a redesigned digital experience.",

    description:
      "A complete redesign focused on usability, accessibility, and customer engagement, leading to improved satisfaction and retention.",

    challenge:
      "Customers experienced friction throughout key digital touchpoints.",

    solution:
      "We redesigned customer journeys and optimized the digital experience across multiple channels.",

    results: [
      "Higher engagement rates",
      "Improved customer satisfaction",
      "Better user experience",
      "Increased retention",
    ],

    services: [
      "Customer Experience",
      "Business Strategy",
    ],

    technologies: [
      "Next.js",
      "Figma",
      "Analytics Tools",
    ],

    client: "Retail Brand",
    duration: "5 Months",
    year: "2026",
  },

  {
    id: "cloud-modernization-project",
    slug: "cloud-modernization-project",
    title: "Cloud Modernization Project",
    category: "Cloud Infrastructure",
    image: "/images/projects/project-4.jpg",

    shortDescription:
      "Migration and optimization of business infrastructure in the cloud.",

    description:
      "SwiftCharge helped the client migrate legacy systems to a secure cloud environment, improving scalability and reliability.",

    challenge:
      "Legacy infrastructure limited growth and created maintenance challenges.",

    solution:
      "A phased cloud migration strategy was implemented with minimal disruption to business operations.",

    results: [
      "Improved scalability",
      "Reduced infrastructure costs",
      "Enhanced security",
      "Higher system reliability",
    ],

    services: [
      "Cloud Infrastructure",
      "Cybersecurity",
    ],

    technologies: [
      "AWS",
      "Cloud Services",
      "Security Tools",
    ],

    client: "Technology Company",
    duration: "8 Months",
    year: "2026",
  },
];


/* Testimonials */
export const testimonial = [
  {
    id: 1,
    name: "John Doe",
    position: "Managing Director",
    image: "/images/testimonials/client-1.jpg",
    text: "SwiftCharge helped us streamline our processes and improve how we manage our digital operations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Business Manager",
    image: "/images/testimonials/client-2.jpg",
    text: "The team understood our challenges and provided practical solutions that made a real difference to our business.",
  },

  {
    id:3,
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/client-3.jpg",
    text: "We’ve been working with SwiftCharge for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They’ve become a key contributor to our growth and success.",
  }
];


/* WhyChooseUs */
export const whyChooseUs = [
  {
    id: 1,
    title: "Industry Expertise",
    icon: "mdi:briefcase-account-outline",
    description:
      "Our team combines business insight and technical expertise to deliver solutions that address real-world challenges and opportunities.",
  },

  {
    id: 2,
    title: "Tailored Solutions",
    icon: "mdi:tune-variant",
    description:
      "Every organization is unique. We design strategies, systems, and services that align with your goals, processes, and long-term vision.",
  },

  {
    id: 3,
    title: "Results-Driven Approach",
    icon: "mdi:chart-line",
    description:
      "We focus on measurable outcomes that improve efficiency, enhance customer experiences, and support business growth.",
  },

  {
    id: 4,
    title: "Innovation & Technology",
    icon: "mdi:rocket-launch-outline",
    description:
      "We leverage modern technologies and innovative thinking to help organizations stay competitive in a rapidly evolving market.",
  },

  {
    id: 5,
    title: "Collaborative Partnership",
    icon: "mdi:account-group-outline",
    description:
      "We work closely with your team, providing guidance, support, and transparency throughout every stage of the engagement.",
  },

  {
    id: 6,
    title: "Scalable Solutions",
    icon: "mdi:trending-up",
    description:
      "Our solutions are designed to grow with your business, ensuring long-term value and adaptability as your needs evolve.",
  },
];



/* Companies */
export const companies = [
  {
    name: "TechNova",
    image: "/images/companies/technova.png",
  },
  {
    name: "NexusCorp",
    image: "/images/companies/nexuscorp.png",
  },
  {
    name: "CloudSphere",
    image: "/images/companies/cloudsphere.png",
  },
  {
    name: "DataBridge",
    image: "/images/companies/databridge.png",
  },
  {
    name: "InnovaWorks",
    image: "/images/companies/innovaworks.png",
  },
  {
    name: "FutureGrid",
    image: "/images/companies/futuregrid.png",
  },
  {
    name: "VisionEdge",
    image: "/images/companies/visionedge.png",
  },
];


/* About Us*/
export const about = [
  
  {
    title: "Our Mission",
    description: "To help businesses achieve sustainable growth through innovative technology and strategic solutions.",
    icon: "mdi:target",
  },
  {
    title: "Our Vision",
    description: "To become a trusted partner for organizations seeking digital excellence and business transformation.",
    icon: "mdi:eye-outline",
  },
  {
    title: "Our Values",
    description: "Innovation, Integrity, Collaboration, Excellence, and Customer Success.",
    icon: "mdi:handshake-outline",
  }

]


/* Team (LeadrshipTeam) */
/* export const team = [
  {
    name: "David Okafor",
    role: "Chief Executive Officer",
    image: "/images/team/ceo.jpg",
    bio: "Provides strategic leadership and drives innovation across the organization."
  },
  {
    name: "Grace Johnson",
    role: "Chief Operations Officer",
    image: "/images/team/coo.jpg",
    bio: "Ensures operational excellence and successful project delivery."
  },
  {
    name: "Michael Adeyemi",
    role: "Head of Technology",
    image: "/images/team/cto.jpg",
    bio: "Leads digital transformation initiatives and technology strategy."
  },
  {
    name: "Sarah Williams",
    role: "Business Development Director",
    image: "/images/team/bd.jpg",
    bio: "Builds client relationships and identifies growth opportunities."
  }
]; */

export const team = [
  {
    name: "David Okafor",
    role: "Chief Executive Officer",
    image: "/images/team/ceo.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    bio: "Provides strategic leadership and drives innovation across the organization."
  },
  {
    name: "Grace Johnson",
    role: "Chief Operating Officer",
    image: "/images/team/coo.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
     bio: "Leads digital transformation initiatives and technology strategy."
  },
  {
    name: "Michael Adeyemi",
    role: "Lead Product Designer",
    image: "/images/team/cto.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    bio: "Leads digital transformation initiatives and technology strategy."
  },
  {
    name: "Sarah Williams",
    role: "Head of Marketing",
    image: "/images/team/bd.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    bio: "Provides strategic leadership and drives innovation across the organization."
  },
];


