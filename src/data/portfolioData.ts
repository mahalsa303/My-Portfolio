import { Project, EducationItem, CertificationItem, ExperienceItem } from '../types';
import profileAvatar from '../assets/images/profile_avatar.png';
import conknowosImg from '../assets/images/project_conknowos_1791179187863.jpg';
import civicaiImg from '../assets/images/project_civicai_1791179202365.jpg';
import iplPredictorImg from '../assets/images/project_ipl_predictor_1791179216776.jpg';

export const PERSONAL_INFO = {
  name: 'Kota Sri Sai Mahalsa',
  title: 'AI Systems Engineer & Full-Stack Developer',
  headline: 'Specializing in Artificial Intelligence, LLM orchestration, and machine learning pipelines.',
  summary:
    'Computer Science Engineering undergraduate specializing in Artificial Intelligence, with a strong foundation in programming, data structures, algorithms, and machine learning. Skilled in Python and Java, with hands-on experience developing AI-driven applications and software projects. Passionate about applying technical knowledge to solve real-world problems and build efficient, scalable solutions.',
  email: 'mahalsakota006@gmail.com',
  phone: '+91 6301047477',
  location: 'Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/kota-sri-sai-mahalsa',
  github: 'https://github.com/mahalsa303',
  avatar: profileAvatar,
  stats: [
    { label: 'Core Projects Built', value: '4+' },
    { label: 'Industry Certifications', value: '3' },
    { label: 'Internship Hours', value: '120h' },
    { label: 'Graduation Year', value: '2027' },
  ],
  languages: ['English', 'Telugu', 'Hindi'],
  leadership: 'Google Developer Groups (GDG) Event Management Lead',
};

export const PROJECTS: Project[] = [
  {
    id: 'conknowos',
    title: 'ConKnowOS',
    tagline: 'AI-Powered Knowledge Operating System',
    category: 'ai-llm',
    categoryLabel: 'AI & LLMs',
    year: '2026',
    image: conknowosImg,
    summary:
      'A modular AI-driven knowledge operating system integrating modern LLMs, Model Context Protocol (MCP), and reusable SDK components containerized with Docker.',
    techStack: ['Python', 'AI/LLMs', 'Model Context Protocol (MCP)', 'SDK Engineering', 'Docker'],
    features: [
      'Modular micro-architecture enabling hot-swappable AI provider adapters',
      'Integration of decentralized tools and context services via official MCP specification',
      'Engineered reusable client SDK and standardized inter-tool communication protocol',
      'Production-ready multi-stage containerization with Docker for isolated deployment',
    ],
    metrics: ['MCP Protocol Ready', 'Multi-Provider Orchestration', 'Docker Containerized'],
    githubUrl: 'https://github.com/mahalsa303',
    details: {
      problem:
        'Modern knowledge workers face fragmented tools, scattered context, and rigid LLM tool integrations without open interoperability standards.',
      solution:
        'ConKnowOS provides an extensible knowledge OS protocol where LLMs can securely discover tools, query context, and execute workflows through standard MCP bindings.',
      architecture: [
        'MCP Server & Client orchestration layer',
        'Stateful session store and context caching',
        'Pluggable inference runtime supporting Anthropic, OpenAI, and Gemini SDKs',
        'Dockerized deployment stack with sandboxed execution',
      ],
    },
  },
  {
    id: 'civicai',
    title: 'CivicAI',
    tagline: 'Civic Issue Reporting & Geospatial Analytics',
    category: 'ai-llm',
    categoryLabel: 'AI & Full-Stack',
    year: '2025',
    image: civicaiImg,
    summary:
      'An intelligent citizen reporting platform powered by Gemini AI for auto-classification, severity assessment, and cost estimation, with geospatial clustering.',
    techStack: [
      'Python',
      'Streamlit',
      'Gemini AI',
      'Firebase Firestore',
      'Plotly',
      'Geospatial Analysis',
    ],
    features: [
      'Automated issue classification, priority scoring, and cost estimation with Gemini AI',
      'Geospatial analysis algorithm detecting duplicate reports within a 100-meter radius',
      'Real-time Firestore integration for issue storage, verification, community voting, and audit tracking',
      'Interactive geospatial heatmaps and analytical drilldown dashboards with Plotly & Streamlit',
    ],
    metrics: ['100m Radius Deduplication', 'Gemini Multimodal Analysis', 'Real-time Verification'],
    githubUrl: 'https://github.com/mahalsa303',
    details: {
      problem:
        'Municipal authorities suffer from redundant, poorly categorized citizen reports, leading to delayed road repairs, sanitation lapses, and inefficient budget allocation.',
      solution:
        'CivicAI accepts citizen photo reports, applies Gemini AI to verify damage category and severity, computes repairs cost estimates, clusters duplicates within 100m, and feeds a live dashboard for civil engineers.',
      architecture: [
        'Streamlit responsive citizen reporting interface & admin cockpit',
        'Gemini Vision API pipeline for automated image triage and severity indexing',
        'Firestore document collections with voting and status lifecycle',
        'Haversine & spatial KD-tree deduplication engine for 100m radius grouping',
      ],
    },
  },
  {
    id: 'ipl-predictor',
    title: 'IPL Final Score Predictor',
    tagline: 'Predictive Machine Learning Engine',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    year: '2024',
    image: iplPredictorImg,
    summary:
      'A machine learning score prediction engine built on historical IPL match telemetry using custom feature engineering and Random Forest Regression with Gradio.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Gradio', 'NumPy'],
    features: [
      'Engineered dynamic momentum features: runs in last 5 overs, wickets remaining, and required run rate',
      'Trained and cross-validated Random Forest Regressor yielding high prediction accuracy across historical tournaments',
      'Interactive real-time Gradio UI allowing match analysts to simulate mid-innings score scenarios on the fly',
      'Comprehensive exploratory data analysis and feature correlation matrix processing with Pandas',
    ],
    metrics: ['Random Forest Ensemble', 'Dynamic Momentum Features', 'Real-time Gradio UI'],
    githubUrl: 'https://github.com/mahalsa303',
    details: {
      problem:
        'T20 cricket score trajectories are volatile and influenced non-linearly by wickets fallen in death overs, venue pitch history, and run momentum.',
      solution:
        'Engineered custom rolling window aggregates (runs scored in previous 5 overs, wickets in hand, historical venue scores) and trained an ensemble regression model to forecast final score distributions.',
      architecture: [
        'Pandas telemetry cleansing and outlier trimming pipeline',
        'Feature engineering module generating rolling momentum metrics',
        'Scikit-learn Random Forest model serialised with joblib',
        'Gradio interactive web front with responsive parameter sliders',
      ],
    },
  },
  {
    id: 'movie-recommendation',
    title: 'GenAI Movie Recommender',
    tagline: 'Contextual Prompt-Driven Recommendation Engine',
    category: 'ai-llm',
    categoryLabel: 'Generative AI',
    year: '2025',
    image: conknowosImg,
    summary:
      'Developed during the Blackbucks Generative AI internship: utilizes prompt engineering and natural language preference modeling for personalized movie discovery.',
    techStack: ['ChatGPT / OpenAI', 'Generative AI', 'Prompt Engineering', 'Python', 'Streamlit'],
    features: [
      'Engineered structured system prompts for contextual mood, genre blending, and nuance retrieval',
      'Built interactive recommendation interface allowing conversational preference refinements',
      'Tuned zero-shot and few-shot prompt topologies for consistent JSON output parsing',
      'Achieved comprehensive 120-hour internship certification at Blackbucks',
    ],
    metrics: ['Structured Few-Shot Prompting', 'Conversational Refinement', 'Blackbucks Internship Project'],
    githubUrl: 'https://github.com/mahalsa303',
    details: {
      problem:
        'Traditional recommendation systems rely on rigid tags or collaborative filtering which fail to capture emotional nuance and dynamic conversational criteria.',
      solution:
        'Utilized advanced generative prompt architectures with structured output guards to interpret complex conversational user desires and recommend tailored cinema lists.',
      architecture: [
        'Prompt orchestration layer with persona constraints',
        'Contextual session history buffer for multi-turn inquiry',
        'Sanitized output parser with fallback recommendation catalogs',
      ],
    },
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    category: 'AI / ML & LLMs',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Scikit-learn',
      'Pandas',
      'Model Context Protocol (MCP)',
      'Prompt Engineering',
      'Gemini AI API',
    ],
  },
  {
    category: 'Web & Frameworks',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3 / Tailwind', 'Django', 'Streamlit', 'Gradio'],
  },
  {
    category: 'Databases & Storage',
    items: ['MySQL', 'MongoDB', 'Firebase Firestore', 'DBMS Fundamentals'],
  },
  {
    category: 'Core Computer Science',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOPS)',
      'Operating Systems',
      'System Design Basics',
    ],
  },
  {
    category: 'Tools & DevOps',
    items: ['Docker', 'Git', 'GitHub', 'Plotly', 'VS Code', 'Linux Environments'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Sri Vasavi Engineering College',
    degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
    period: '2023 – 2027',
    location: 'Pedatadepalli, Tadepalligudem',
    score: 'CGPA: 5.34',
    highlight: 'Specialization in AI, Machine Learning, and Intelligent Software Systems',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (Class XII) – MPC',
    period: '2021 – 2023',
    location: 'Visakhapatnam',
    score: '78.00%',
    highlight: 'Advanced Mathematics, Physics, and Chemistry coursework',
  },
  {
    institution: 'Kimberley English Medium School',
    degree: 'Secondary School Certificate (SSC / Class X)',
    period: '2021',
    location: 'Tadepalligudem',
    score: '93.50%',
    highlight: 'Distinction honors in Science & Mathematics',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'ServiceNow Certified Implementation Specialist – Data Foundations',
    issuer: 'ServiceNow',
    year: '2025',
    credentialCode: 'CIS-DF (CMDB & CSDM)',
    description: 'Expertise in Configuration Management Database (CMDB) and Common Service Data Model (CSDM).',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    credentialCode: 'OCI GenAI',
    description: 'Cloud infrastructure deployment, fine-tuning, and enterprise LLM workload orchestration.',
  },
  {
    title: 'SAP Certified – Back-End Developer – ABAP Cloud',
    issuer: 'SAP',
    year: '2025',
    credentialCode: 'ABAP Cloud',
    description: 'Modern enterprise back-end architecture and cloud extensions in SAP ecosystem.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Generative AI & Prompt Engineering Intern',
    company: 'Blackbucks',
    period: 'May 2025 – July 2025',
    skills: ['ChatGPT', 'Generative AI', 'Prompt Engineering', 'Python', 'Streamlit'],
    bullets: [
      'Completed a rigorous 120-hour industry internship focused on Generative AI and advanced prompt engineering.',
      'Gained hands-on experience designing zero-shot, few-shot, and chain-of-thought prompt topologies with ChatGPT.',
      'Architected and deployed an end-to-end Movie Recommendation System as the primary capstone internship project.',
    ],
  },
  {
    role: 'Event Management Lead',
    company: 'Google Developer Groups (GDG)',
    period: '2024 – Present',
    skills: ['Leadership', 'Technical Community', 'Event Logistics', 'Developer Outreach'],
    bullets: [
      'Lead event planning and coordination for developer workshops, hackathons, and AI tech sessions.',
      'Collaborate with student builders and faculty to foster developer adoption of modern cloud and AI technologies.',
    ],
  },
];
