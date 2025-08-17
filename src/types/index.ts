export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: 'web' | 'ml' | 'mobile' | 'other';
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  courses?: string[];
  gpa?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}