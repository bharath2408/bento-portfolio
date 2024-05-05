import imgDailyCalories from '../../public/dailycalories.png';
import { IExperienceData, IProjectData } from './types';

export const options: string[] = ['all', 'about', 'projects'];

export const experienceData: IExperienceData[] = [
  {
    id: 1,
    title: 'PT. Fatiha Sakti',
    subtitle: 'Frontend  Developer',
    desc: 'Tasked with the development and upkeep of Human Resources Information System (HRIS) and attendance applications, including improvement key features, redesign, troubleshooting and resolving bugs. Additionally, responsible for enhancing the features of Key Performance Index (KPI) automation applications (Last Stack Using JQuery & PHP)',
    time: 'Aug 2023 - Present',
  },
];

export const projectsData: IProjectData[] = [
  {
    id: 1,
    title: 'SeaPhantom Landing Page',
    description:
      'Landing page for SeaPhantom, an NFT project focusing on innovative and sustainable technologies. Explore the world of NFTs and peer-to-peer trading on the SeaPhantom platform.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp',
    url: 'https://seaphantom.com',
  },
  {
    id: 2,
    title: 'SeaPhantom P2P Rum Token Escrow Trading',
    description:
      'Engage in NFT trading with the P2P Rum Token Escrow Trading project. This platform facilitates secure and transparent NFT transactions.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/fphb7ddemp4ixeutav1b.webp',
    url: 'https://auth.seaphantom.com/',
  },
  {
    id: 3,
    title: 'Labgrownbeasts Company Profile',
    description:
      'Explore the Labgrownbeasts Company Profile, showcasing innovation and excellence in the field. Learn about our vision, mission, and the cutting-edge work we do.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/mqprcb6todunicq4cg0a.webp',
    url: 'https://labgrownbeasts.com/',
  },
  {
    id: 4,
    title: 'Daily Calories Tracker Application',
    description:
      'Application for tracking and counting daily calorie intake, including meal plans. Integrates with Open API for comprehensive nutritional insights.',
    image:
      'https://ucarecdn.com/26d0d2ab-f0d4-453f-a71c-b395c744f7b0/dailycalories.png',
    url: 'https://github.com/adityahimaone/Daily-Calorie-Apps',
  },
];

export const selectedReposList: String[] = [
  'SwiftUI-EmojiFinder',
  'SwiftUI-StateBinding',
  'Next-Fake-Nike-Landing-Page',
  'Framer-Motion',
  'Next-DigitalMarket',
  'SwiftUI-Reusable-Layout',
  'NextJS-Travel-Agency',
  'FE-Cryptocurrency-LandingPage',
  'FE-Daily-Calorie-Apps',
  'FE-Hospital-Management-System',
  'BE-Daily-Calorie-App-Api',
  'go-clean-architecture',
];
