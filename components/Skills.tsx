import React from 'react';
import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  Zap, 
  Star,
  Rocket,
  Network,
  Terminal,
  GitBranch
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: 'Python', level: 95, icon: Code2, category: 'AI' },
      { name: 'LangChain', level: 90, icon: Brain, category: 'AI' },
      { name: 'OpenAI APIs', level: 92, icon: Zap, category: 'AI' },
      { name: 'RAG Systems', level: 88, icon: Database, category: 'AI' },
      { name: 'Agent Frameworks', level: 85, icon: Network, category: 'AI' },
      { name: 'NLP & ML', level: 87, icon: Brain, category: 'AI' },
    ]
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    skills: [
      { name: 'TypeScript', level: 93, icon: Code2, category: 'Frontend' },
      { name: 'React/Next.js', level: 94, icon: Layers, category: 'Frontend' },
      { name: 'Node.js', level: 90, icon: Terminal, category: 'Backend' },
      { name: 'FastAPI', level: 91, icon: Rocket, category: 'Backend' },
      { name: 'PostgreSQL', level: 88, icon: Database, category: 'Backend' },
      { name: 'REST & GraphQL', level: 89, icon: Network, category: 'Backend' },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 87, icon: Cloud, category: 'Cloud' },
      { name: 'Docker', level: 90, icon: Layers, category: 'DevOps' },
      { name: 'Kubernetes', level: 82, icon: Network, category: 'DevOps' },
      { name: 'CI/CD', level: 85, icon: GitBranch, category: 'DevOps' },
      { name: 'Serverless', level: 83, icon: Zap, category: 'Cloud' },
      { name: 'Monitoring', level: 86, icon: Cpu, category: 'DevOps' },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section className="relative py-32 px-4 w-full overflow-hidden" id="skills">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full opacity-15 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #FFB5A7 0%, #E76F51 50%, transparent 70%)',
          animationDuration: '8s'
        }}></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full opacity-10 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #F4A261 0%, #FFB5A7 50%, transparent 70%)',
          animationDelay: '4s',
          animationDuration: '10s'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full backdrop-blur-xl border border-white/10" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
          }}>
            <Star className="w-5 h-5 text-white animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-white font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text mb-6" style={{
            backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}>
            My Skills
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive expertise across{' '}
            <span className="text-white font-bold">AI/ML</span>,{' '}
            <span className="text-white font-bold">Full-Stack Development</span>, and{' '}
            <span className="text-white font-bold">Cloud Infrastructure</span>
          </p>
          
          <div className="w-32 h-1 mx-auto mt-6 rounded-full" style={{
            background: 'linear-gradient(90deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}></div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategorySection key={categoryIndex} category={category} />
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={Brain}
            title="15+"
            description="AI Systems Deployed"
            color="#FFB5A7"
          />
          <InfoCard
            icon={Rocket}
            title="70%"
            description="Efficiency Improvement"
            color="#E76F51"
          />
          <InfoCard
            icon={Zap}
            title="40%"
            description="Business Growth"
            color="#F4A261"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategorySection: React.FC<{ category: SkillCategory }> = ({ category }) => {
  const CategoryIcon = category.icon;
  
  return (
    <div className="p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl" style={{
      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
    }}>
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{
          background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
        }}>
          <CategoryIcon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.2) 0%, rgba(231, 111, 81, 0.2) 100%)'
          }}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">{skill.name}</span>
        </div>
        <span className="text-white font-bold text-sm">{skill.level}%</span>
      </div>
      
      <div className="relative h-2.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            background: 'linear-gradient(90deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}> = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 group text-center" style={{
      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.15) 0%, rgba(231, 111, 81, 0.15) 100%)'
    }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
          background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`
        }}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-4xl font-black text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};
