/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kirthikraj Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact...",
  og: {
    title: "Kirthikraj Kamaraj Portfolio",
    type: "website",
    url: "https://prakashupadhyay.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Kirthikraj Kamaraj",
  logo_name: "KirthikrajKamaraj",
  nickname: "worka_holic",
  subTitle:
    "A enthusiastic individual dedicated to developing end-to-end products that build sustainable and scalable social and technical systems, aiming to generate a significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1zZAJ9xtPKTzyOeOIlotNnyOpLy2HAtg8/view?usp=sharing",
  portfolio_repository: "https://github.com/Kirthik1104/portfolio-kirthik",
  githubProfile: "https://github.com/Kirthik1104",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Kirthik1104",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kirthikrajkamaraj/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kirthikraj1104@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_kirthikraj_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "DevOps Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ DevOps Aspirant specializing in AWS, Docker, Jenkins, CI/CD, Kubernetes, Linux, Git & Github webhooks",
        "⚡ Expert in Designing and implementing End-to-End CI/CD Pipeline using Jenkins, Github webhooks",
        "⚡ Proficient in creating a three-tier application with SDLC policy",
        "⚡ Proficient in creating optimized Docker images, managing containerized applications, and deploying scalable Docker solutions for efficient application distribution and deployment",
        "⚡ Loading Up: Terraform, Ansible, Graphana, Prometheus, Grafana.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Apache Hadoop",
          imageSrc: "hadoop.png",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture & Database Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Experience in AWS services like 𝐄𝐂𝟐, 𝐄𝐂𝐑, 𝐒𝟑, 𝐀𝐌𝐈, 𝐈𝐀𝐌, 𝐑𝐨𝐮𝐭𝐞𝟓𝟑, 𝐑𝐃𝐒, 𝐄𝐅𝐒, 𝐒𝐍𝐒, 𝐂𝐥𝐨𝐮𝐝𝐅𝐫𝐨𝐧𝐭, 𝐕𝐏𝐂, 𝐋𝐨𝐚𝐝 𝐁𝐚𝐥𝐚𝐧𝐜𝐞𝐫 and 𝐀𝐮𝐭𝐨-𝐒𝐜𝐚𝐥𝐢𝐧𝐠",
        "⚡ Experienced in leading successful migrations of on-premises applications to the cloud, with extensive knowledge in designing and implementing cloud architectures to optimize performance and cost efficiency",
        "⚡ Proficient in creating a three-tier application in the cloud with high availability and zero downtime",
        "⚡ Certified Solutions Architect",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        
        {
          skillName: "Apache Hadoop",
          imageSrc: "hadoop.png",
        },
        {
          skillName: "Apache Spark",
          imageSrc: "pyspark.png",
        },
        {
          skillName: "PostGres SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML5, CSS3, Bootstrap, React.Js",
        "⚡ Creating application backend in Python3 MySQL, NoSQL.",
        "⚡ Specialize in creating Supply Chain and E-commerce full stack applications.",
        "⚡ Developing mobile applications using Flutter, & Firebase",
    
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          imageSrc: "mysql.png",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Python",
          imageSrc: "python.png",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Data Science & Prompt Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready machine learning models for various kaggle projects and statistical use cases",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Hands on Experience with Pandas, Numpy, Keras, OpenCV, Tensorflow, Scikit-learn, Matplotlib, OpenCV, CNN",
        
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Chat-GPT",
          imageSrc:"openai.png",
          style: {
            backgroundColor: "transparent",
            color: "#663399",
          },
        },
        
        {
          skillName: "Python",
          imageSrc: "python.png",
          style: {
            color: "#663399",
          },
        },
        
      ],
    },
   
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
       
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Prakash_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Prakash391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};
const degrees = {
  degrees: [
    {
      title: "Binghamton University",
      subtitle: "M.S in Computer Science",
      logo_path: "bingh.png",
      alt_name: "Binghamton University",
      duration: "Aug 2022-May 2024",
      descriptions: [
        "⚡ I am currently enrolled in the Master of Science program in Computer Science at SUNY, Binghamton University",
        "⚡ Courses Completed: Operating System, Computer Organization and Architecture, Design and Analysis of Algorithm, Programming Languages, System Programming, Cloud Computing, Computer Security, Database Systems, Social Media DataScience Pipeline.",
        "⚡ Currently working as a Web Designer for Binghamton University. Leading the full scale and redesign and dveleopment of Binghamton University Help Desk website",
      ],
      website_link: "https://www.binghamton.edu/",
    },
    {
      title: "University of Mumbai",
      subtitle: "B.E in Computer Science ",
      logo_path: "mu_logo.png",
      alt_name: "University of Mumbai",
      duration: "Aug 2018-June 2022",
      descriptions: [
        "⚡ Completed key certifications and courses in Data Structures, Algorithms, Database Management, and Software Engineering, complemented by internships as a Software Developer Intern at Gustovalley Technovations LLP and an Networking Intern at Thakur College of Engineering & Technology.",
        "⚡ Lead the National Service Scheme (NSS) as the Junior Council & under the post of Website Manager for the year 2020-2021, teaching underprivileged children in Mumbai, and contributing to initiatives aimed at enhancing their quality of life in a rapidly evolving socio-economic landscape.",
        "⚡ Published a paper in <b>International Journal for Research in Applied Science and Engineering Technology (IJRASET)</b> on “Student Faculty Portal using ML & Cloud Services”, Nov 2021.",
        "⚡ Technical paper presentation in National Level Technical Symposium, V-SymCoSci, at Muthayamal College of Engineering;(April 2021)"
      ],
      website_link: "https://mu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Solutions Architect Associate",
      subtitle: "- AWS",
      logo_path: "aws-solutions-architect.png",
      certificate_link:
        "https://www.credly.com/badges/91a40525-5293-4d65-a359-a7dfb62cc420/public_url",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "aws-certified-cloud-practitioner.png",
      certificate_link:"https://www.credly.com/badges/f489a185-f5ad-40cb-aad2-62b8f3dc1c42/public_url",
      alt_name: "AWS",
      color_code: "#00000099",
    },
    {
      title: "Python Data Visualization",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:"https://coursera.org/verify/HMKUL4BQPJX7",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Data Analysis",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:"https://coursera.org/verify/MQ64HPGGJK35",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Fundamentals of Network Communication",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:"https://coursera.org/verify/RGYEECT7MDPZ",
      alt_name: "Coursera",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      work: true,
      experiences: [
        {
          title: "Web Designer",
          company: "Information Technology Services, Binghamton University",
          company_url: "https://www.binghamton.edu/its/index.html",
          logo_path: "bingh.png",
          duration: "May 2023 - Present",
          location: "Binghamton, New York",
          description:"Led the full-scale redesign and development of Binghamton University’s IT Help Desk website in Omni CMS. Transformed web traffic analysis into actionable insights, strategically organizing and highlighting high-demand serviceson the homepage, resulting in a decrease in support tickets related to common service discovery",
          color: "#0879bf",
        },
        {
          title: "Software Developer Intern",
          company: "Gustovalley Technovations LLP",
          company_url: "https://gustovalley.in/",
          logo_path: "gustovalley.jpeg",
          duration: "Sept 2021 - Oct 2021",
          location: "Mumbai, India",
          description:"Created an IoT application using the Blynk app to control appliances and monitor devices remotely. Implemented server setup and utilized HTML, CSS, SQL database, and PHP to develop a web application to efficiently capture and manage Microcontroller status. Implemented API links to update server data and retrieve controller status, ensuring responsive IoT device control.", 
          color: "#9b1578",
        },
        {
          title: "Networking Intern",
          company: "Thakur College of Engineering & Technology",
          company_url: "https://www.tcetmumbai.in/",
          logo_path: "tcet.jpg",
          duration: "Jun 2020 - Jul 2020",
          location: "Mumbai, India",
          description:"Analyzed different routing changes including BGP, OSPF, and EIGRP and improved network performance by 30%. Detected network vulnerabilities through infrastructure security testing and threat tracking. Attained proficiency in working with Cisco hardware by constructing network topologies using various scenarios",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Junior Council",
          company: "TCET-NSS",
          company_url: "https://www.tcetmumbai.in/nssTCET.html",
          logo_path: "NSS.jpg",
          duration: "Aug 2019 - Aug 2020",
          location: "Mumbai, India",
          description:"NSS is one of the aided extra-curricular activities conducted by the University of Mumbai and the Department of Youth Affairs and Sports, Government of India. Its motto is NOT ME BUT YOU. Led National Service Scheme (NSS) as Website Manager for Academic Year 2020-2021. Responsible for keeping the feed updated on the 4 pillars of NSS i.e EDUCATION, SOCIETY, HEALTH, ENVIRONMENT. Dedicated my time and efforts to educate underprivileged children in various locations around Mumbai. The NSS, focused on aiding the less privileged segments of society, aims to enhance their quality of life through educational programs tailored to the demands of today's technology-driven, knowledge-based economy. My role encompassed not just teaching but also inspiring these children to aspire for greater achievements, aligning with the NSS's mission to foster overall development.",
          color: "#4285F4",
        },
        // {
        //   title: "Student Volunteed Head at We Can We Will",
        //   company: "We Can We Will",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "wecanwewill_logo.png",
        //   duration: "Aug 2018 - Mar 2019",
        //   location: "Mumbai, India",
        //   description:"As a volunteer with We Can We Will, I was entrusted with a meaningful role where I personally mentored a child, guiding their educational journey over eight months. This experience was not just about imparting academic knowledge but also about nurturing their overall growth, aligning with the organization's mission to uplift the less fortunate. We Can We Will focuses on combating hunger and illiteracy, driven by educators and volunteers committed to breaking the cycle of poverty and fostering hope for a brighter future. My involvement allowed me to contribute to this noble cause, working alongside professionals and experts to provide quality education and access to essential healthcare. This period was a testament to the belief that positive change is achievable with courage, determination, and creativity, and every individual deserves the opportunity to live a life of dignity and ",
        //   color: "#D83B01",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. My best experiences lie in creating DevOps Deployment, Orchestration & Containerization, Cloud Architecture & Deployment, and Full Stack Development. Below are some of my creative personal projects...",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name: "Student Faculty Portal using ML & Cloud Services",
      createdAt: "2021-10-06T16:26:54Z",
      description: "Published a paper in International Journal for Research in Applied Science and Engineering Technology (IJRASET) on “Student Faculty Portal using ML & Cloud Services”, Nov 2021",
      url:"https://www.ijraset.com/best-journal/studentfaculty-portal-using-ml-and-cloud-services",
    },
    {
      id: "2",
      name: "Technical Paper Presentation",
      createdAt: "2021-04-22T16:26:54Z",
      description: "technical paper presentation in National Level Technical Symposium, V-SymCoSci, at Muthayamal College of Engineering;(April 2021).",
      url:"https://www.linkedin.com/in/kirthikrajkamaraj/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "linkedin-short-profile.jpg",
    description:
      "I am available on below social media. You can message me, I will reply within 24 hours. I can help you with DevOps Deployment, Orchestration & Containerization, Cloud Architecture & Deployment, Full Stack Development, and Data Science..",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.PrakashUpadhyay.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "New York, USA (Currently open for relocation)",
    locality: "Binghamton",
    country: "USA",
    region: "New York",
    postalCode: "13902",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Binghamton+University/@42.0894328,-75.9720634,16z/data=!3m1!4b1!4m6!3m5!1s0x89daeeb8741e3169:0x73e79cf1ee693edf!8m2!3d42.0894288!4d-75.9694885!16zL20vMDFwODk2?entry=ttu",
  },
  phoneSection: {
    title: "Personal Phone Number",
    subtitle: "+1 607-595-9687",
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
