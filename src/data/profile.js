export const profile = {
  name:     'Basharat Hussain',
  title:    'Assistant Professor · Faculty of Computing · FAST-NU Islamabad',
  tagline:  'PhD CS · 23+ yrs in Software & AI · Deep Learning · Federated Learning · LLMs',
  location: 'Islamabad, Pakistan',
  email:    'basharat@live.com',
  photo:    null,   // set to '/photo.jpg' once you add your photo to public/

  links: [
    { label: 'GitHub',         url: 'https://github.com/basharathussain',                                       icon: 'github'  },
    { label: 'LinkedIn',       url: 'https://www.linkedin.com/in/basharathussain',                              icon: 'linkedin' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=FNRaUhwAAAAJ&hl=en',             icon: 'scholar'  },
    { label: 'ORCID',          url: 'https://orcid.org/0000-0001-7492-5725',                                    icon: 'orcid'    },
    { label: 'IEEE',           url: 'https://ieeexplore.ieee.org/author/37088916405',                           icon: 'ieee'     },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/530996/basharat',                          icon: 'stackoverflow' },
  ],

  resume: null,   // set to URL of your PDF resume

  skills: [
    {
      group: 'AI / ML',
      tags:  ['GenAI', 'LLMs', 'Multimodality', 'RAG', 'Model Fine-Tuning', 'Agentic AI', 'Federated Learning', 'Deep Learning'],
    },
    {
      group: 'Frameworks',
      tags:  ['FastAPI', 'LangChain', 'LangGraph', 'ASP.NET Core', 'React', 'React Native', 'N8N'],
    },
    {
      group: 'Languages',
      tags:  ['Python', 'TypeScript', 'C#', 'C++', 'Java'],
    },
    {
      group: 'DevOps / Cloud',
      tags:  ['Docker', 'PostgreSQL', 'Redis', 'Cloud Computing', 'Linux'],
    },
  ],

  experience: [
    {
      role:    'Assistant Professor',
      company: 'FAST National University of Computer & Emerging Sciences',
      period:  '2020 – Present',
      points:  [
        'Faculty of Computing, Islamabad Campus — teaching AI/ML and Software Engineering courses.',
        'Research focus: federated learning in intelligent transportation, spatio-temporal neural networks, LLMs, and image/motion diffusion models.',
      ],
    },
  ],

  projects: [
    {
      name:  'AI-RecogniX',
      desc:  'Real-time face recognition system with multi-angle enrollment (Face ID–style), live recognition overlay, and voice alerts. Supports IP camera integration via RTSP tunnel.',
      tags:  ['Python', 'FastAPI', 'ASP.NET Core', 'React', 'dlib', 'PostgreSQL', 'Docker'],
      image: null,
      github: 'https://github.com/basharathussain/AI-RecogniX-2026',
      demo:   null,
    },
    {
      name:  'AI Personal Assistant',
      desc:  'Cross-platform digital assistant with real-time chat, PDF and image processing, document Q&A, and user authentication. Powered by LangGraph and Groq LLM.',
      tags:  ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'LangGraph', 'Groq LLM'],
      image: null,
      github: null,
      demo:   null,
    },
    {
      name:  'Smart Home LLM Agent',
      desc:  'Intelligent home automation system where LLM agents interpret natural language commands to control IoT devices — lighting, HVAC, security, media.',
      tags:  ['Python', 'LLM', 'IoT', 'FastAPI', 'LangChain', 'RAG'],
      image: null,
      github: null,
      demo:   null,
    },
    {
      name:  'Desi Dhaba',
      desc:  'Multi-tenant restaurant platform with AI chatbot, voice ordering, real-time order tracking, and multi-brand management. Deployed across dev / test / prod environments.',
      tags:  ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
      image: null,
      github: null,
      demo:   null,
    },
  ],
}
