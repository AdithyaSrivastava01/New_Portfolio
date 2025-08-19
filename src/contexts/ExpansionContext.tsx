import React, { createContext, useContext, useState } from 'react';

interface ExpansionContextType {
  expandedEducation: string[];
  expandedProjects: string[];
  expandedProjectDescriptions: string[];
  toggleExpandedEducation: (id: string) => void;
  toggleExpandedProject: (id: string) => void;
  toggleProjectDescription: (id: string) => void;
}

const ExpansionContext = createContext<ExpansionContextType | undefined>(undefined);

export const ExpansionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expandedEducation, setExpandedEducation] = useState<string[]>([]);
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);
  const [expandedProjectDescriptions, setExpandedProjectDescriptions] = useState<string[]>([]);

  const toggleExpandedEducation = (id: string) => {
    setExpandedEducation(prev => 
      prev.includes(id) 
        ? prev.filter(eduId => eduId !== id)
        : [...prev, id]
    );
  };

  const toggleExpandedProject = (id: string) => {
    setExpandedProjects(prev => 
      prev.includes(id) 
        ? prev.filter(projectId => projectId !== id)
        : [...prev, id]
    );
  };

  const toggleProjectDescription = (id: string) => {
    setExpandedProjectDescriptions(prev => 
      prev.includes(id) 
        ? prev.filter(projectId => projectId !== id)
        : [...prev, id]
    );
  };

  return (
    <ExpansionContext.Provider
      value={{
        expandedEducation,
        expandedProjects,
        expandedProjectDescriptions,
        toggleExpandedEducation,
        toggleExpandedProject,
        toggleProjectDescription,
      }}
    >
      {children}
    </ExpansionContext.Provider>
  );
};

export const useExpansion = () => {
  const context = useContext(ExpansionContext);
  if (context === undefined) {
    throw new Error('useExpansion must be used within an ExpansionProvider');
  }
  return context;
};