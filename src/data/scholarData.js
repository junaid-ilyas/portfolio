import chemistryLabPreview from '../../assets/chem-lab-project.png';
import dashboardScreenshot from '../../assets/dashboard.png';
import sesameRobot from '../../assets/sesame-robot.jpeg';
import sesameCompanion from '../../assets/sesame-companion.png';
import scannerDashboardPreview from '../../assets/scanner-dashboard.png';
import scannerCadPreview from '../../assets/scanner-cad-studio.png';
import robotSchematic from '../../assets/robot-schematic.png';

export const SCHOLAR_INFO = {
  name: "Junaid Ilyas",
  tagline: "Full-Stack MERN Developer building modern, scalable web platforms",
  badge: "Available for MERN Opportunities",
  subtitle: "BS Computer Science (2023 — 2027) • PEEF Merit Scholar",
  bio: "Passionate about engineering responsive React frontends, secure Node.js & Express REST APIs, and clean database architectures with MongoDB Atlas.",
  contactEmail: "work.muhammadjunaid@gmail.com",
  links: {
    github: "https://github.com/junaid-ilyas",
    linkedin: "https://www.linkedin.com/in/muhammad-junaid-ilyas-9769a4324",
    email: "mailto:work.muhammadjunaid@gmail.com"
  }
};

export const PROJECTS_DATA = [
  {
    id: "virtual-chemistry-lab",
    title: "Virtual Chemistry Lab",
    subtitle: "BS Computer Science final year project · In development",
    description: "An ongoing final year project exploring how interactive 3D simulations can support chemistry learning in the browser. I’m building and validating the experience as the project progresses.",
    tags: ["Final Year Project", "In Development", "Interactive 3D"],
    image: chemistryLabPreview,
    imageWidth: 1920,
    imageHeight: 853,
    imageAlt: "Virtual Chemistry Lab project preview",
    actionText: "Explore Project",
    modalType: "chemistry-detail",
  },
  {
    id: "smartphone-document-scanner",
    title: "Scanner Hardware Simulator",
    subtitle: "A low-cost scanner concept, explored before the build.",
    description: "A browser-based digital twin for a low-cost document scanner concept, bringing its 3D mechanism, simulated controls, CAD models, and ESP32 firmware references together.",
    tags: ["IoT", "Digital Twin", "Mechanical Design", "Interactive Prototype"],
    image: scannerDashboardPreview,
    imageWidth: 1920,
    imageHeight: 853,
    imageAlt: "Scanner Hardware Simulator project preview",
    actionText: "Explore Scanner Simulator",
    modalType: "scanner-detail",
    stats: [
      { label: "Prototype", value: "Interactive Frontend" },
      { label: "3D & CAD", value: "Three.js · STL · OBJ" },
      { label: "Hardware", value: "ESP32 References" },
      { label: "Integration", value: "Simulation Only" }
    ]
  },
  {
    id: "notesnest-workspace",
    title: "NotesNest",
    subtitle: "Full-Stack MERN Productivity Workspace",
    description: "A modular note-taking web application featuring rich-text editing, automated email reminders, and a soft-delete trash recovery system. Built entirely on the MERN stack with in-memory auth and MongoDB Atlas.",
    tags: ["MERN Stack", "React 19", "Express 5", "MongoDB Atlas", "Node.js", "TipTap 3"],
    image: dashboardScreenshot,
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: "NotesNest Workspace Dashboard",
    actionText: "Explore NotesNest Case Study",
    liveUrl: "https://notenest-web.vercel.app/welcome",
    modalType: "notes-detail",
    stats: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Editor", value: "TipTap 3 Rich Text" },
      { label: "Security", value: "In-Memory Auth" },
      { label: "Database", value: "MongoDB Atlas" }
    ]
  },
  {
    id: "quadruped-robot-ai",
    title: "Sesame AI Companion",
    subtitle: "A quadruped with a voice of its own.",
    description: "A custom quadruped brought to life with expressive movement, a tiny animated face, voice interaction, and an AI desktop companion.",
    tags: ["Robotics", "Embedded Systems", "Voice + AI", "ESP32-S2"],
    image: sesameRobot,
    imageWidth: 960,
    imageHeight: 1280,
    imageAlt: "Sesame, a custom quadruped robot with an animated OLED face",
    actionText: "Explore Sesame Case Study",
    modalType: "robot-detail",
    stats: [
      { label: "Robot", value: "ESP32-S2 Mini" },
      { label: "Actuation", value: "8 servo channels" },
      { label: "Display", value: "128 × 64 OLED" },
      { label: "Companion", value: "Python · voice + AI" }
    ]
  },
];

export const PROJECT_STUDIES = {
  "chemistry-lab": {
    index: "01",
    category: "FINAL YEAR PROJECT · COMPUTER SCIENCE",
    status: "IN DEVELOPMENT",
    title: "Virtual Chemistry Lab",
    subtitle: "Learning by experimenting.",
    images: [
      {
        src: chemistryLabPreview,
        alt: "Virtual Chemistry Lab browser interface showing the 3D titration workbench and experiment controls",
        caption: "Virtual chemistry lab · titration workbench",
      },
    ],
    intro:
      "An ongoing final year project exploring how interactive 3D simulations can support chemistry learning in the browser.",
    story:
      "I’m currently focused on getting the core experience working and validating the project’s technical foundations. The interface is still evolving alongside the implementation, so this page focuses on the project direction rather than presenting unfinished screens as a final product.",
    facts: [
      ["PROJECT TYPE", "BS Computer Science · Final year project"],
      ["CURRENT PHASE", "Core functionality in development"],
      ["PROJECT DIRECTION", "Interactive browser-based lab simulations"],
    ],
    features: [
      [
        "Build the core first",
        "Current work is centered on making the essential project experience function reliably.",
      ],
      [
        "Explore interactive experiments",
        "The project direction is a virtual lab where learners can work through chemistry experiments in a browser.",
      ],
      [
        "Let the interface grow with the system",
        "Visual polish and supporting workflows can follow as the core simulation takes shape.",
      ],
    ],
    stack: [
      "React",
      "Redux Toolkit",
      "Three.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: [],
  },
  "smartphone-document-scanner": {
    index: "02",
    category: "IOT · DIGITAL TWIN · MECHANICAL DESIGN",
    status: "INTERACTIVE FRONTEND PROTOTYPE",
    title: "Scanner Hardware Simulator",
    subtitle: "A low-cost scanner concept, explored before the build.",
    images: [
      {
        src: scannerDashboardPreview,
        alt: "Scanner simulator dashboard showing the 3D scanner mechanism, controls, and hardware telemetry",
        caption: "Scanner digital twin · kinematics and telemetry",
      },
      {
        src: scannerCadPreview,
        alt: "Scanner simulator CAD studio showing the 3D assembly and model export controls",
        caption: "CAD engineering studio · scanner assembly and export",
      },
    ],
    intro:
      "A web-based engineering workspace for a DIY document scanner that uses a smartphone camera. The digital twin makes the proposed mechanism and scanner workflow easier to inspect before building the physical device.",
    story:
      "The project began as a collaboration: I took on the IoT controller and firmware, while my friend planned a mobile app that could run on different phones and operate the scanner. From my IoT experience, I knew how valuable it was to simulate firmware, circuits, and mechanisms during development. We did not have a browser-based place to see how the scanner might work as a system, so I built this digital twin to visualize the mechanism, explore simulated behavior, and bring the CAD and firmware references together. The mobile app and physical hardware integration remain future work.",
    facts: [
      ["PROJECT GOAL", "Low-cost document scanner using a smartphone camera"],
      ["MY ROLE", "IoT concept, firmware references, and browser digital twin"],
      ["COLLABORATION", "Mobile app planned with a project collaborator"],
      ["CURRENT STATE", "Frontend prototype; no physical scanner connection"],
      ["3D & CAD", "Three.js assembly · part models · STL and OBJ export"],
    ],
    features: [
      [
        "Explore the mechanism",
        "Inspect a Three.js scanner assembly, switch camera views, and explore the simulated motion and exploded view.",
      ],
      [
        "Try the scanner workflow",
        "Use the browser controls to explore simulated feed/eject cycles, scanner states, and sensor telemetry.",
      ],
      [
        "Inspect and export CAD",
        "Browse the scanner assembly and individual parts, review dimensions, and export 3D model files.",
      ],
      [
        "Keep hardware references together",
        "Review the ESP32 firmware, wiring guide, and Python test-client reference alongside the digital twin.",
      ],
    ],
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "Three.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "ESP32 C++ references",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://scannersimulator.pages.dev/",
      },
      {
        label: "View source code",
        href: "https://github.com/junaid-ilyas/scanner-hardware-simulator",
      },
    ],
  },
  "sesame-companion": {
    index: "04",
    category: "ROBOTICS · EMBEDDED SYSTEMS · AI",
    status: "HARDWARE + DESKTOP APP",
    title: "Sesame AI Companion",
    subtitle: "A quadruped with a voice of its own.",
    images: [
      {
        src: sesameRobot,
        alt: "Sesame, a custom ESP32-S2 quadruped robot with its animated OLED face and servo-driven legs",
        caption: "Sesame · ESP32-S2 quadruped companion",
      },
      {
        src: sesameCompanion,
        alt: "Sesame desktop companion showing movement controls, conversation, animated face, voice options, and robot metrics",
        caption: "Sesame desktop companion · controls and voice interface",
      },
      {
        src: robotSchematic,
        alt: "Wiring schematic for the Sesame ESP32-S2 quadruped robot, servos, and OLED display",
        caption: "Sesame · ESP32-S2 and servo wiring schematic",
      },
    ],
    intro:
      "Sesame pairs a custom ESP32-S2 quadruped robot with a Python desktop companion for movement controls, voice interaction, and conversational responses.",
    story:
      "The project connects low-level servo motion and an animated OLED face to a desktop interface. The firmware exposes local HTTP controls and status, while the companion app links those controls with speech recognition, speech output, and optional AI responses.",
    facts: [
      ["ROBOT", "ESP32-S2 Mini · 8 servo channels"],
      ["DISPLAY", "128 × 64 OLED expression display"],
      ["FIRMWARE", "C++ · Wi-Fi · local HTTP API"],
      ["COMPANION", "Python · PyWebView · voice + AI"],
      ["AI MODEL", "GroqCloud · openai/gpt-oss-120b"],
    ],
    features: [
      [
        "Movement and poses",
        "Quick actions include walk, crab walk, dance, wave, bow, push-up, swim, and other expressive poses.",
      ],
      [
        "A face with expressions",
        "Animated OLED expressions react to idle states, actions, and conversational speech.",
      ],
      [
        "Talk and listen",
        "Voice input uses speech recognition; spoken replies can use local pyttsx3 or Gemini speech synthesis.",
      ],
      [
        "AI with a fallback",
        "The companion uses GroqCloud with gpt-oss-120b and can fall back to local scripted responses when a cloud service is unavailable.",
      ],
    ],
    stack: [
      "ESP32-S2 Mini",
      "C++",
      "Arduino",
      "8 servo channels",
      "128 × 64 OLED",
      "Python",
      "PyWebView",
      "SpeechRecognition",
      "GroqCloud",
      "gpt-oss-120b",
      "Gemini",
    ],
    links: [
      {
        label: "View source code",
        href: "https://github.com/junaid-ilyas/quadruped-ai-companion",
      },
    ],
  },
};

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Architecture",
    icon: "code",
    skills: [
      { name: "React 19", role: "Core Frontend" },
      { name: "JavaScript (ES6+)", role: "Core Language" },
      { name: "Tailwind CSS", role: "UI Styling" },
      { name: "Redux Toolkit", role: "State Management" },
      
    ]
  },
  {
    title: "Backend & API Engineering",
    icon: "layers",
    skills: [
      { name: "Node.js", role: "Server Runtime" },
      { name: "Express.js", role: "API Framework" },
      { name: "RESTful APIs", role: "API Architecture" },
      { name: "JWT Auth & Security", role: "Web Security" }
    ]
  },
  {
    title: "Database & Tooling",
    icon: "memory",
    skills: [
      { name: "MongoDB Atlas", role: "NoSQL Database" },
      { name: "Mongoose ODM", role: "Data Modeling" },
      { name: "Postman", role: "API Testing" },
      { name: "Git & GitHub", role: "Version Control" }
    ]
  }
];
