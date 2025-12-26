export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Spring Security", "REST APIs", "WebSockets", "Flask", "JWT Auth"]
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Framer Motion", "ShadCN/UI", "HTML5", "CSS3"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle SQL", "H2 Database"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS RDS", "Docker", "Git", "CI/CD", "Linux"]
  },
  {
    category: "Concepts",
    skills: ["System Design", "Microservices", "RBAC", "Real-Time Systems", "Design Patterns", "Agile"]
  }
];

export const certifications = [
  "AWS Academy: Cloud Foundations",
  "AWS Academy: Machine Learning Foundations",
  "Core Java — PrepInsta",
  "Java Spring Boot — Infosys SpringBoard",
  "Spring MVC — Infosys SpringBoard"
];
