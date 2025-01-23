import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiGit,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

function App() {
  const techStack = [
    {
      name: "HTML",
      color: "text-[#E34F26]",
      icon: <SiHtml5 className="w-12 h-12 mb-3 text-[#E34F26]" />,
    },
    {
      name: "CSS",
      color: "text-[#1572B6]",
      icon: <SiCss3 className="w-12 h-12 mb-3 text-[#1572B6]" />,
    },
    {
      name: "JavaScript",
      color: "text-[#F7DF1E]",
      icon: <SiJavascript className="w-12 h-12 mb-3 text-[#F7DF1E]" />,
    },
    {
      name: "React",
      color: "text-[#61DAFB]",
      icon: <SiReact className="w-12 h-12 mb-3 text-[#61DAFB]" />,
    },
    {
      name: "TypeScript",
      color: "text-[#3178C6]",
      icon: <SiTypescript className="w-12 h-12 mb-3 text-[#3178C6]" />,
    },
    {
      name: "Git",
      color: "text-[#F05032]",
      icon: <SiGit className="w-12 h-12 mb-3 text-[#F05032]" />,
    },
    {
      name: "Express",
      color: "text-[#FFFFFF]",
      icon: <SiExpress className="w-12 h-12 mb-3 text-white" />,
    },
    {
      name: "MongoDB",
      color: "text-[#47A248]",
      icon: <SiMongodb className="w-12 h-12 mb-3 text-[#47A248]" />,
    },
    {
      name: "PostgreSQL",
      color: "text-[#4169E1]",
      icon: <SiPostgresql className="w-12 h-12 mb-3 text-[#4169E1]" />,
    },
  ];

  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Two",
      description: "Full-stack application with real-time features",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Three",
      description: "Mobile-first responsive design implementation",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400">{"{Dev}"}</div>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                Oi 👋,
                <br />
                Meu nome é
                <br />
                <span className="text-cyan-400">Pedro Henrique</span>
              </h1>
              <p className="text-xl text-gray-400">Desenvolvedor Web</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:your@email.com"
                  className="p-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 p-4">
                  <Code2 className="w-full h-full text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Minhas tecnologias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-6 bg-gray-900 rounded-lg hover:scale-105 transition-transform"
              >
                {tech.icon}
                <span className={`text-xl font-bold ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                      >
                        <Github size={20} />
                        Codigo
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink size={20} />
                        Ver o projeto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Pedro Henrique. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
