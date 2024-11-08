import React from 'react';
import { Code2, Terminal, GitBranch, Database } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
          <Terminal className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Testing & QA</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• Manual Testing</li>
            <li>• Exploratory Testing</li>
            <li>• Test Case Design</li>
            <li>• Bug Tracking</li>
            <li>• Cross-browser Testing</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
          <Code2 className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Automation</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• Cypress</li>
            <li>• JavaScript</li>
            <li>• UI Automation</li>
            <li>• API Testing</li>
            <li>• Test Frameworks</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
          <Database className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Technical</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• SQL</li>
            <li>• RESTful APIs</li>
            <li>• Postman</li>
            <li>• Database Testing</li>
            <li>• Web Technologies</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
          <GitBranch className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Tools & Methods</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
            <li>• Azure DevOps</li>
            <li>• Agile/Scrum</li>
            <li>• Git Version Control</li>
            <li>• JIRA</li>
            <li>• Documentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}