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
  img: 'profile.jpg',
  paragraphOne:
    '夢十夜（日語：夢十夜／ゆめじゅうや Yume Jūya）是日本作家夏目漱石的一個短篇小說系列。',
  paragraphTwo:
    '該作品原先在1908年7月25日至8月5日連載於朝日新聞上。十夜豆瓣评分：7.2 简介：☆獲邀「東京影展」特別放映☆獲邀「台北電影節」特別放映100年來最綺麗離奇的男情女慾夢一夜：愛情（導演/實相寺昭雄，演員/小泉今日子',
  paragraphThree:
    '夢十夜（日語：夢十夜／ゆめじゅうや Yume Jūya）是日本作家夏目漱石的一個短篇小說系列。在小說中，夏目漱石描寫了在十個不同時代中，包括他本人所生活的年代（明治時代）以及追溯至神的時代和鎌倉時代的夢境。在這十篇短篇小說中有四篇以「曾經做過這樣的夢（こんな夢を見た Kon na yume o mita）」開頭。',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '嗨?',
  btn: 'ㄐㄐ',
  email: 'https://www.facebook.com/lawliet.tertium',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
