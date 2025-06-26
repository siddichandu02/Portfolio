import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectModal, type Project } from "@/components/project-modal";
import { ContactForm } from "@/components/contact-form";
import { useTheme } from "@/components/theme-provider";
import chanduImage from "@/assets/images/chandu.jpeg";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  Download,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  Zap,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript/TypeScript",
    level: 70,
    color: "from-yellow-400 to-yellow-600",
  },
  { name: "React/Next.js", level: 80, color: "from-blue-400 to-blue-600" },
  { name: "Node.js/Express", level: 75, color: "from-green-400 to-green-600" },
  { name: "Python/Django", level: 70, color: "from-blue-500 to-blue-700" },
  { name: "Java/Spring", level: 85, color: "from-blue-500 to-blue-700" },
  { name: "C#/.Net", level: 85, color: "from-blue-500 to-blue-700" },
  {
    name: "PostgreSQL/MongoDB",
    level: 85,
    color: "from-purple-400 to-purple-600",
  },
  { name: "AWS/Azure", level: 75, color: "from-orange-400 to-orange-600" },
  { name: "UI/UX Design", level: 70, color: "from-pink-400 to-pink-600" },
  {
    name: "Microservices/REST APIs",
    level: 80,
    color: "from-indigo-400 to-indigo-600",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    fullDescription:
      "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product management, shopping cart functionality, payment processing, order tracking, and an admin dashboard. The platform handles high traffic with optimized performance and provides a seamless shopping experience across all devices.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Docker",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://demo-ecommerce.example.com",
    challenges: [
      "Handling concurrent user sessions and inventory updates",
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Ensuring responsive design across all devices",
    ],
    solutions: [
      "Implemented Redis for session management and caching",
      "Integrated Stripe with webhook validation for payment security",
      "Used database indexing and query optimization techniques",
      "Applied mobile-first responsive design principles",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    fullDescription:
      "A sophisticated task management application that enables teams to collaborate effectively. Features include project boards, task assignments, deadline tracking, file uploads, real-time notifications, and comprehensive reporting. The app uses modern web technologies to provide a smooth, interactive experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Socket.io",
      "Tailwind CSS",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    githubUrl: "https://github.com/example/taskmanager",
    liveUrl: "https://tasks.example.com",
    challenges: [
      "Implementing real-time collaboration features",
      "Managing complex state across multiple components",
      "Ensuring data consistency in collaborative environments",
      "Creating an intuitive drag-and-drop interface",
    ],
    solutions: [
      "Used Socket.io for real-time WebSocket connections",
      "Implemented Redux Toolkit for predictable state management",
      "Applied optimistic updates with rollback mechanisms",
      "Built custom drag-and-drop components with smooth animations",
    ],
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Machine learning dashboard for business intelligence and data visualization",
    fullDescription:
      "An advanced analytics dashboard that leverages machine learning to provide business insights. The platform processes large datasets, generates predictive models, and presents data through interactive visualizations. It includes automated reporting, anomaly detection, and customizable KPI tracking.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "D3.js",
      "TensorFlow",
      "PostgreSQL",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    githubUrl: "https://github.com/example/analytics",
    liveUrl: "https://analytics.example.com",
    challenges: [
      "Processing and visualizing large datasets efficiently",
      "Implementing real-time machine learning predictions",
      "Creating responsive and interactive data visualizations",
      "Ensuring data security and privacy compliance",
    ],
    solutions: [
      "Used data streaming and pagination for large dataset handling",
      "Implemented model caching and background job processing",
      "Built custom D3.js visualizations with React integration",
      "Applied encryption and role-based access controls",
    ],
  },
];

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    description:
      "Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.",
    technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    color: "from-primary to-purple",
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Built MVP products from scratch, implemented CI/CD pipelines, and contributed to product strategy.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    color: "from-mint to-primary",
  },
  {
    company: "Digital Agency Inc",
    position: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "Developed responsive web applications, collaborated with design teams, and optimized performance.",
    technologies: ["React", "JavaScript", "SASS", "WordPress"],
    color: "from-orange to-coral",
  },
];

const certifications = [
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2025",
    color: "from-orange-400 to-orange-600",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/chandusiddi-8323/BD1E281D6399FCB7?sharingId=6648FB862A679FDA",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    color: "from-blue-400 to-blue-600",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/chandusiddi-8323/401384DF011CB019?sharingId=6648FB862A679FDA",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    color: "from-green-400 to-green-600",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/chandusiddi-8323/B6836AF156D2BA5?sharingId=6648FB862A679FDA",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    color: "from-blue-500 to-blue-700",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/chandusiddi-8323/B6836AF156D2BA5?sharingId=6648FB862A679FDA",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setSkillsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-neuro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple rounded-xl shadow-neuro flex items-center justify-center">
                <Code2 className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Chandu Siddi
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-purple to-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Full Stack Developer
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-orange">
                  {" "}
                  <span className="text-white/80">
                    & Creative Problem Solver
                  </span>{" "}
                </span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                I craft digital experiences that blend cutting-edge technology
                with intuitive design. Specializing in modern web applications,
                cloud architecture, and scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-neuro hover:shadow-neuro-hover transition-all"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>

                <Button
                  variant="outline"
                  className="bg-black text-white dark:bg-white dark:text-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/siddichandu02" // replace with your actual GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="text-gray-800 dark:text-white border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-white hover:text-primary rounded-full"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chandu-siddi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="text-gray-800 dark:text-white border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-white hover:text-primary rounded-full"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                  <Button
                    size="icon"
                    variant="outline"
                    className="text-gray-800 dark:text-white border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-white hover:text-primary rounded-full"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-white/80 flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Frisco, TX</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Available for hire</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={chanduImage}
                alt="Chandu Siddi - Software Engineer"
                className="rounded-3xl shadow-neuro w-full max-w-md mx-auto"
              />

              {/* Floating tech stack cards */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-neuro animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-mint to-primary rounded-lg flex items-center justify-center">
                    <Code2 className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Frontend
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      React/Nextjs/Angular
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-neuro animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange to-coral rounded-lg flex items-center justify-center">
                    <Server className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Backend
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Node.js/Java/C#
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate about creating digital solutions that make a real
              impact. With 5+ years of experience in full-stack development, I
              specialize in building scalable applications and leading technical
              teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-neuro">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Started as a curious computer science student who fell in love
                  with the power of code to solve real-world problems. Over the
                  years, I've evolved from writing simple scripts to
                  architecting complex, distributed systems that power scalable
                  and resilient applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in continuous learning, clean code, and the
                  importance of user-centric design in every application I
                  build. Whether it's fine-tuning performance, improving
                  accessibility, or simplifying the developer experience, I
                  strive for meaningful impact through thoughtful engineering.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring emerging
                  technologies like AI and cloud-native architectures,
                  contributing to open source.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-neuro text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-neuro text-center">
                  <div className="text-3xl font-bold text-mint mb-2">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skillsVisible ? skill.level : 0}
                      className="h-3 shadow-neuro-inset"
                      style={
                        {
                          "--progress-background": `linear-gradient(to right, var(--tw-gradient-stops))`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, from full-stack applications to
              innovative solutions that solve real business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-white dark:bg-gray-900 shadow-neuro hover:shadow-neuro-hover transition-all duration-300 cursor-pointer border-0 overflow-hidden group"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">
                      Click to view details
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-primary to-purple text-white text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through different companies and roles, building
              expertise and delivering value at every step.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-neuro border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className={`bg-gradient-to-r ${exp.color} text-white`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-primary" />
                Education
              </h2>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl shadow-neuro">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Master of Science in Computer Science
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  University of Central Florida
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  2022 - 2024 • GPA: 3.9/4.0
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Gained hands-on experience through academic projects involving
                  full-stack development, data pipelines, and real-time system
                  design.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl shadow-neuro mt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Technology in Information Technology
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  Keshav Memorial Institute of Technology
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  2016 - 2020 • GPA: 3.9/4.0
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Gained a strong foundation in software development, computer
                  networks, databases, and web technologies. Participated in
                  team projects, coding contests, and workshops.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="w-8 h-8 mr-3 text-mint" />
                Certifications
              </h2>
              <div className="space-y-10">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-neuro"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-primary hover:underline"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {cert.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge
                          className={`bg-gradient-to-r ${cert.color} text-white`}
                        >
                          {cert.date}
                        </Badge>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities and challenging
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-neuro">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple rounded-xl flex items-center justify-center">
                      <Mail className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        siddichandu02@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-mint to-primary rounded-xl flex items-center justify-center">
                      <MapPin className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Location
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Frisco, TX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange to-coral rounded-xl flex items-center justify-center">
                      <Users className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Availability
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Open to new opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
