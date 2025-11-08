export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
  fullDescription?: string;
  designApproach?: string;
  techIntegration?: string;
  impact?: string;
};

export const devProjects = [
  {
    id: 0,
    name: 'Blossom Bonds',
    description:
      'Service Design for Elderly Well-being in Urban Communities - Transforming underutilized rooftops into co-created, age-friendly gardens that promote physical health and social engagement.',
    technologies: ['Service Design', 'Participatory Design', 'AI Platform', 'Co-Creation'],
    github: '',
    demo: '',
    image: '/projects/0.jpg',
    available: true,
  },
  {
    id: 1,
    name: 'AI-assisted Outdoor Exploration Platform',
    description:
      'An intelligent companion system for hiking and trekking, providing personalized route planning, real-time AR guidance, and post-trip journey mapping with AI assistance.',
    technologies: ['AR/XR', 'AI Integration', 'Wearable Design', 'User Experience'],
    github: '',
    demo: '',
    image: '/projects/1.png',
    available: true,
  },
  {
    id: 2,
    name: 'Green Legacy of HUST',
    description:
      'Graduation Gift Design - An interactive, living plant planter that symbolizes growth and strengthens the alumni connection with the alma mater through sustainable design.',
    technologies: ['Product Design', 'Sustainable Design', 'Cultural Design'],
    github: '',
    demo: '',
    image: '/projects/2.png',
    available: true,
  },
  {
    id: 3,
    name: 'Eye-Care',
    description:
      'Smart Home Ophthalmic Service System - Bridging clinic and home with continuous monitoring, AI-powered diagnosis, and family collaboration for eye health management.',
    technologies: ['Service Design', 'Healthcare UX', 'AI Integration', 'Hardware Design'],
    github: '',
    demo: '',
    image: '/projects/3.png',
    available: true,
    fullDescription: 'Eye diseases such as myopia, cataracts, and macular degeneration are rising in China amid aging demographics and lifestyle shifts. Healthcare is transitioning from treatment-centric models to Medical 3.0: prevention-first, continuous monitoring, and personalized intervention. This project bridges clinic and home with continuous monitoring, AI-powered diagnosis, and family collaboration for eye health management.',
    designApproach: 'User research revealed 78% of users favor "at-home self-check + online consultation". The solution integrates hardware (testing device, massager), software (AI diagnosis, data tracking), and service design (family collaboration, continuous care).',
    techIntegration: 'AI image recognition for fundus analysis, real-time intraocular pressure monitoring, personalized care planning with ML models, family data sharing platform.',
    impact: 'Reduces offline waiting time, enables continuous health tracking, improves adherence through AI assistant and family supervision.',
  },
  {
    id: 4,
    name: 'Mooyland',
    description:
      'Theme park design project focusing on creating immersive experiences through environmental design and spatial planning.',
    technologies: ['Environmental Design', 'Spatial Planning', 'Experience Design'],
    github: '',
    demo: '',
    image: '/projects/4.png',
    available: true,
    fullDescription: 'A comprehensive theme park design project that creates immersive experiences through environmental design, spatial planning, and narrative-driven experiences.',
    designApproach: 'User journey mapping, spatial storytelling, environmental psychology integration.',
    techIntegration: '3D modeling, virtual prototyping, interactive experience design.',
    impact: 'Enhanced visitor engagement, improved spatial flow, memorable experience design.',
  },
  {
    id: 5,
    name: 'Mask Puzzle',
    description:
      'Educational toy design featuring traditional opera masks, combining cultural heritage with interactive learning experiences.',
    technologies: ['Product Design', 'Cultural Design', 'Interactive Design'],
    github: '',
    demo: '',
    image: '/projects/5.jpg',
    available: true,
    fullDescription: 'An educational toy design that combines traditional Chinese opera mask culture with modern interactive puzzle experiences, making cultural heritage accessible to children.',
    designApproach: 'Cultural research, child-centered design, play-based learning methodology.',
    techIntegration: 'Physical-digital interaction, AR-enhanced learning experiences.',
    impact: 'Makes cultural education engaging, promotes heritage awareness among young generation.',
  },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 0,
    name: 'Blossom Bonds - Service System',
    description:
      'A comprehensive service design system enabling co-creation, community engagement, and sustainable urban wellness for elderly residents.',
    technologies: ['UX Research', 'Service Design', 'Participatory Design'],
    github: '',
    demo: '',
    image: '/projects/0.jpg',
    available: true,
  },
  {
    id: 1,
    name: 'Outdoor Exploration - AR Interface',
    description:
      'Immersive AR interaction design for outdoor activities, providing minimal-interference guidance and real-time environmental awareness.',
    technologies: ['UX Research', 'AR/XR Design', 'Interaction Design'],
    github: '',
    demo: '',
    image: '/projects/1.png',
    available: true,
  },
  {
    id: 2,
    name: 'HUST Graduation Gift - Product Design',
    description:
      'Emotional and sustainable product design that creates lasting connections between alumni and their alma mater through interactive design.',
    technologies: ['UX Research', 'Product Design', 'Material Exploration'],
    github: '',
    demo: '',
    image: '/projects/2.png',
    available: true,
  },
  {
    id: 3,
    name: 'Eye-Care - Healthcare Service',
    description:
      'End-to-end healthcare service design integrating hardware, software, and data services for continuous eye health management.',
    technologies: ['UX Research', 'Service Design', 'Healthcare Design'],
    github: '',
    demo: '',
    image: '/projects/3.png',
    available: true,
  },
];
