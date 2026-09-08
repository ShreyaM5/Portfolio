import { Brain, Code2, Database, LineChart, BarChart3, Wrench } from 'lucide-react'

export const personalInfo = {
  name: 'Shreya Maurya',
  tagline: 'AI & Machine Learning Enthusiast',
  heroDescription:
    "I'm a passionate Computer Science undergraduate specializing in Artificial Intelligence, focused on building intelligent, data-driven solutions with Reinforcement Learning, Machine Learning, and modern web technologies.",
  email: 'mauryashreya48@gmail.com',
  location: 'New Delhi, India',
  github: 'https://github.com/ShreyaM5',
  linkedin: 'https://www.linkedin.com/in/shreya-maurya577',
}

export const education = [
  {
    school: 'Indira Gandhi Delhi Technical University For Women',
    degree: 'Bachelor of Technology',
    details: 'Computer Science Engineering with Artificial Intelligence',
    gpa: 'GPA: 9.245',
    period: '2024– 2028',
    location: 'Delhi, India',
  },
]

export const skillGroups = [
  {
    category: 'Languages',
    icon: Code2,
    color: '#3B82F6',
    skills: ['Python', 'C++', 'HTML/CSS'],
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    color: '#7C3AED',
    skills: [
      'Scikit-learn',
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning',
    ],
  },
  {
    category: 'Data Science',
    icon: LineChart,
    color: '#06B6D4',
    skills: ['NumPy', 'Pandas'],
  },
  {
    category: 'Data Visualization',
    icon: BarChart3,
    color: '#10B981',
    skills: ['Matplotlib', 'Seaborn'],
  },
  {
    category: 'Databases',
    icon: Database,
    color: '#F59E0B',
    skills: ['MySQL'],
  },
  {
    category: 'Developer Tools',
    icon: Wrench,
    color: '#F43F5E',
    skills: ['VS Code', 'Git', 'GitHub'],
  },
]

export const coursework = ['Computer Networks', 'DBMS', 'Operating Systems', 'OOPs', 'Data Structures & Algorithms']

export const experience = [
  {
    role: 'Summer Research Intern',
    company: 'DRDO – Institute for Systems Studies and Analyses (ISSA)',
    period: 'May 2026 – July 2026',
    location: 'New Delhi, India',
    certificate: true,
    certificateLabel: 'View Certificate',
    certificateUrl: 'https://drive.google.com/file/d/1pw_SIwfa_xNBKD3UTq94eOIW1X0cDzbx/view',
    points: [
      'Explored Reinforcement Learning algorithms including Q-Learning, SARSA, and Deep Q-Networks (DQN), with emphasis on Bellman updates, policy learning, exploration-exploitation strategies, reward engineering, and sequential decision-making for solving autonomous navigation problems.',
      'Applied Python and NumPy to experiment with Reinforcement Learning concepts, strengthening practical understanding of algorithm design and agent learning.',
    ],
  },
  {
    role: 'Python and Machine Learning Internship',
    company: 'Anveshan Foundation, IGDTUW',
    period: 'June 2025 – July 2025',
    location: 'Delhi, India',
    certificate: true,
    certificateLabel: 'View Certificate',
    certificateUrl: 'https://drive.google.com/file/d/1YhB01T0dY2REZoigeqPJByUuOiJAelfp/view',
    points: [
      'Attended a 6-week internship focusing on Machine Learning and Artificial Intelligence.',
      'Gained practical exposure to Python programming and core ML techniques by working on hands-on experiments.',
      'Co-authored a research paper, that was among top 15% of the papers reviewed at the 9th International Conference on Innovative Computing and Communication (ICICC-2026).',
    ],
    publicationLabel: 'Read Published Paper (Springer, LNNS)',
    publicationUrl: 'https://link.springer.com/chapter/10.1007/978-3-032-28310-8_12',
  },
]

export const projects = [
  {
    title: 'GridWorld Navigation using Q-Learning',
    description:
      'Engineered a custom GridWorld environment and implemented a tabular Q-Learning agent from scratch for autonomous navigation over 1,000 training episodes.',
    highlight: 'Reinforcement Learning',
    tech: ['Python', 'NumPy', 'Reinforcement Learning'],
    points: [
      'Engineered a custom GridWorld environment and implemented a tabular Q-Learning agent from scratch for autonomous navigation over 1,000 training episodes.',
      'Designed Bellman-based Q-value updates with ε-greedy exploration and reward shaping, analyzed using episode rewards, epsilon decay, and policy visualization.',
      'Built and deployed a Streamlit-based RL simulator enabling real-time training, testing, and hyperparameter tuning with visual performance analysis.',
    ],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/ShreyaM5/Reinforcement-Learning-GridWorld',
        icon: 'github',
      },
      {
        label: 'Live Demo',
        url: 'https://qlearning-gridworld-simulator.streamlit.app/',
        icon: 'external',
      },
    ],
  },
  {
    title: 'CardioCare – Cardiovascular Disease Risk Prediction',
    description:
      'Developed a Cardiovascular Disease Prediction system using machine learning by analyzing clinical health data containing 15+ attributes and 300+ samples.',
    highlight: 'Machine Learning',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'],
    points: [
      'Developed a Cardiovascular Disease Prediction system using machine learning by analyzing clinical health data containing 15+ attributes and 300+ samples.',
      'Proposed an LNRF model, achieving 92% prediction accuracy.',
      'Employed Genetic algorithm optimization and RFECV for feature selection to increase the accuracy.',
    ],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/ShreyaM5/Cardiovascular-Disease-Prediction-ML',
        icon: 'github',
      },
    ],
  },
]

export const roles = [
  {
    role: 'Community Service Member',
    org: 'Rotaract Club of IGDTUW',
    period: 'September 2025 – Present',
    details:
      'Supported initiatives in health, education, and social impact by organizing donation drives and awareness campaigns. Collaborated with peers to foster community well-being.',
  },
]