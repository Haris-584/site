export const bio = [
  "Hello there &#128075;",
  "I'm Muhammad Haris, a DevOps Engineer with a specialization in many DevOps tools and technologies.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Angular, Rxjs, Ngxs",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, Tailwind",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Postman, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
  {
    title: "Analytics",
    skillName: "CleverTap, Countly",
    color: "5",
    percentage: "50",
  },
  {
    title: "Editor",
    skillName: "VS Code",
    color: "6",
    percentage: "70",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
 //carecloud projects
    webProjects: [
    {
      projectName: "SonarQube Integration for VGIT Services",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  // appinsnap projects 
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  //freelance projects
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  // open source projects 
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};


export const experience = [
  {
    title: "Freelance DevOps Engineer.",
    duration: "March 2023 - Present",
    subtitle: "DevOps Engineer",
    details: [
      "Currently working with Client remotely"
    ],
    tags: ["Azure DevOps", "Application Insight", "Yaml template", "R&D tasks", "QA & Staging Deployments"],
    icon: "heartbeat",
  },
  {
    title: "CareCloud.",
    duration: "Sept 2022 - March 2023",
    subtitle: "DevOps Engineer",
    details: [
      "Collaboration with Dev",
      "CICD and Deployments",
    ],
    tags: ["Azure DevOps CICD", "Sonarqube Code Analysis", " IIS web server" , " .Net Containerization ", "Fixing Git Issues", "Release Isolation Implementation", "Site Relaibility Engineering tasks", "Pingdom", "Grafana", "Azure Application Insight", "Uptime Kuma", "Downtime Escalation"],
    icon: "qrcode",
  },
  {
    title: "APPINSNAP",
    duration: "Nov 2021 - Sept 2022",
    subtitle: "Associate DevOps Engineer",
    details: [
      "Collaboration with Dev",
      "CICD and Deployments",
    ],
    tags: ["Azure DevOps CICD", "PM2",  "Coodination with team", "Git issues", "MySQL", "SSMS", "Tomcat"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Masters of Science in Computer Science (MSCS)",
    duration: "",
    subtitle: "COMSATS University Islamabad, Islamabad Pakistan",
    details: [
      "CGPA: 3.41",
    ],
    tags: [
      "Research Methodology in IT",
      "Artificial Intelligence",
      "Analysis of Algorithm",
      "Theory of Computation",
      "Machine Learning",
      "Data Mining",
      "Digital Image Processing",
      "Semantic Web",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Bachelors of Science in Computer Science (BSCS)",
    duration: "",
    subtitle: "Kohat University of Science and Technology, Kohat Pakistan",
    details: [
      "CGPA: 3.45",
    ],
    tags: ["CS Courses"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Stackoverflow",
        link: "https://stackoverflow.com/users/8244628/muhammad-haris",
      },
      {
        text: "GitHub",
        link: "https://github.com/Haris-584",
      },
      // {
      //   text: "LeetCode",
      //   link: "https://leetcode.com/somawatvinay/",
      // },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      // {
      //   text: "Clone this page",
      //   link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      // },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/muhammad-haris-454a92131/",
      },
      // {
      //   text: "Twitter",
      //   link: "https://twitter.com/thesigmakid",
      // },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Muhammad Haris.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "Haris-584";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
