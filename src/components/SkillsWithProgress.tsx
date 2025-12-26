'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          {skill.icon && <span>{skill.icon}</span>}
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
        />
      </div>
    </motion.div>
  );
}

interface SkillsSectionProps {
  skills: Skill[];
  title?: string;
}

export function SkillsWithProgress({ skills, title = 'Technical Skills' }: SkillsSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
