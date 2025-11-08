'use client';

import ProjectCard from './ProjectCard';
import AllProjectsModal from './AllProjectsModal';
import { devProjects, designProjects, ProjectProps } from './projectDetails';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 首页只显示前6个项目
  const displayedProjects = devProjects.slice(0, 6);
  
  // 合并所有项目并去重（基于id）
  const allProjectsMap = new Map<number, ProjectProps>();
  devProjects.forEach(project => allProjectsMap.set(project.id, project));
  designProjects.forEach(project => allProjectsMap.set(project.id, project));
  const allProjects = Array.from(allProjectsMap.values());

  return (
    <>
      <div className='grid w-[90%] grid-cols-1 grid-rows-2 gap-y-8 gap-x-4 lg:max-w-[1200px] md:grid-cols-3 sm:grid-cols-2 place-items-center'>
        {displayedProjects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>

      {/* View All Button */}
      {allProjects.length > 6 && (
        <motion.div
          className='mt-12 flex justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className='rounded-md border-2 border-[#e4ded7] bg-transparent px-8 py-3 text-[16px] font-semibold text-[#e4ded7] transition-colors hover:bg-[#e4ded7] hover:text-[#f6f2ea] md:text-[18px]'
          >
            View All Projects
          </button>
        </motion.div>
      )}

      {/* All Projects Modal */}
      <AllProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={allProjects}
      />
    </>
  );
};

export default ProjectGrid;
