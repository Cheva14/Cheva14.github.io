/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sebastian's Portfolio",
  description:
    "An enthusiastic individual who collaborates well, enjoys learning from others, and excels at creating and managing websites.",
  og: {
    title: "Sebastian's Portfolio",
    type: "website",
    url: "https://cheva14.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sebastian Torrejon Alonzo",
  logo_name: "Cheva",
  subTitle:
    "An enthusiastic individual who collaborates well, enjoys learning from others, and excels at creating websites and mobile apps.",
  resumeLink:
    "https://drive.google.com/file/d/1UhPTNNsS25bWknWZIiCNLb1tc9wA1Gse/view?usp=sharing",
  githubProfile: "https://github.com/cheva14",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/cheva14",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sebastian-torrejon/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/c/cheva14",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sebastian.torrejon14@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/cheva.14/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/user/1284249674?si=505c053f710b4107",
    fontAwesomeIcon: "fa-spotify", // Reference https://fontawesome.com/icons/spotify?style=brands
    backgroundColor: "#1DB954", // Reference https://simpleicons.org/?q=spotify
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/cheva14",
    fontAwesomeIcon: "fa-twitch", // Reference https://fontawesome.com/icons/twitch?style=brands
    backgroundColor: "#9146FF", // Reference https://simpleicons.org/?q=twitch
  },
  {
    name: "Snapchat",
    link: "https://story.snapchat.com/@cheva.14",
    fontAwesomeIcon: "fa-snapchat", // Reference https://fontawesome.com/icons/snapchat?style=brands
    backgroundColor: "#FFFC00", // Reference https://simpleicons.org/?q=snapchat
  },
];

const skills = {
  data: [
    {
      title: "Web App Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end mainly using React",
        "⚡ Creating application backend in Firebase and other API's",
        "⚡ Maintaining and hosting servers with multiple services",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "devicon:html5",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "devicon:css3",
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon:bootstrap",
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "devicon:sass",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "devicon:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "devicon:react",
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "devicon:vuejs",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs",
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "devicon:express",
        },
        {
          skillName: "ColdFusion",
          fontAwesomeClassname: "file-icons:coldfusion",
          style: {
            color: "#2D62FF",
          },
        },
        {
          skillName: "SQLDev",
          fontAwesomeClassname: "devicon:sqldeveloper",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "devicon:vercel",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
      ],
    },
    {
      title: "Mobile App Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building universal apps with React Native and Expo",
        "⚡ Creating application backend in Firebase and other API's",
        "⚡ Deploying and maintaining apps to the App Store and Play Store",
      ],
      softwareSkills: [
        {
          skillName: "Expo",
          fontAwesomeClassname: "logos:expo-icon",
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "devicon:react",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "devicon:swift",
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "devicon:kotlin",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/cheva14/",
    },
    {
      siteName: "CodeWars",
      iconifyClassname: "simple-icons:codewars",
      style: {
        color: "#B1361E",
      },
      profileLink: "https://www.codewars.com/users/Chevoide",
    },
    {
      siteName: "Codecademy",
      iconifyClassname: "simple-icons:codecademy",
      style: {
        color: "#1F4056",
      },
      profileLink: "https://www.codecademy.com/profiles/Cheva.14",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Grand Valley State University",
      subtitle: "B.S. in Computer Science",
      logo_path: "gvsu_logo.png",
      alt_name: "GVSU",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I studied software developing subjects like Database, Algorithms, Data Structures, etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.gvsu.edu/",
    },
    {
      title: "University of Roehampton London",
      subtitle: "Semester Abroad",
      logo_path: "uor_logo.png",
      alt_name: "UoR London",
      duration: "Jan - Jun 2023",
      descriptions: [
        "⚡ I lived and studied six months abroad in London UK.",
        "⚡ I was able to learn subjects like Software Engineering, Data Science, and AI.",
      ],
      website_link: "https://www.roehampton.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Bootstrap",
      subtitle: "- Codecademy",
      logo_path: "codecademy_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Cheva.14/certificates/0595479d03627a8cb816b069000e4d06",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
    {
      title: "CSS",
      subtitle: "- Codecademy",
      logo_path: "codecademy_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Cheva.14/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
    {
      title: "Deployment",
      subtitle: "- Codecademy",
      logo_path: "codecademy_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Cheva.14/certificates/358e250fca144526a6b2934ff44fbc01",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
    {
      title: "JavaScript",
      subtitle: "- Codecademy",
      logo_path: "codecademy_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Cheva.14/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
    {
      title: "HTML",
      subtitle: "- Codecademy",
      logo_path: "codecademy_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Cheva.14/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships",
  description:
    "I have worked in a well established University mostly as Web Developer. I love creating websites and that is why my experience focuses on that.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Student Employee",
          company: "Laker Food Co.",
          company_url: "https://www.gvsu.edu/campusdine/",
          logo_path: "lakerfoodco.png",
          duration: "2021 - Present",
          location: "Michigan",
          description:
            "I was responsible for assisting withe the preparation, cooking, serving and storage of food according to standards using various equipment and utensils. I Assisted with cleaning and snitation of the facility and equipment. I followed all safety and food handling guidelines. I reported to fulltime employees and management as assigned. I became familiar with and follow all policies, procedures, and standards, other duties as assigned, and I provided eexceptional customer service to guests that visit the dining location.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Enterprise Applications Intern",
          company: "GVSU IT",
          company_url: "https://www.gvsu.edu/it/",
          logo_path: "gvsu_logo.png",
          duration: "June 2023 - Aug 2023",
          location: "Michigan, USA",
          description:
            "Building new features on the backend recommendation system, specifically developed enhacements and systems. Applying access control, secure application development practices. Implementation of accessible applications. Reporting generation using custom SQL and visual report designer.",
          color: "#40AEF0",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Back End projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Portfolio",
  description:
    "I have worked on a few coding projects for school and of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "0",
      name: "Portfolio Website",
      createdAt: "2023",
      description: "My own clean, beautiful, and responsive portfolio!",
      url: "https://sebastiantorrejon.com",
    },
    {
      id: "1",
      name: "Old Portfolio Webiste",
      createdAt: "2020",
      description: "My first static portfolio website.",
      url: "https://sebastiantorrejon.com/website2/",
    },
    {
      id: "2",
      name: "iQuest Mobile App",
      createdAt: "2023",
      description:
        "App that allows users with autism identify and practice independence goals they can work on.",
      url: "https://youtu.be/48yLKezKafE",
    },
    {
      id: "3",
      name: "WebChads",
      createdAt: "2023",
      description: "Web App to chat with friends.",
      url: "https://webchads.web.app/",
    },
    {
      id: "4",
      name: "Circulatory System",
      createdAt: "2023",
      description: "Informative website about circulatory system in anatomy.",
      url: "https://circulatorysystem.vercel.app/",
    },
    {
      id: "5",
      name: "Padel Tracker",
      createdAt: "2023",
      description: "Web App to keep track of your padel matches",
      url: "https://padel-27c21.web.app/",
    },
    {
      id: "5",
      name: "Connect X",
      createdAt: "2022",
      description:
        "Connect 4 game with personalizable board size and win condition.",
      url: "https://github.com/Cheva14/Connect-X",
    },
    {
      id: "6",
      name: "Cheva's Market (In Development)",
      createdAt: "2023",
      description: "E-Commerce App to sell my own products.",
      url: "https://chevasmarket.vercel.app/",
    },
    {
      id: "7",
      name: "Encrypted Chat",
      createdAt: "2022",
      description: "Encrypted Client-Server Chat over TPC Sockets.",
      url: "https://github.com/Cheva14/TCP-Encrypted-Chat-Program",
    },

    {
      id: "8",
      name: "File Transfer",
      createdAt: "2022",
      description:
        "Reliable Client-Server File Transfer over UDP Sockets and using SW-Protocol.",
      url: "https://github.com/Cheva14/Reliable-File-Transfer-over-UDP",
    },
    {
      id: "9",
      name: "16-Bit ALU",
      createdAt: "2022",
      description:
        "Circuit to make mathematical operations with 16-Bit numbers.",
      url: "https://github.com/Cheva14/ALU-16-Bit",
    },
    {
      id: "10",
      name: "World Reports",
      createdAt: "2023",
      description: "Full-Stack Application to generate Population Reports.",
      url: "https://github.com/Cheva14/FullStackApp",
    },
    {
      id: "11",
      name: "Car Price Prediction",
      createdAt: "2023",
      description:
        "Application to predict the price of a car using linear regresion in a prepocessed dataset about used cars.",
      url: "https://github.com/Cheva14/Price-Prediction",
    },
    {
      id: "12",
      name: "Navigation System",
      createdAt: "2023",
      description:
        "App to find most efficient path from one place to another using search algorithms.",
      url: "https://github.com/Cheva14/Car-Nav-System",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "snap_cheva.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with any development consultation or programming question.",
  },
  blogSection: {
    title: "My Lifestyle",
    subtitle:
      "🎥 Curious about my daily life and lifestyle? Join me on my YouTube channel for vlogs where I share vlogs and show what a student developer's life looks like. See you there! 😊",
    avatar_image_path: "blogs_image.svg",
    link: "https://www.youtube.com/c/cheva14",
  },
  addressSection: {
    title: "Did You Like My Website?",
    subtitle: "",
    locality: "mi",
    country: "usa",
    region: "nw",
    postalCode: "49401",
    streetAddress: "dr campus",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.buymeacoffee.com/cheva",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
