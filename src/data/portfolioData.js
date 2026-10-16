export const portfolioData = {
  personal: {
    name: "Hema Varshana R",
    preferredName: "Hema Varshana",
    title: "Computer Science Engineering | Full-Stack Developer",
    tagline:
      "Frontend-focused developer with experience in full-stack web development and AI/GenAI applications. Passionate about building user-centered web solutions and AI-powered products.",
    status: "Open to SDE & Web Development Opportunities",
    location: "Tamil Nadu, India",
    email: "hemavarshanar.cs24@bitsathy.ac.in",
    phone: "+91 7358911344",
    resumeUrl: "#",
  },

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Hema-733",
      username: "Hema-733",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/hema-varshana-2450a5326",
      username: "hema-varshana-2450a5326",
      icon: "Linkedin",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/3Y6IHQ4hTT/",
      username: "3Y6IHQ4hTT",
      icon: "LeetCode",
    },
    {
      platform: "Email",
      url: "mailto:hemavarshanar.cs24@bitsathy.ac.in",
      username: "hemavarshanar.cs24@bitsathy.ac.in",
      icon: "Mail",
    },
  ],

  about: {
    bio: "I'm a frontend-focused developer with hands-on experience in full-stack web development and AI/GenAI systems. Currently pursuing my Bachelor of Engineering in Computer Science at Bannari Amman Institute of Technology.",
    secondaryBio:
      "I love transforming real-world problems into intuitive, responsive applications — from semantic search FAQ assistants and ML revenue recovery systems to clean, responsive web applications.",
    quickFacts: {
      focusArea: "Full-Stack Web Dev & AI/GenAI Solutions",
      education: "B.E. in Computer Science & Engineering (2024 – Present)",
      institution: "Bannari Amman Institute of Technology, Sathyamangalam",
      currentRole: "3rd Year CSE Undergraduate",
      cgpa: "7.66 / 10.0",
      schooling: "12th HSC: Velammal Vidyalaya, Karur (80.2%)",
      email: "hemavarshanar.cs24@bitsathy.ac.in",
    },
    stats: [
      { label: "Active Projects", value: "3+", icon: "FolderGit2" },
      { label: "Hackathons & Challenges", value: "3+", icon: "Trophy" },
      { label: "Certifications", value: "4", icon: "Award" },
      { label: "Current CGPA", value: "7.66", icon: "Code2" },
    ],
  },

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        icon: "Terminal",
        items: [
          { name: "Python", level: "Advanced", icon: "TerminalSquare" },
          { name: "Java", level: "Intermediate", icon: "Coffee" },
          { name: "JavaScript", level: "Advanced", icon: "FileCode" },
          { name: "C", level: "Proficient", icon: "Cpu" },
        ],
      },
      {
        id: "frontend",
        name: "Frontend Technologies",
        icon: "Layout",
        items: [
          { name: "React", level: "Advanced", icon: "Atom" },
          { name: "HTML5", level: "Expert", icon: "Globe" },
          { name: "CSS3", level: "Advanced", icon: "Palette" },
          { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
          { name: "API Integration", level: "Proficient", icon: "Network" },
          { name: "localStorage", level: "Proficient", icon: "Database" },
        ],
      },
      {
        id: "database",
        name: "Database & Backend",
        icon: "Server",
        items: [
          { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
          { name: "SQL", level: "Advanced", icon: "DatabaseZap" },
          { name: "Node.js", level: "Proficient", icon: "Server" },
          { name: "Express.js", level: "Proficient", icon: "Network" },
        ],
      },
      {
        id: "tools",
        name: "Tools & Platforms",
        icon: "Wrench",
        items: [
          { name: "Git", level: "Advanced", icon: "GitBranch" },
          { name: "GitHub", level: "Advanced", icon: "GitBranch" },
          { name: "VS Code", level: "Expert", icon: "Laptop" },
          { name: "Streamlit", level: "Proficient", icon: "Layers" },
        ],
      },
      {
        id: "core",
        name: "Core Competencies",
        icon: "Brain",
        items: [
          { name: "Data Structures & Algorithms", level: "Proficient", icon: "Binary" },
          { name: "Competitive Programming", level: "Active", icon: "Code2" },
          { name: "RAG & Semantic Search", level: "Proficient", icon: "Layers" },
          { name: "Machine Learning Basics", level: "Proficient", icon: "Binary" },
        ],
      },
    ],
  },

  projects: [
    {
      id: "campusquery",
      title: "CampusQuery – AI College FAQ Assistant",
      role: "Team Project (HACKORBIT 2K26)",
      category: "Full Stack",
      featured: true,
      description:
        "An AI-powered college FAQ assistant leveraging semantic search and Retrieval-Augmented Generation (RAG) with embeddings, cosine similarity, source references, and confidence thresholding.",
      longDescription:
        "Built during HACKORBIT 2K26, CampusQuery solves student query resolution using state-of-the-art semantic search and RAG. Built with React and Tailwind CSS on the frontend and Node.js/Express.js on the backend, integrated with Sentence Transformers and LLM API. Includes comprehensive admin FAQ management and live user feedback mechanisms.",
      techStack: [
        "Node.js",
        "Express.js",
        "React",
        "Tailwind CSS",
        "RAG",
        "Sentence Transformers",
        "LLM API",
      ],
      githubUrl: "https://github.com/sangitkb/FAQ_chatbot",
      liveDemoUrl: "https://github.com/sangitkb/FAQ_chatbot",
      gradient: "from-blue-600 to-indigo-600",
      highlights: [
        "Semantic search with embeddings & cosine similarity",
        "Confidence thresholding & source citations",
        "Admin FAQ portal & feedback collection system",
      ],
    },
    {
      id: "recoverai",
      title: "RecoverAI – AI Revenue Recovery Agent",
      role: "Solo Developer",
      category: "AI / ML",
      featured: true,
      description:
        "Machine learning system that predicts failed-payment recovery opportunities. Trained on 10,000 synthetic transactions achieving 98.6% prediction accuracy with an interactive decision dashboard.",
      longDescription:
        "RecoverAI is an intelligent payment recovery decision engine developed in Python and Streamlit. It leverages Pandas, NumPy, and Scikit-Learn models trained on 10,000 synthetic transaction records to classify and predict recovery viability for failed payments with 98.6% accuracy, providing business teams with actionable recovery analytics.",
      techStack: ["Python", "Pandas", "NumPy", "Streamlit", "Machine Learning"],
      githubUrl: "https://github.com/Hema-733/RecoverAI",
      liveDemoUrl: "https://recoverai-cmip6dsvmjd4znurljpnw9.streamlit.app/",
      gradient: "from-emerald-600 to-teal-600",
      highlights: [
        "98.6% prediction accuracy on 10,000 transactions",
        "Interactive Streamlit analytics dashboard",
        "Automated decision engine for revenue operations",
      ],
    },
    {
      id: "budgettracker",
      title: "Budget Tracker Web Application",
      role: "Frontend Developer",
      category: "Frontend",
      featured: true,
      description:
        "A clean, responsive expense tracking web application featuring persistent localStorage, multi-criteria filtering, sorting, and real-time balance calculations.",
      longDescription:
        "An intuitive personal finance application engineered using vanilla web technologies (HTML5, CSS3, JavaScript) with browser localStorage persistence. Delivers real-time expense calculations, dynamic category filtering, date sorting, and interactive UI feedback.",
      techStack: ["HTML5", "CSS3", "JavaScript", "localStorage"],
      githubUrl: "https://github.com/Hema-733/Budget_Tracker",
      liveDemoUrl: "https://hema-733.github.io/Budget_Tracker",
      gradient: "from-amber-600 to-orange-600",
      highlights: [
        "Persistent localStorage architecture",
        "Real-time dynamic balance & expense math",
        "Instant filtering & transaction sorting",
      ],
    },
  ],

  hackathons: [
    {
      id: "hackorbit-2026",
      title: "HACKORBIT 2K26 – Neural Nexus",
      organizer: "Learn & Build ML/Deep Learning Hackathon",
      date: "Aug 13–14, 2026",
      role: "Team Developer",
      achievement: "Built & Deployed CampusQuery (AI FAQ Assistant)",
      badge: "Completed & Deployed",
      badgeColor: "indigo",
      description:
        "Built CampusQuery — an AI college FAQ assistant utilizing semantic search and RAG — in a rigorous two-day ML/Deep Learning learn-and-build hackathon sprint.",
      projectLink: "https://github.com/sangitkb/FAQ_chatbot",
      techStack: ["React", "Node.js", "RAG", "Sentence Transformers", "Tailwind CSS"],
    },
    {
      id: "razorpay-2026",
      title: "Razorpay Buildathon",
      organizer: "Razorpay",
      date: "2026",
      role: "Project Developer",
      achievement: "Complete Project Submission & Demonstration",
      badge: "Project Showcase",
      badgeColor: "emerald",
      description:
        "Developed a complete engineering project with comprehensive technical documentation and an end-to-end product demonstration video.",
      projectLink: "https://github.com/Hema-733",
      techStack: ["Full-Stack", "Web Development", "Documentation"],
    },
    {
      id: "guidewire-2026",
      title: "Guidewire DEVTrails 2026 – Unicorn Chase",
      organizer: "Guidewire Software",
      date: "2026",
      role: "Competitor",
      achievement: "Competitive Solution Development",
      badge: "DEVTrails Competitor",
      badgeColor: "purple",
      description:
        "Participated in competitive solution development, algorithmic challenges, and hands-on software problem-solving.",
      projectLink: "https://github.com/Hema-733",
      techStack: ["Problem Solving", "Competitive Programming", "DSA"],
    },
  ],

  events: [
    {
      id: "celestas-2025",
      title: "CELESTAS’25 – College Technical Event",
      role: "Event Volunteer",
      year: "2025",
      description: "Assisted in technical event organization, participant coordination, and event logistics.",
    },
    {
      id: "trilogy-2026",
      title: "Trilogy Leadership Connect Programme",
      role: "Industry Exposure Participant",
      year: "2026",
      description: "Explored Trilogy’s modern technology ecosystem, engineering methodologies, and software innovations.",
    },
  ],

  certifications: [
    {
      id: "ibm-prompt-engineering",
      title: "Prompt Engineering",
      issuer: "IBM",
      date: "Certified",
      credentialId: "IBM-PE-CERTIFIED",
      verificationUrl: "https://www.ibm.com/training",
      icon: "Award",
      skillsCovered: ["Prompt Design", "GenAI", "LLM Fine-Tuning", "AI Workflows"],
    },
    {
      id: "cisco-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Feb 2025",
      credentialId: "CISCO-CYBER-2025",
      verificationUrl: "https://www.netacad.com/",
      icon: "ShieldCheck",
      skillsCovered: ["Network Security", "Threat Detection", "Cyber Defense", "Security Principles"],
    },
    {
      id: "cisco-python-essentials",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "Feb 2025",
      credentialId: "CISCO-PY-2025",
      verificationUrl: "https://www.netacad.com/",
      icon: "FileCode",
      skillsCovered: ["Python Syntax", "Data Structures", "OOP Basics", "Algorithms"],
    },
    {
      id: "tata-crucible-2025",
      title: "TATA Crucible Campus Quiz 2025",
      issuer: "TATA Group",
      date: "2025",
      credentialId: "TATA-CCQ-2025",
      verificationUrl: "https://www.tatacrucible.com/",
      icon: "Trophy",
      skillsCovered: ["General & Tech Awareness", "Critical Thinking", "Problem Solving"],
    },
  ],
};
