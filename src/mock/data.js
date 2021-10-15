import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Oscar Xu (徐晟耀)',
  subtitle: "I'm a front-end developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'my_profile.jpg',
  paragraphOne: 'Hi, I am Oscar.',
  paragraphTwo:
    'I graduated from National Taiwan University with a master degree in computer science. Playing escape room games is my hobby, because I enjoy the moment of solving the puzzle and finding the hidden truth.',
  paragraphThree:
    'I have been engaged in front-end engineering for 2 years. Currently, I am working in the Scupio Ad Network Department of  Bridgewell Corporation. I am strong in troubleshooting and capable of working independently.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'littel_kanban.PNG',
    title: 'Simple Kanban',
    info: 'A kanban board with four statuses - open, doing, pending and done. Users can add a new task or edit/delete the existing task by clicking the task name.',
    info2: 'Tech stack: React, react context system, css module, semantic UI',
    url: 'https://little-kanban-2b522b.netlify.app/',
    repo: 'https://github.com/lawliet1995/little_kanban', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memory_game.PNG',
    title: 'Card Memory Game',
    info: 'A classic memory game. Flip two cards at every turn, and flipped cards will disappear if their images are the same.',
    info2: 'Tech stack:  React, styled component, react hook system',
    url: 'https://card-memory-game-5935e4.netlify.app/',
    repo: 'https://github.com/lawliet1995/card_memory_game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather_report.PNG',
    title: 'Current Weather Reporter',
    info: 'This app reports the current weather of the countries in Taiwan. The weather data is from Taiwan Central Weather Bureau.',
    info2: 'Tech stack:  React, css module, typescript, redux, redux-thunk.',
    url: 'https://current-weather-report-771f03.netlify.app/',
    repo: 'https://github.com/lawliet1995/weather_report', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'My e-mail: lawliet.tertium@gmail.com',
  cta2: 'My phone: 0975-638-213',
  cta3: 'Would you like to work with me?',
  btn: 'Send e-mail to me!',
  email: 'lawliet.tertium@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'instagram',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/lawliet.tertium',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oscar-xu-679263157/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lawliet1995/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
