// Mock data for Vyoma Joshi's Portfolio

export const personalInfo = {
    name: "Vyoma Joshi",
    title: "Frontend Developer | Full Stack Engineer | WordPress Developer",
    location: "Mumbai, India",
    email: "vyomayjh@gmail.com",
    linkedin: "https://linkedin.com/in/vyomajoshi",
    github: "https://github.com/vyomadesai",
    intro: "Frontend Developer transitioning into Full Stack roles, passionate about building responsive, user-friendly, and scalable applications. Experienced across React, Node.js, MySQL, MongoDB, and modern UI/UX practices."
  };

  export const experiences = [
    {
      id: 1,
      company: "HealthMed Pharmacy",
      role: "Full Stack Developer",
      duration: "October 2023 – Present",
      highlight: [
      "Built a responsive e-commerce pharmacy platform with React.js & Tailwind CSS, enabling user-friendly prescription management and medication delivery.",
      "Automated prescription refill & expiry reminders, improving efficiency and helping staff track medications easily.",
      "Developed patient intake forms for seamless onboarding and accurate demographic data capture.",
      "Implemented secure server-side application with Node.js & Express.js for transactions, authentication, and data processing.",
      "Managed MySQL databases for reliable storage of user data, prescriptions, and order histories.",
      "Created product websites with WordPress & design tools (Canva/Figma), improving brand consistency and enabling non-technical teams to manage content with 90% user satisfaction.",
      ],
      technologies: ["React", "Node.js", "MySQL", "Express.js", "MongoDB", "TailwindCSS", "Figma", "Canva", "Wordpress", "UI/UX"]
    },
    {
      id: 2,
      company: "Suspect Technologies",
      role: "Front End Developer",
      duration: "September 2022 – October 2023",
      highlight: [
      "Created a web-based application to annotate (face landmark, bounding box) and label machine learning datasets using React and Tailwind CSS",
      "Integrated backend API with front end UI workflows using Node.js, Express.js, MongoDB.",
      "Developed core functionality of the system enabling users to mark objects within images through the front-end interface. This data is then sent to the backend, processed, and stored in the MongoDB database.",
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "API Integration", "Express.js", "MongoDB", "Node.js"]
    },
    {
      id: 3,
      company: "EyeVerify",
      role: "Front End Developer Intern",
      duration: "Jan 2022 - May 2022",
      highlight: [
      "Designed a front-end interface for a real-time image verification system using React, JavaScript, incorporating camera integration and efficient server communication",
      "Developed direct linkage to a Python-based server, empowering researchers to assess their algorithms across multiple devices, evaluating performance under varying conditions such as lighting and image capture angles and deployed web-stack development to allow users to select and utilize their system's camera for real-time previews.",
      "Implemented a capture feature, enabling users to take photos and transmit them to a processing server via web protocols.",
      ],
      technologies: ["React", "Python", "JavaScript", "Real-time Processing"]
    },
    {
      id: 4,
      company: "Venus Infotech",
      role: "Frontend Developer",
      duration: "June 2019 – December 2020",
      highlight: [
      "Developed a CRM (Customer Relationship Management) web application by using React.js, HTML5, CSS3, SASS, LESS and JavaScript to automate invoice generation",
      "Developed various features including contact management, lead tracking, and customer communication, invoice creation, payment tracking, receipt management, inventory tracking and pricing management.",
      ],
      technologies: ["React", "HTML5", "CSS3/SASS/LESS", "CRM Systems"]
    },
    {
      id: 5,
      company: "Machadalo",
      role: "Frontend Developer",
      duration: "April 2018 – May 2019",
      highlight: [
      "Created, designed, and developed user-friendly and intuitive real time user-interface platform using React.js, JavaScript for the company that improved lead conversions by 40%",
      "Developed a range of features, such as lead tracking and management, customer relationship management, data visualization, analytics using D3.js and Chart.js and reporting for a hyperlocal advertising company.",
      ],
      technologies: ["React", "CSS", "HTML5", "Analytics", "UI/UX", "Dashboard"]
    },
    {
      id: 6,
      company: "Redcherry Analytics",
      role: "Frontend Developer",
      duration: "September 2016 – March 2018",
      highlight: [
      "Developed real-time dynamic dashboards using JavaScript, HTML, CSS, jQuery for tracking IoT data benefiting prominent clients. These dashboards enabled efficient monitoring of temperature, humidity values, and energy management systems",
      "Provided insights and actionable information to help improve operational efficiency and reduce downtime.",
      ],
      technologies: ["JavaScript", "jQuery", "IoT", "Data Visualization", "C3.js", "Chart.js"]
    }
  ];
  
  export const skills = {
    frontend: [
      { name: "React", icon: "⚛️", color: "bg-blue-500", level: "Expert" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-teal-500", level: "Expert" },
      { name: "JavaScript", icon: "JS", color: "bg-yellow-500", level: "Expert" },
      { name: "HTML5", icon: "HTML", color: "bg-orange-500", level: "Expert" },
      { name: "CSS3", icon: "CSS", color: "bg-blue-600", level: "Expert" },
      { name: "Bootstrap", icon: "B", color: "bg-purple-500", level: "Advanced" },
      { name: "jQuery", icon: "jQ", color: "bg-blue-400", level: "Advanced" }
    ],
    backend: [
      { name: "Node.js", icon: "N", color: "bg-green-600", level: "Advanced" },
      { name: "Express.js", icon: "E", color: "bg-gray-600", level: "Advanced" },
      { name: "MySQL", icon: "SQL", color: "bg-blue-700", level: "Advanced" },
      { name: "MongoDB", icon: "M", color: "bg-green-500", level: "Advanced" },
      { name: "MS SQL", icon: "MS", color: "bg-red-600", level: "Intermediate" }
    ],
    tools: [
      { name: "Wordpress", icon: "W", color: "bg-gray-600", level: "Expert" },
      { name: "Figma", icon: "F", color: "bg-gray-400", level: "Intermediate" },
      { name: "Canva", icon: "C", color: "bg-gray-800", level: "Expert" },
      { name: "D3.js", icon: "D3", color: "bg-orange-600", level: "Advanced" },
      { name: "Chart.js", icon: "📊", color: "bg-pink-500", level: "Advanced" },
      { name: "Tableau", icon: "T", color: "bg-blue-500", level: "Intermediate" },
      { name: "PowerBI", icon: "P", color: "bg-yellow-600", level: "Intermediate" },
      { name: "GitHub", icon: "G", color: "bg-gray-800", level: "Expert" }
    ]
  };
  
  export const education = [
    {
      id: 1,
      degree: "MS Computer Science",
      institution: "University of Missouri, Kansas City",
      year: "2022",
      type: "Masters"
    },
    {
      id: 2,
      degree: "M.Tech Computer Engineering",
      institution: "VJTI, Mumbai",
      year: "2016",
      type: "Masters"
    },
    {
      id: 3,
      degree: "BE Computer Engineering",
      institution: "KJ Somaiya, Mumbai",
      year: "2014",
      type: "Bachelors"
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "VedaAHC Healthcare Platform",
      description: "Comprehensive healthcare platform with patient management, appointment scheduling, and medical records.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://vedaahc.com",
      githubUrl: "#", // placeholder
      image: "/api/placeholder/400/250",
      status: "Live"
    },
    {
      id: 2,
      title: "ThinkPrint Solutions",
      description: "Modern printing solutions platform with custom design tools and order management system.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
      liveUrl: "https://thinkprint.in",
      githubUrl: "#", // placeholder
      image: "/api/placeholder/400/250",
      status: "Live"
    },
    {
      id: 3,
      title: "Pharmacy E-commerce Platform",
      description: "Complete e-commerce solution for pharmacy with prescription management and automated workflows.",
      technologies: ["React", "Node.js", "MySQL", "Express.js"],
      liveUrl: "#", // placeholder
      githubUrl: "#", // placeholder
      image: "/api/placeholder/400/250",
      status: "In Development"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization components.",
      technologies: ["React", "D3.js", "Chart.js", "JavaScript"],
      liveUrl: "#", // placeholder
      githubUrl: "#", // placeholder
      image: "/api/placeholder/400/250",
      status: "Completed"
    },
    {
      id: 5,
      title: "IoT Data Visualization",
      description: "IoT dashboard for real-time data monitoring with custom visualization components.",
      technologies: ["JavaScript", "jQuery", "Chart.js", "IoT APIs"],
      liveUrl: "#", // placeholder
      githubUrl: "#", // placeholder
      image: "/api/placeholder/400/250",
      status: "Archived"
    },
    {
      id: 6,
      title: "CRM Application",
      description: "Customer relationship management system with lead tracking and conversion analytics.",
      technologies: ["React", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "#", // placeholder
      githubUrl: "#", // placeholder
      image: "/api/placeholder/400/250",
      status: "Completed"
    }
  ];
  
  export const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  
