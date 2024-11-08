import React from 'react';
import { Github, Link } from 'lucide-react';

const ProjectCard = ({ title, description, liveDemoUrl, githubUrl, technologies, organization }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-full">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2 truncate">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 break-words overflow-hidden">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 transition px-6 py-2 rounded-full flex items-center gap-2"
            >
              <Link size={18} className="text-white" />
              <span className="text-white">Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 transition px-6 py-2 rounded-full flex items-center gap-2"
            >
              <Github size={18} className="text-white" />
              <span className="text-white">GitHub</span>
            </a>
          )}
        </div>
        {organization && (
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Organization: </span>
            <span>{organization}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Projects</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Example Project Card */}
        <ProjectCard
          title="Barebone System"
          description="A portfolio project focused on testing with Cypress for end-to-end tests and automated regression testing using GitLab CI/CD."
          liveDemoUrl="https://barebone-system.vercel.app/signup"
          githubUrl="https://github.com/muzamilmemon1/barebone-system"
          technologies={['Cypress', 'GitLab CI/CD']}
          organization="Bank Alfalah"
        />
        {/* Add more ProjectCard components as needed */}
      </div>
    </section>
  );
};

export default Projects;