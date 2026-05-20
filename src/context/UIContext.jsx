import React, { createContext, useState, useContext } from "react";

// Create a context for UI state (skill filter and project modal)
const UIContext = createContext({
  filterSkill: null, // currently selected skill slug or name
  setFilterSkill: () => {},
  modalOpen: false,
  selectedProject: null,
  openProject: () => {},
  closeProject: () => {}
});

export const UIProvider = ({ children }) => {
  const [filterSkill, setFilterSkill] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeProject = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <UIContext.Provider
      value={{
        filterSkill,
        setFilterSkill,
        modalOpen,
        selectedProject,
        openProject,
        closeProject
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
