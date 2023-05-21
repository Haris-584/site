export const bio = [
  "Hello there &#128075;",
  "I'm Muhammad Haris, a DevOps Engineer with a specialization in many DevOps tools and technologies.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Verison Control",
    skillName: "VCS > Git, Github, Azure Repos",
    color: "1",
    percentage: "80",
  },
  {
    title: "CICD",
    skillName: "CICD > Azure DevOps, Github Actions, Jenkins ",
    color: "6",
    percentage: "70",
  },
  {
    title: "Webservers",
    skillName: "WebServers > IIS, Nginx, Xampp",
    color: "4",
    percentage: "70",
  },
  {
    title: "Containerization",
    skillName: "Containers > Docker ",
    color: "6",
    percentage: "60",
  },
  {
    title: "K8s",
    skillName: "K8s > Kubernetes ",
    color: "7",
    percentage: "40",
  },
  {
    title: "Azure",
    skillName: "Azure > DevOps, VMs , App Monitor, App Service",
    color: "3",
    percentage: "70",
  },
  {
    title: "AWS",
    skillName: "AWS Basics knowledge> EC2, IAM, AutoScaling, Elastic BeanStalk, CodeCommit, CloudWatch",
    color: "1",
    percentage: "70",
  },
  {
    title: "GCP",
    skillName: "GCP > Compute Engine, App Engine",
    color: "5",
    percentage: "70",
  },
  {
    title: "scrum",
    skillName: "Scrum > Azure Boards, JIRA",
    color: "7",
    percentage: "70",
  },
  {
    title: "monitoring",
    skillName: "Monitoring > Pingdom, Prometheues & Grafana, Application Insight",
    color: "3",
    percentage: "80",
  },
  {
    title: "codeanalysis",
    skillName: "Code Analysis > SonarQube",
    color: "5",
    percentage: "60",
  },
  {
    title: "Databases",
    skillName: "DB Basic > MySQL, SQL Server SSMS",
    color: "6",
    percentage: "50",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
 //carecloud projects
    webProjects: [
    { 
      projectName: "TalkEHR, WebEHR, WebServices, RPM, TalkMD, MedSR, Global Portal, TalkPHR",
      summary:
        "CareCloud, Inc. is a publicly traded American healthcare information technology company that provides services, to healthcare providers and hospitals. The Company maintains its headquarters in Somerset, New Jersey, and employs approximately 4,000 workers worldwide.",
      techStack: [".NET Core", "Angular", "Automation", "Support", "VCS"],
    },
    // {
    //   projectName: "Resume Builder",
    //   image: "images/resume-builder.png",
    //   summary:
    //     "Browser based editor to build and download Resumes in a customizable templates.",
    //   preview: "https://vinaysomawat.github.io/Resume-Builder",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
  ],
  // appinsnap projects 
  softwareProjects: [
    {
      projectName: "RideShare, Office Automation",
      image: "images/npm.png",
      summary:
        "NodeJS and ReactJS projects DevOps Support.",
      //preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["NodeJS", "Linux", "PM2", "VCS"],
    },
    {
      projectName: "JS Bank Projects, KPK Challan System, DHA, Frontier Corps, Management Systems",
      image: "images/dotnet.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Android",
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
      "CICD (.Net)",
      "Continuous Monitoring/ Site Reliability Engineering - Monitoring via Pingdom, Grafana, Uptime Kuma, and Application Insight",
      "IIS Web Servers",
      "Git Support ",
      "Staging and Production Releases",
      "Release Isolation",
      "Product Versioning"
    ],
    tags: ["Azure DevOps CICD", "Sonarqube Code Analysis", " IIS web server" , " .Net Containerization ", "Fixing Git Issues", "Release Isolation Implementation", "Site Relaibility Engineering tasks", "Pingdom", "Grafana", "Azure Application Insight", "Uptime Kuma", "Downtime Escalation"],
    icon: "qrcode",
  },
  {
    title: "APPINSNAP",
    duration: "Nov 2021 - Sept 2022",
    subtitle: "Associate DevOps Engineer",
    details: [
      "CICD (.Net, Android, ReactJS, NodeJS)",
      "Manage NodeJS appplication server and PM2",
      "IIS and Tomcate Web Servers",
      "Git Support ",
      "Staging Releases and Rollbacks",
    ],
    tags: ["Azure DevOps CICD", "PM2",  "Coodination with team", "Git issues", "MySQL", "SSMS", "Tomcat"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Masters of Science in Computer Science (MSCS)",
    duration: "2019-2021",
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
    duration: "2014-2018",
    subtitle: "Kohat University of Science and Technology, Kohat Pakistan",
    details: [
      "CGPA: 3.45",
    ],
    tags: ["CS Courses"],
    icon: "graduation-cap",
  },
];

export const research = [
  {
    title: "Internet of Intelligent Vehicles (IOIV): An Intelligent VANET Based Computing via predictive modeling",
    duration: "2023",
    subtitle: "IEEE Access",
    details: [
      "IF:3.36 ",
    ],
    tags: [
      "Muhammad Haris",
      "Dr Munam Ali Shah",
      "Dr Carsten Maple",
    ],
    icon: "book",
  },
  {
    title: "Attention-Based CNN-RNN Arabic Text Recognition from Natural Scene Images",
    duration: "2021",
    subtitle: "MDPI Forcasting",
    details: [
      "Collaborative work ",
    ],
    tags: [
      "Hanan Butt", 
      "M Raheel Raza", 
      "M Javaid Ramzan", 
      "M Junaid Ali", 
      "M Haris"
    ],
    icon: "book",
  },
  {
    title: "The Price Scraping Bot Threat on E-commerce Store Using Custom XPATH Technique",
    duration: "2021",
    subtitle: "IEEE 26th International Conference on Automation and Computing (ICAC) ",
    details: [
      "Collaborative work ",
    ],
    tags: [
      "Rida Yaqoob ", 
      "Sana", 
      "M Haris", 
      "Samadyar", 
      "Dr Munam Ali Shah",
    ],
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
      {
        text: "Download Resume",
        link: "https://drive.google.com/file/d/1uLAUiG3pX-rPxwHBZbuKw7rvSamPmLLy/view?usp=sharing",
      },
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
   //   "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "Haris-584";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
