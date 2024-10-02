export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      'Front-end engineer focused on designing and building high-quality websites and apps.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full object-cover object-center',
    titleClassName: 'justify-end',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title:
      'I thrive where the essence of art merges with simplicity and functional design.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title:
      'Bringing my passion for video games to life by developing my own game.',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Reach out to me anytime 💭',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Modern UI/UX website',
    des: 'This project showcases modern trends, seamless animations, and an exceptional user experience.',
    img: '/zenwave.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://zenwaveai.netlify.app/',
    linkText: 'Visit Zenwave',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/yoom.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://yoom-taupe-five.vercel.app/',
    linkText: 'Visit Yoom',
  },
  {
    id: 3,
    title: 'Carepulse - Healthcare app',
    des: 'A healthcare management system, designed to streamline the tedious checkup process.',
    img: 'carepulse.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://carepulse-by-zen.vercel.app/',
    linkText: 'Visit Carepulse',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
    img: 'iphone.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://zens-iphone-clone.netlify.app',
    linkText: 'Visit 3D iPhone model',
  },
];

export const workExperience = [
  {
    id: 1,
    title: '100Devs',
    desc: 'Worked closely with a team of developers to design and build modern, responsive web applications, consistently adhering to best practices in coding and design. Developed full stack applications with an emphasis on semantic structure, optimizing for both accessibility and maintainability. Utilized agile methodologies, especially SCRUM, to manage projects efficiently, ensuring clear communication and fostering iterative development.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Founder & CEO',
    desc: 'I take businesses to the next level by independently delivering custom web solutions. I create and maintain scalable web applications using Next.js and React, handling both front-end and back-end development. My work includes implementing server-side rendering, API integration, and performance optimization for SEO. I design responsive user interfaces, manage state with Redux, and handle database interactions. By collaborating closely with global clients, I ensure that each solution is uniquely tailored to meet their business needs.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Independant Contractor',
    desc: 'I developed responsive web apps using React.js, implemented Redux for state management, and optimized load times with code-splitting. I also integrated APIs, managed routing with React Router, and contributed to UI/UX improvements through animations and cross-browser testing.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Front-End Developer',
    desc: 'Developed and maintained responsive web applications with a focus on delivering high-quality user experiences. Collaborated with cross-functional teams in an Agile environment to implement new features, optimize web performance, and ensure the applications met design and business goals. Wrote clean, maintainable code while staying up-to-date with industry trends and best practices, and actively participated in testing, debugging, and code reviews.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    url: 'https://github.com/zenitzo',
  },
  {
    id: 2,
    img: '/twit.svg',
    url: '/sweResume.pdf',
  },
  {
    id: 3,
    img: '/link.svg',
    url: 'https://www.linkedin.com/in/chrisgonzalez-dev/',
  },
];
