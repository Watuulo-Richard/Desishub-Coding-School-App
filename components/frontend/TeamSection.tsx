import React from 'react';
import {
  Briefcase,
  Dribbble,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Smartphone,
  Twitter,
} from 'lucide-react';

const teamMembers = [
  {
    initials: 'AM',
    name: 'Alex Mukisa',
    role: 'Lead Developer & Founder',
    description:
      'Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and innovative solutions.',
    skills: [
      { name: 'React', color: 'blue' },
      { name: 'Node.js', color: 'green' },
      { name: 'TypeScript', color: 'purple' },
      { name: 'AWS', color: 'orange' },
    ],
    socials: [Github, Linkedin, Twitter],
    gradient: 'from-blue-500 to-purple-600',
    overlay: 'from-blue-500/10 to-purple-500/10',
    textColor: 'text-blue-400',
  },
  {
    initials: 'SN',
    name: 'Sarah Namukasa',
    role: 'Senior UI/UX Designer',
    description:
      'Creative designer with a passion for user-centered design. Specializes in creating intuitive interfaces and seamless user experiences.',
    skills: [
      { name: 'Figma', color: 'pink' },
      { name: 'Adobe XD', color: 'purple' },
      { name: 'Prototyping', color: 'blue' },
      { name: 'User Research', color: 'green' },
    ],
    socials: [Dribbble, Linkedin, Instagram],
    gradient: 'from-pink-500 to-red-600',
    overlay: 'from-pink-500/10 to-red-500/10',
    textColor: 'text-pink-400',
  },
  {
    initials: 'DS',
    name: 'David Ssemakula',
    role: 'Mobile App Developer',
    description:
      'React Native specialist with expertise in cross-platform mobile development. Creates high-performance apps for iOS and Android.',
    skills: [
      { name: 'React Native', color: 'blue' },
      { name: 'Swift', color: 'orange' },
      { name: 'Kotlin', color: 'green' },
      { name: 'Firebase', color: 'yellow' },
    ],
    socials: [Github, Linkedin, Smartphone],
    gradient: 'from-green-500 to-emerald-600',
    overlay: 'from-green-500/10 to-emerald-500/10',
    textColor: 'text-green-400',
  },
  {
    initials: 'GN',
    name: 'Grace Nakato',
    role: 'Project Manager',
    description:
      'Experienced project manager ensuring seamless delivery of complex projects. Expert in agile methodologies and client communication.',
    skills: [
      { name: 'Agile', color: 'indigo' },
      { name: 'Scrum', color: 'purple' },
      { name: 'Planning', color: 'blue' },
      { name: 'Leadership', color: 'green' },
    ],
    socials: [Briefcase, Linkedin, Mail],
    gradient: 'from-indigo-500 to-purple-600',
    overlay: 'from-indigo-500/10 to-purple-500/10',
    textColor: 'text-indigo-400',
  },
];

type TeamMember = {
  initials: string;
  name: string;
  role: string;
  description: string;
  skills: { name: string; color: string }[];
  socials: React.ComponentType<{ className?: string }>[];
  gradient: string;
  overlay: string;
  textColor: string;
};

type TeamCardProps = {
  member: TeamMember;
};

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="glass-effect rounded-2xl p-8 card-hover group text-center relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${member.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      <div className="relative mb-6">
        <div
          className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
        >
          {member.initials}
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
      <p className={`${member.textColor} text-sm font-medium mb-4`}>{member.role}</p>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.description}</p>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {member.skills.map((skill:any) => (
          <span
            key={skill.name}
            className={`px-3 py-1 text-xs bg-${skill.color}-500/20 text-${skill.color}-300 rounded-full border border-${skill.color}-500/30`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        {member.socials.map((Icon: React.ComponentType<{ className?: string }>, index: number) => (
          <a
            key={index}
            href="#"
            className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-${member.gradient.split(' ')[0]}/20 transition-all duration-300 group/social`}
          >
            <Icon className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          <span className="gradient-text">Meet Our Team</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Passionate professionals dedicated to bringing your digital vision to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
