const researchData = {
  'Computer Science': [
    {
      title: 'Machine Learning Image Recognition System',
      description: 'Develop an image recognition system using deep learning algorithms to identify objects in images, applicable to autonomous driving, security monitoring, and other fields.',
      requiredSkills: ['Python Programming', 'TensorFlow/PyTorch', 'Neural Networks', 'Data Processing'],
      expectedOutcomes: 'Complete a working image recognition model with technical report',
      timeline: '3-6 months: 1-2 months learning, 2-3 months development, 1 month optimization'
    },
    {
      title: 'Blockchain Application Development',
      description: 'Design and implement a decentralized application (DApp) based on blockchain technology for supply chain tracking, digital asset management, and other scenarios.',
      requiredSkills: ['Solidity Smart Contracts', 'Web3 Development', 'Ethereum Framework', 'Cryptography Basics'],
      expectedOutcomes: 'Complete deployable smart contracts and frontend interface',
      timeline: '4-8 months: 2 months learning, 3 months development, 3 months testing'
    },
    {
      title: 'Natural Language Processing Chatbot',
      description: 'Build a chatbot capable of understanding natural language and engaging in intelligent conversations, applicable to customer service and educational assistance.',
      requiredSkills: ['NLP Algorithms', 'Python', 'Transformers Library', 'Dialogue System Design'],
      expectedOutcomes: 'Implement a chatbot with context understanding capabilities',
      timeline: '3-6 months'
    },
    {
      title: 'Mobile Application Development',
      description: 'Develop a mobile application for a specific user group to solve real-life problems such as health management or learning tools.',
      requiredSkills: ['React Native/Flutter', 'UI/UX Design', 'API Development', 'Version Control'],
      expectedOutcomes: 'Complete an app available on App Store/Google Play',
      timeline: '4-8 months'
    }
  ],
  'Biology': [
    {
      title: 'Gene Editing Technology Research',
      description: 'Learn the fundamentals of CRISPR-Cas9 gene editing technology and design gene editing solutions for specific genes.',
      requiredSkills: ['Molecular Biology', 'Genetic Engineering', 'Lab Operations', 'Data Analysis'],
      expectedOutcomes: 'Complete experimental design and data analysis report',
      timeline: '6-12 months'
    },
    {
      title: 'Ecological Environment Investigation',
      description: 'Investigate the ecological environment of a specific region and analyze the relationship between biodiversity and environmental factors.',
      requiredSkills: ['Ecology', 'Statistics', 'Field Survey Methods', 'GIS Technology'],
      expectedOutcomes: 'Submit ecological investigation report and recommendations',
      timeline: '6-12 months'
    },
    {
      title: 'Bioinformatics Data Analysis',
      description: 'Use bioinformatics tools to analyze genomic data and discover potential gene variations and disease associations.',
      requiredSkills: ['Bioinformatics', 'R/Python Programming', 'Statistics', 'Genomics'],
      expectedOutcomes: 'Complete data analysis and research report',
      timeline: '4-8 months'
    },
    {
      title: 'Drug Development Simulation',
      description: 'Learn computer-aided drug design methods and simulate interactions between small molecules and target proteins.',
      requiredSkills: ['Medicinal Chemistry', 'Molecular Docking', 'Molecular Dynamics', 'Computational Chemistry Software'],
      expectedOutcomes: 'Complete drug screening simulation report',
      timeline: '4-8 months'
    }
  ],
  'Economics': [
    {
      title: 'Macroeconomic Data Analysis',
      description: 'Collect and analyze macroeconomic data to study economic cycles, inflation, and other economic phenomena.',
      requiredSkills: ['Econometrics', 'R/Stata', 'Economic Theory', 'Data Visualization'],
      expectedOutcomes: 'Complete economic analysis report and data visualization',
      timeline: '3-6 months'
    },
    {
      title: 'Behavioral Economics Experiment',
      description: 'Design and implement behavioral economics experiments to study peoples decision-making behavior and economic preferences.',
      requiredSkills: ['Behavioral Economics', 'Experimental Design', 'Statistics', 'Questionnaire Survey'],
      expectedOutcomes: 'Complete experiment report and academic paper',
      timeline: '4-8 months'
    },
    {
      title: 'Financial Modeling Project',
      description: 'Build financial models for investment portfolio optimization, risk assessment, or market prediction.',
      requiredSkills: ['Finance', 'Python/MATLAB', 'Time Series Analysis', 'Machine Learning'],
      expectedOutcomes: 'Complete a demonstrable financial model',
      timeline: '4-8 months'
    },
    {
      title: 'Industry Competitiveness Research',
      description: 'Analyze the competitive advantages and development trends of specific industries and propose strategic recommendations.',
      requiredSkills: ['Industrial Economics', 'PEST/SWOT Analysis', 'Case Study', 'Report Writing'],
      expectedOutcomes: 'Complete industry analysis report',
      timeline: '3-6 months'
    }
  ],
  'Physics': [
    {
      title: 'Quantum Computing Research',
      description: 'Study quantum computing fundamentals and explore quantum algorithms for solving complex problems.',
      requiredSkills: ['Quantum Mechanics', 'Linear Algebra', 'Programming', 'Quantum Information Theory'],
      expectedOutcomes: 'Complete research report on quantum computing applications',
      timeline: '6-12 months'
    },
    {
      title: 'Astrophysics Project',
      description: 'Analyze astronomical data and study celestial phenomena such as black holes, dark matter, and cosmic evolution.',
      requiredSkills: ['Astrophysics', 'Data Analysis', 'Telescope Operations', 'Astronomical Software'],
      expectedOutcomes: 'Complete astrophysics research report',
      timeline: '6-12 months'
    },
    {
      title: 'Condensed Matter Physics Research',
      description: 'Study the physical properties of condensed matter systems and explore new materials.',
      requiredSkills: ['Solid State Physics', 'Materials Science', 'Experimental Techniques', 'Data Analysis'],
      expectedOutcomes: 'Complete research on material properties',
      timeline: '6-12 months'
    },
    {
      title: 'Particle Physics Experiment',
      description: 'Participate in particle physics experiments and analyze data from high-energy physics experiments.',
      requiredSkills: ['Particle Physics', 'Data Analysis', 'Programming', 'Detector Technology'],
      expectedOutcomes: 'Complete particle physics analysis report',
      timeline: '6-12 months'
    }
  ],
  'Chemistry': [
    {
      title: 'Organic Synthesis Project',
      description: 'Design and synthesize novel organic compounds with potential applications in pharmaceuticals or materials.',
      requiredSkills: ['Organic Chemistry', 'Synthesis Techniques', 'Spectroscopy', 'Lab Safety'],
      expectedOutcomes: 'Complete synthesis of target compounds with analysis',
      timeline: '4-8 months'
    },
    {
      title: 'Materials Chemistry Research',
      description: 'Develop new functional materials for energy storage, catalysis, or electronics applications.',
      requiredSkills: ['Materials Chemistry', 'Characterization Methods', 'Synthesis', 'Data Analysis'],
      expectedOutcomes: 'Complete materials development and characterization',
      timeline: '6-12 months'
    },
    {
      title: 'Environmental Chemistry Study',
      description: 'Study environmental pollutants and develop methods for water or soil remediation.',
      requiredSkills: ['Environmental Chemistry', 'Analytical Chemistry', 'Sample Processing', 'Toxicology'],
      expectedOutcomes: 'Complete environmental analysis report',
      timeline: '4-8 months'
    },
    {
      title: 'Computational Chemistry Project',
      description: 'Use computational methods to simulate molecular structures and reactions.',
      requiredSkills: ['Computational Chemistry', 'Molecular Modeling', 'Programming', 'Quantum Chemistry'],
      expectedOutcomes: 'Complete molecular simulation and analysis',
      timeline: '4-8 months'
    }
  ],
  'Mathematics': [
    {
      title: 'Cryptography Research',
      description: 'Study cryptographic algorithms and their applications in information security.',
      requiredSkills: ['Number Theory', 'Abstract Algebra', 'Cryptography', 'Programming'],
      expectedOutcomes: 'Implement cryptographic algorithms and security analysis',
      timeline: '4-8 months'
    },
    {
      title: 'Data Science Project',
      description: 'Apply mathematical and statistical methods to analyze large datasets and extract insights.',
      requiredSkills: ['Statistics', 'Machine Learning', 'Python/R', 'Data Visualization'],
      expectedOutcomes: 'Complete data analysis project with actionable insights',
      timeline: '4-8 months'
    },
    {
      title: 'Financial Mathematics Study',
      description: 'Apply mathematical models to financial markets for pricing derivatives and risk management.',
      requiredSkills: ['Stochastic Processes', 'Financial Mathematics', 'Programming', 'Risk Analysis'],
      expectedOutcomes: 'Complete quantitative finance model',
      timeline: '4-8 months'
    },
    {
      title: 'Optimization Theory Research',
      description: 'Study optimization algorithms and their applications in various fields.',
      requiredSkills: ['Optimization Theory', 'Algorithms', 'Programming', 'Mathematical Modeling'],
      expectedOutcomes: 'Complete optimization algorithm development',
      timeline: '4-8 months'
    }
  ],
  'Engineering': [
    {
      title: 'Robotics Project',
      description: 'Design and build a robotic system for specific applications such as exploration or assistance.',
      requiredSkills: ['Mechanical Design', 'Electronics', 'Programming', 'Control Systems'],
      expectedOutcomes: 'Complete working robotic prototype',
      timeline: '6-12 months'
    },
    {
      title: 'Sustainable Energy Research',
      description: 'Develop renewable energy solutions such as solar cells or energy storage systems.',
      requiredSkills: ['Energy Engineering', 'Materials Science', 'System Design', 'Testing'],
      expectedOutcomes: 'Complete energy system prototype with analysis',
      timeline: '6-12 months'
    },
    {
      title: 'Smart City Project',
      description: 'Design IoT systems for smart city applications including traffic, energy, or security.',
      requiredSkills: ['IoT Technology', 'Sensor Networks', 'Data Analytics', 'System Integration'],
      expectedOutcomes: 'Complete IoT system demonstration',
      timeline: '6-12 months'
    },
    {
      title: 'Aerospace Engineering Study',
      description: 'Study aircraft or spacecraft design principles and perform aerodynamic analysis.',
      requiredSkills: ['Aerodynamics', 'Structural Analysis', 'Flight Mechanics', 'CAD Design'],
      expectedOutcomes: 'Complete aerospace design project with analysis',
      timeline: '6-12 months'
    }
  ],
  'Psychology': [
    {
      title: 'Cognitive Neuroscience Research',
      description: 'Study brain-behavior relationships using neuroscience methods and cognitive experiments.',
      requiredSkills: ['Neuroscience', 'Cognitive Psychology', 'Data Analysis', 'Research Methods'],
      expectedOutcomes: 'Complete cognitive neuroscience research report',
      timeline: '6-12 months'
    },
    {
      title: 'User Experience Study',
      description: 'Conduct UX research to understand user behavior and improve product design.',
      requiredSkills: ['UX Research', 'Interview Techniques', 'Data Analysis', 'Prototyping'],
      expectedOutcomes: 'Complete UX research report with recommendations',
      timeline: '4-8 months'
    },
    {
      title: 'Mental Health Research',
      description: 'Study mental health issues and develop intervention strategies.',
      requiredSkills: ['Clinical Psychology', 'Assessment Methods', 'Statistics', 'Ethics'],
      expectedOutcomes: 'Complete mental health research report',
      timeline: '6-12 months'
    },
    {
      title: 'Social Psychology Experiment',
      description: 'Design and conduct experiments on social behavior and group dynamics.',
      requiredSkills: ['Social Psychology', 'Experimental Design', 'Statistics', 'Report Writing'],
      expectedOutcomes: 'Complete social psychology experiment report',
      timeline: '4-8 months'
    }
  ],
  'Medicine': [
    {
      title: 'Medical Imaging Analysis',
      description: 'Develop AI algorithms for analyzing medical images such as X-rays, MRI, or CT scans.',
      requiredSkills: ['Medical Imaging', 'Deep Learning', 'Python', 'Healthcare Data'],
      expectedOutcomes: 'Complete medical image analysis system',
      timeline: '6-12 months'
    },
    {
      title: 'Drug Response Study',
      description: 'Study drug responses and develop personalized medicine approaches.',
      requiredSkills: ['Pharmacology', 'Biostatistics', 'Genomics', 'Data Analysis'],
      expectedOutcomes: 'Complete drug response analysis report',
      timeline: '6-12 months'
    },
    {
      title: 'Public Health Research',
      description: 'Study public health issues and develop intervention strategies for community health.',
      requiredSkills: ['Epidemiology', 'Biostatistics', 'Health Policy', 'Survey Methods'],
      expectedOutcomes: 'Complete public health research report',
      timeline: '6-12 months'
    },
    {
      title: 'Regenerative Medicine Study',
      description: 'Study stem cell therapy and tissue engineering for regenerative medicine.',
      requiredSkills: ['Cell Biology', 'Tissue Engineering', 'Lab Techniques', 'Biomaterials'],
      expectedOutcomes: 'Complete regenerative medicine research report',
      timeline: '6-12 months'
    }
  ],
  'default': [
    {
      title: 'Interdisciplinary Innovation Project',
      description: 'Combine knowledge from multiple disciplines to solve real-world problems.',
      requiredSkills: ['Interdisciplinary Thinking', 'Research Methods', 'Innovation', 'Project Management'],
      expectedOutcomes: 'Complete project report and presentation',
      timeline: '6-12 months'
    },
    {
      title: 'Social Research Project',
      description: 'Conduct in-depth research on social issues and propose solutions.',
      requiredSkills: ['Research Methods', 'Data Analysis', 'Report Writing', 'Public Speaking'],
      expectedOutcomes: 'Complete research report',
      timeline: '4-8 months'
    },
    {
      title: 'Technology Innovation Project',
      description: 'Apply technological innovation to solve practical problems through software or hardware development.',
      requiredSkills: ['Technical Development', 'Project Management', 'Teamwork', 'Documentation'],
      expectedOutcomes: 'Complete working technical product',
      timeline: '6-12 months'
    },
    {
      title: 'Academic Research Introduction',
      description: 'Participate in academic research projects under faculty guidance to learn research methods and academic writing.',
      requiredSkills: ['Literature Review', 'Academic Writing', 'Research Skills', 'Critical Thinking'],
      expectedOutcomes: 'Complete research summary or draft paper',
      timeline: '6-12 months'
    }
  ]
}

const majorMapping = {
  'Computer Science': 'Computer Science',
  'Software Engineering': 'Computer Science',
  'Artificial Intelligence': 'Computer Science',
  'Data Science': 'Computer Science',
  'Information Systems': 'Computer Science',
  'Biology': 'Biology',
  'Biochemistry': 'Biology',
  'Genetics': 'Biology',
  'Microbiology': 'Biology',
  'Neuroscience': 'Biology',
  'Economics': 'Economics',
  'Finance': 'Economics',
  'Accounting': 'Economics',
  'Business Administration': 'Economics',
  'Marketing': 'Economics',
  'Physics': 'Physics',
  'Chemistry': 'Chemistry',
  'Materials Science': 'Chemistry',
  'Environmental Science': 'Chemistry',
  'Mathematics': 'Mathematics',
  'Statistics': 'Mathematics',
  'Aerospace Engineering': 'Engineering',
  'Mechanical Engineering': 'Engineering',
  'Electrical Engineering': 'Engineering',
  'Chemical Engineering': 'Engineering',
  'Civil Engineering': 'Engineering',
  'Biomedical Engineering': 'Engineering',
  'Environmental Engineering': 'Engineering',
  'Robotics': 'Engineering',
  'Sustainable Energy': 'Engineering',
  'Psychology': 'Psychology',
  'Cognitive Science': 'Psychology',
  'Medicine': 'Medicine',
  'Nursing': 'Medicine',
  'Public Health': 'Medicine',
  'Biomedical Engineering': 'Medicine',
  'Political Science': 'default',
  'History': 'default',
  'Philosophy': 'default',
  'Linguistics': 'default',
  'Journalism': 'default',
  'Law': 'default',
  'Architecture': 'default',
  'Agricultural Science': 'default'
}

function generateResearchSuggestions(req, res) {
  const { majorDirection, personalBackground, hobbies, habits } = req.body
  
  if (!majorDirection) {
    return res.status(400).json({ message: '请选择目标专业方向' })
  }
  
  const category = majorMapping[majorDirection] || 'default'
  const suggestions = researchData[category] || researchData['default']
  
  let personalization = ''
  if (personalBackground || hobbies || habits) {
    const parts = []
    if (personalBackground) parts.push(`Based on your background in ${personalBackground}`)
    if (hobbies) parts.push(`your interest in ${hobbies}`)
    if (habits) parts.push(`and your characteristic of ${habits}`)
    personalization = ' ' + parts.join(', ') + ', this project aligns well with your profile.'
  }
  
  const personalizedSuggestions = suggestions.map(s => ({
    ...s,
    description: s.description + personalization
  }))
  
  setTimeout(() => {
    res.json({ 
      suggestions: personalizedSuggestions,
      major: majorDirection
    })
  }, 1000)
}

export { generateResearchSuggestions }
