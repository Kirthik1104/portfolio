/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kirthikraj Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
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
  nickname: "random_learner",
  subTitle:
    "Alex is enthusiastic individual dedicated to developing end-to-end products that build sustainable and scalable social and technical systems, aiming to generate a significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1RFxzUdUG4HcJcgIraqdrWiBTjMkjp6TK/view?usp=sharing",
  portfolio_repository: "https://github.com/Kirthik1104/portfolio-kirthik",
  githubProfile: "https://github.com/Kirthik1104",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Prakash1919",
  // linkedin: "https://www.linkedin.com/in/Prakash-Upadhyay-88710b138/",
  // gmail: "PrakashUpadhyay98@gmail.com",
  // gitlab: "https://gitlab.com/PrakashUpadhyay98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Prakash_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

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
      title: "Cloud Infra-Architecture & Database Management",
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
          skillName: "Apache Spark",
          imageSrc: "pyspark.png",
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
      duration: "Aug 2023-Dec 2024",
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
      duration: "2017 - 2021",
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
    "I have 2 years of working experience as a Digital Specialist Engineer at Infosys Private Limited, I played a pivotal role in developing full-stack applications for Toyota Motors Europe, leading teams to create automated solutions that enhanced operational efficiency and customer satisfaction. This experience, recognized by the Insta Award for exceptional project work, I also worked in many projects as as Intern and created some projects of my own that are live currently, This experience was complemented by my commitment to social responsibility, demonstrated through volunteer work with the Extension Work Team (EWT) where I educated underprivileged children in Mumbai.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      work: true,
      experiences: [
        {
          title: "Digital Specialist Engineer",
          company: "Infosys Limited",
          company_url: "https://www.infosys.com/",
          logo_path: "Infosys_logo.png",
          duration: "Oct 2021 - July 2023",
          location: "Pune, India",
          description:"As a Digital Specialist Engineer at Infosys Private Limited, I led key projects for Toyota Motors Europe, making impactful contributions in software development and process automation. Notably, I directed the development of a full-stack application for the Electronic Data Interchange Portal, significantly enhancing operational efficiency and supplier collaboration. This achievement, alongside the integration of a customs portal that resulted in substantial cost savings and improved customer retention, showcased my expertise in utilizing technologies like React.js, Node.js, and AWS. My role in these projects exemplified my ability to innovate and lead in high-stakes environments, consistently delivering solutions that drive meaningful business outcomes",
          color: "#0879bf",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "Smartbridge",
          company_url: "https://smartbridge.com/",
          logo_path: "smartbridge_logo.png",
          duration: "June 2020 - July 2020",
          location: "Mumbai, India",
          description:"During my internship as an Artificial Intelligence Intern at Smartbridge, I was tasked with developing an advanced customer care chatbot from the ground up. This chatbot was designed to go beyond answering basic queries like store locations and hours; it was integrated with Watson Discovery Service to handle complex inquiries related to device operations. By leveraging the Smart Document Understanding feature of Watson Discovery, I trained the system to discern relevant information from device manuals, enhancing the chatbot's capability to provide precise answers. This project not only improved customer experience by offering detailed responses from the owners' manuals but also represented a significant step forward in AI-driven customer support solutions.", 
          color: "#9b1578",
        },
        {
          title: "Software Engineer Intern",
          company: "DevCentrics Technologies Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/vcentric-technologies-p-ltd-/?originalSubdomain=in",
          logo_path: "vcentric_logo.png",
          duration: "Aug 2019 - Sep 2019",
          location: "Bengaluru, India",
          description:"During my two-month tenure as a Software Engineer Intern at DevCentrics Technologies Private Limited in Bengaluru, I focused on Full Stack Development, encompassing a range of modern web technologies. My role involved utilizing MongoDB for database management, React.js and CSS for frontend development, and Node.js with Express.js for backend services. I also applied HTML5 skills for structuring and presenting content on the web. This experience allowed me to deepen my understanding of the entire development process, from database design to user interface creation, honing my capabilities in creating cohesive and functional web applications.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer at Extension Work Team",
          company: "TCET-EWT",
          company_url: "https://about.google/",
          logo_path: "ewt_logo.png",
          duration: "Aug 2018 - Aug 2019",
          location: "Mumbai, India",
          description:"As a committed volunteer with the Extension Work Team (EWT), I dedicated my time and efforts to educate underprivileged children in various locations around Mumbai. The EWT, focused on aiding the less privileged segments of society, aims to enhance their quality of life through educational programs tailored to the demands of today's technology-driven, knowledge-based economy. My role encompassed not just teaching but also inspiring these children to aspire for greater achievements, aligning with the EWT's mission to foster overall development. Through this outreach, I contributed to empowering individuals with new knowledge and skills, aiding them in improving their life conditions and opportunities for growth. This experience not only enriched my understanding of societal challenges but also underscored the transformative power of education and community engagement.",
          color: "#4285F4",
        },
        {
          title: "Student Volunteed Head at We Can We Will",
          company: "We Can We Will",
          company_url: "https://www.microsoft.com/",
          logo_path: "wecanwewill_logo.png",
          duration: "Aug 2018 - Mar 2019",
          location: "Mumbai, India",
          description:"As a volunteer with We Can We Will, I was entrusted with a meaningful role where I personally mentored a child, guiding their educational journey over eight months. This experience was not just about imparting academic knowledge but also about nurturing their overall growth, aligning with the organization's mission to uplift the less fortunate. We Can We Will focuses on combating hunger and illiteracy, driven by educators and volunteers committed to breaking the cycle of poverty and fostering hope for a brighter future. My involvement allowed me to contribute to this noble cause, working alongside professionals and experts to provide quality education and access to essential healthcare. This period was a testament to the belief that positive change is achievable with courage, determination, and creativity, and every individual deserves the opportunity to live a life of dignity and ",
          color: "#D83B01",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack development projects using cloud infrastructure. Apart from my projects showcased in experience tab, below are some of my creative personal projects.",
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
      name: "Covid-19 Detection Using Deep Neural Networks.",
      createdAt: "2022-06-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:"https://www.irjet.net/archives/V9/i6/IRJET-V9I658.pdf",
    },
    {
      id: "2",
      name: "Impact of Procrastination on College Students",
      createdAt: "2018-02-22T16:26:54Z",
      description: "My publication, Impact of Procrastination on College Students, presented at the National Conference in Applied Sciences & Humanities (NCASH-2018) on February 22, 2018, achieved notable recognition, earning a win at this esteemed conference. This study, cataloged with ISBN 978-0-9994483-5-9 and featured on page 95, offered a comprehensive analysis of procrastination among college students, a subject that resonates widely in academic circles. By examining the underlying causes such as self-motivation challenges, task complexity, time management issues, and academic pressures, the research provided valuable insights into student behavior. The acknowledgment of this work with an award at NCASH-2018 underscored its significance and impact in the field of educational research, highlighting the critical nature of understanding and addressing procrastination to enhance academic outcomes. This accolade not only celebrated the research's contribution to educational discourse but also emphasized the importance of addressing such fundamental issues in the academic community.",
      url:"https://docplayer.net/96689481-Ncash-conference-proceedings.html",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prakash.jpeg",
    description:
      "I am available on below social media. You can message me, I will reply within 24 hours. I can help you with, Full Stack, Data Science, Android, Cloud and Opensource Development.",
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
      "700 Health Sciences Drive, Chapin L 1172, Stony Brook",
    locality: "Stony Brook",
    country: "USA",
    region: "New York",
    postalCode: "11790",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/zE5JwYXkEgmUp1nr6",
  },
  phoneSection: {
    title: "Personal Phone Number",
    subtitle: "+1 934-451-9593",
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
