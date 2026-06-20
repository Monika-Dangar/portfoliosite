import { TiLocationArrow } from "react-icons/ti";

export const gridItems = [
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title: "Eager to Learn and Grow",
    description:
      "Software Engineer with 1 year of experience in developing and maintain scalable applications.",
    className: "md:col-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    spareImg: "/exp1.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/sk.png",
  },

  {
    id: 5,
    title: "Currently building a dubbing platform",
    description: "The Inside Scoop",
    className: "md:col-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    spareImg: "/code-snippet.png",
  },
];

export const projects = [
  {
    id: 1,
    title: "CogniClear - AI Decision Journal",
    des: "An AI-powered decision journal using Google Gemini Pro to identify cognitive biases, simulate outcomes, and challenge blind spots. Built for the Google Gemini API Developer Hackathon.",
    img: "/cogni-clear.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/three.svg", "/nodejs.svg"],
    linkName: "/cogni-clear.app",
    link: process.env.NEXT_PUBLIC_COGNI_CLEAR_URL,
  },
  {
    id: 2,
    title: "AI Slack Agent",
    des: "A robust Slack agent with automated draft reply generation, channel summarization, and tool-calling capabilities. Powered by Python, Flask, and Slack Events API.",
    img: "/ai-slack-agent.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    linkName: "Check code",
    link: process.env.NEXT_PUBLIC_AI_SLACK_AGENT_URL,
  },
  {
    id: 3,
    title: "Pen & Paper",
    des: "A platform for writers to share creative works. Features authentication, content management, and reader interaction. Built with MERN stack.",
    img: "pen-and-paper.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/nodejs.svg"],
    linkName: "/pen-and-paper.app",
    link: process.env.NEXT_PUBLIC_PEN_AND_PAPER_URL,
  },
  {
    id: 2,
    title: "Job Finder",
    des: "A comprehensive application using Vite, Tailwind CSS, Node.js, and various librabries including Redux Toolkit and React Hook Form.",
    img: "/job-finder.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/nodejs.svg"],
    linkName: "/job-finder.app",
    link: process.env.NEXT_PUBLIC_JOB_FINDER_URL,
  },
];

export const blogs = [
  {
    id: 1,
    title: "How I Optimized Slow MongoDB Queries and Reduced Latency by 95%",
    des: "Optimized MongoDB query performance by analyzing bottlenecks, implementing efficient indexing strategies, and refining database operations, resulting in up to 95% reduction in API response latency and significantly improved application performance.",
    url: "https://medium.com/@dangarmonika191023/how-i-optimized-slow-mongodb-queries-and-reduced-latency-by-95-83f447a6467e",
  },
  {
    id: 2,
    title: "I Spent Days Searching for an Aadhaar eKYC API… Here’s What I Learned",
    des: "Explored Aadhaar eKYC API integration challenges, evaluated multiple verification providers, and documented key considerations for implementing secure, compliant, and reliable identity verification workflows in modern applications.",
    url: "https://medium.com/@dangarmonika191023/i-spent-days-searching-for-an-aadhaar-ekyc-api-heres-what-i-learned-267d71ba418f",
  }
];


export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - mple.ai",
    desc: "Optimized database queries (20% perf boost), built advanced analytics dashboard, and integrated GenAI systems (OpenAI Realtime, RAG, WhatsApp Calling).",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Freelance Developer - StayFitPlease",
  //   desc: "Built a comprehensive fitness platform for a gym trainer. Features: Trainee tracking (diet/workout), 1:1 scheduling, product store, and an AI context-aware bot for users.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
  {
    id: 2,
    title: "Software Developer - B2WInfoTech.ai",
    desc: "Led backend development efforts at B2WInfoTech.ai, specializing in backend architecture, API development, database design, system scalability, and performance optimization. Built secure, maintainable, and high-performance server-side solutions for modern web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const interactiveCards = [
  {
    id: 1,
    title: "about-me",
    animatedSpeed: 5.1,
    text: [
      <p key="1">
        1. Nice to meet you! I'm Monika,{" "}
        <span className="text-accent-blue">a Full Stack Developer</span>.
      </p>,
      <p key="2">
        2. I'm passionate about{" "}
        <span className="text-accent-blue">GenAI</span>,{" "}
        <span className="text-accent-purple">System Architecture</span>, and building scalable
        web applications.
      </p>,
      <p key="3">
        3. <span className="text-accent-purple">Coding</span> for me is about solving real problems.
        I love working with <span className="text-accent-blue">LLMs</span> and{" "}
        <span className="text-accent-purple">Real-time systems</span>.
      </p>,
      <p key="4" className="mt-2">
        4. I am also open to <span className="text-accent-blue">Freelancing</span> opportunities.
      </p>
    ],
  },
  {
    id: 2,
    title: "where-i-live",
    text: [
      <p key="1">
        1. Currently based in{" "}
        <span className="text-accent-blue">Mumbai, India</span>.
      </p>,
      <p key="2">
        2. Available for remote collaboration across India and worldwide.{" "}
        <span className="text-accent-purple">🌍</span>
      </p>,
    ],
    animatedSpeed: 5.1,
  },
  {
    id: 3,
    title: "me-online",
    text: [
      <a
        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="1"
      >
        1. LinkedIn
        <TiLocationArrow className="ml-1" />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="2"
      >
        2. GitHub
        <TiLocationArrow className="ml-1" />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="3"
      >
        3. X (Twitter)
        <TiLocationArrow className="ml-1" />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="4"
      >
        4. Instagram
        <TiLocationArrow className="ml-1" />
      </a>,
    ],
    animatedSpeed: 5.1,
  },
  {
    id: 4,
    title: "hobbies",
    text: [
      <p key="1">
        1. <span className="text-accent-blue">📖 Reading</span>.
      </p>,
      <p key="2">
        2. <span className="text-accent-purple">🏔️ Hiking</span>.
      </p>,
      <p key="3">
        3. <span className="text-accent-blue">💃 Dancing</span>.
      </p>,
    ],
    animatedSpeed: 5.1,
  },
];

export const floatingDock = [
  {
    title: "Instagram",
    icon: "IconBrandInstagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    title: "Linkedin",
    icon: "IconBrandLinkedin",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    title: "Twitter",
    icon: "IconBrandX",
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    title: "GitHub",
    icon: "IconBrandGithub",
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
];
