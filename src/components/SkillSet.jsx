import React from 'react';
import { 
  SearchCheck,
  Hexagon as nodejs,
  Atom as reactjs,
  Brush as drawio,
  BookOpenText as document,
  Code2, 
  Container, 
  GitBranch, 
  Server, 
  Cloud, 
  Database,
  Monitor,
  Layers,
  Terminal,
  Figma as FigmaIcon,
  Workflow,
  icons,
} from 'lucide-react';

const SkillSet = () => {
  const skills = [
    { name: 'Docker', icon: Container, category: 'DevOps' },
    { name: 'Kubernetes', icon: Layers, category: 'DevOps' },
    { name: 'Jenkins', icon: Workflow, category: 'CI/CD' },
    { name: 'GitHub Actions', icon: GitBranch, category: 'CI/CD' },
    { name: 'GitLab CI/CD', icon: GitBranch, category: 'CI/CD' },
    { name: 'Trivy', icon: SearchCheck, category: 'Security'},
    { name: 'React.js', icon: reactjs, category: 'Frontend' },
    { name: 'Node.js', icon: nodejs, category: 'Backend' },
    { name: 'JavaScript', icon: Code2, category: 'Programming' },
    { name: 'Python', icon: Code2, category: 'Programming' },
    { name: 'Git', icon: GitBranch, category: 'Tools' },
    { name: 'Linux', icon: Terminal, category: 'OS' },
    { name: 'Windows', icon: Terminal, category: 'OS' },
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Nginx', icon: Server, category: 'Web Server' },
    { name: 'Grafana', icon: Monitor, category: 'Monitoring' },
    { name: 'Prometheus', icon: Database, category: 'Monitoring' },
    { name: 'Figma', icon: FigmaIcon, category: 'Design' },
    { name: 'Draw IO', icon: drawio, category: 'Design' },
    { name: 'MS Office', icon: document, category:'Documentation'},
    { name: 'VS Code', icon: Code2, category: 'Code Editor' }
  ];

  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-gradient-to-br ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-lg">
            Tools and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon;

  return (
    <div className="group bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-200 hover:border-primary hover:-translate-y-1 cursor-pointer">
      
      <div className="relative w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
        <IconComponent 
          className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors duration-300"
        />
      </div>
      <p className="text-xs md:text-sm font-semibold text-gray-700 text-center group-hover:text-primary transition-colors">
        {skill.name}
      </p>
      <span className="text-[10px] md:text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
        {skill.category}
      </span>
    </div>
  );
};

export default SkillSet;