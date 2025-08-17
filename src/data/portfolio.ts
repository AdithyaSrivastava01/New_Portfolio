import { Project, Experience, Education, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer Intern',
    company: 'Swing Phi Inc.',
    location: 'Los Angeles, United States',
    duration: 'May 2025 - August 2025',
    description: [
      'Designed real-time financial news software architecture using Celery, Kafka, and Elasticsearch fetching >1k articles/day, performing ML enrichment, indexing to Elasticsearch, and exposing articles via Django API—cut headline latency to <5s',
      'Containerised the entire data stack—Django/Gunicorn, Celery workers/beat, Kafka/ZooKeeper, Elasticsearch, & Redis service—behind a single docker adding curl-based health checks & log rotation',
      'Optimized Elasticsearch at scale with key-set pagination and SHA-1 de-duplication, sustaining a 10 K-document index while keeping P99 page loads < 80 ms',
      'Built DSPy-powered agentic news analysis with 10+ chained reasoning modules extracting stock tickers and market sentiment—integrated real-time Yahoo Finance data and filtered false positives through custom ticker validation'
    ],
    technologies: ['Docker', 'Django', 'Kafka', 'Elasticsearch', 'Celery', 'DSPy', 'Python']
  },
  {
    id: '2',
    title: 'Machine Learning Engineer',
    company: 'USC Information Sciences Institute',
    location: 'Los Angeles, United States',
    duration: 'October 2024 - April 2025',
    description: [
      'Extracted 1.1M tweets automated by Python based Playwright to analyze narratives & sentiments related to the US 2024 election',
      'Trained BERTopic on tweets for topic modeling, leveraged Llama 2 & prompt engineering to generate meaningful topic labels',
      'Optimized Llama 2 inference using QLoRA\'s 4-bit double quantization, cutting GPU memory requirements by 71%',
      'Evaluated multilingual RoBERTa-based transformers on topic-clustered tweets for sentimental analysis over 2 Nvidia T4 GPU'
    ],
    technologies: ['NLP', 'Python', 'Playwright', 'LLMs', 'BERTopic', 'Llama 2', 'QLoRA']
  },
  {
    id: '3',
    title: 'Software Development Engineer Intern',
    company: 'Technical University Braunschweig',
    location: 'Braunschweig, Germany',
    duration: 'May 2023 - August 2023',
    description: [
      'Pioneered a GUI-based software tool using Python to enhance ECG health monitoring systems enabled by Artificial Intelligence',
      'Integrated a Movement Index into the software tool to quantify body motion\'s impact on capacitive ECG signal using OpenPifPaf, reducing capacitive ECG signal noise by 25% & achieving 85% accuracy in alignment with ground truth ECG signal'
    ],
    technologies: ['Python', 'MATLAB', 'OpenPifPaf', 'Makefile', 'AI/ML']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Master of Science, Computer Science/Computer Engineering',
    institution: 'University of Southern California',
    location: 'Los Angeles, United States',
    duration: 'August 2024 - May 2026',
    courses: ['Computer Networks', 'Machine Learning-I', 'Analysis of Algorithms', 'Probability', 'Linear Algebra']
  },
  {
    id: '2',
    degree: 'Bachelor of Technology, Computer Science and Engineering',
    institution: 'National Institute of Technology Hamirpur',
    location: 'Hamirpur, India',
    duration: 'August 2020 - May 2024',
    courses: ['Data Structures', 'Operating Systems', 'Database Management Systems', 'Distributed Systems']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'MedQueryAI',
    description: 'RAG-based Medical Query Assistant incorporating Pinecone for vector search, HuggingFace sentence transformers for embedding 1600 medical documents, & OpenAI API for LLM integration. Features real-time web application with Flask, achieving <2 second response times.',
    technologies: ['Python', 'Pinecone', 'LangChain', 'HuggingFace', 'Flask', 'AWS', 'GitHub Actions'],
    githubUrl: 'https://github.com/AdithyaSrivastava01/MedQueryAI',
    image: '/projects/medquery.jpg',
    category: 'ml',
    featured: true
  },
  {
    id: '2',
    title: 'MERN Shop',
    description: 'Full-stack e-commerce platform using the MERN stack with Redux Toolkit for global state management & Material UI for responsive interface. Features optimized product catalog, order management system, and JWT authentication.',
    technologies: ['JavaScript', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT', 'Material UI'],
    githubUrl: 'https://github.com/AdithyaSrivastava01/MERN-Shop',
    liveUrl: 'https://mern-shop-demo.com',
    image: '/projects/mern-shop.jpg',
    category: 'web',
    featured: true
  },
  {
    id: '3',
    title: 'cECG Signal Reliability using Pose Estimation',
    description: 'Non-intrusive health monitoring system for smart home patients. Incorporated pose estimation to track patient movements and created correlation between movements and signal noise to test ECG signal reliability.',
    technologies: ['Python', 'OpenPifPaf', 'MATLAB', 'Computer Vision'],
    githubUrl: 'https://github.com/AdithyaSrivastava01/ECG_signalfilter',
    image: '/projects/ecg-signal.jpg',
    category: 'ml',
    featured: true
  },
  {
    id: '4',
    title: 'Brain Tumor Analysis',
    description: 'Classification system for pathologically confirmed Brain Tumor scans into grades G1-G4. Implemented transfer learning, early stopping, and OCR for text removal. Achieved 80% accuracy with ResNet50.',
    technologies: ['TensorFlow', 'Scikit-learn', 'Keras-OCR', 'ResNet50', 'Computer Vision'],
    githubUrl: 'https://github.com/AdithyaSrivastava01/BrainTumor_analysis',
    image: '/projects/brain-tumor.jpg',
    category: 'ml',
    featured: false
  },
  {
    id: '5',
    title: 'CIFAR10 Analysis',
    description: 'Deep learning analysis of CIFAR10 dataset using CNN with learning rate scheduler and gradient clipping. Developed custom ResNet model using residual network fundamentals.',
    technologies: ['PyTorch', 'Computer Vision', 'Scikit-learn', 'CNN'],
    githubUrl: 'https://github.com/AdithyaSrivastava01/CIFAR10',
    image: '/projects/cifar10.jpg',
    category: 'ml',
    featured: false
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'C', 'SQL', 'HTML/CSS', 'Bash']
  },
  {
    category: 'AI/ML & Data Science',
    skills: ['PyTorch', 'HuggingFace', 'TensorFlow', 'Scikit-learn', 'Pandas', 'LangChain', 'Spacy', 'Keras', 'DSPy', 'Matplotlib', 'PySpark', 'MLFlow']
  },
  {
    category: 'Web Development',
    skills: ['React', 'Node.js', 'Express.js', 'Flask', 'Django', 'Redux', 'Next.js', 'Tailwind CSS', 'Material UI']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Neo4j', 'Pinecone', 'Elasticsearch']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda, SageMaker)', 'Google Cloud Platform', 'Docker', 'GitHub Actions', 'Jenkins']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Linux', 'REST APIs', 'gRPC', 'CUDA', 'Figma', 'JWT', 'Kafka', 'Redis']
  }
];