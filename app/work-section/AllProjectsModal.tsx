'use client';

import { ProjectProps } from './projectDetails';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectProps[];
}

const AllProjectsModal = ({ isOpen, onClose, projects }: AllProjectsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm'
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className='fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[95%] max-w-7xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-[#f6f2ea] p-6 md:p-8 lg:p-12'
          >
            {/* Header */}
            <div className='mb-8 flex items-center justify-between'>
              <h2 className='text-[32px] font-bold text-[#e4ded7] md:text-[42px] lg:text-[56px]'>
                All Projects
              </h2>
              <button
                onClick={onClose}
                className='flex h-10 w-10 items-center justify-center rounded-full bg-[#e4ded7] text-[#f6f2ea] transition-colors hover:bg-[#d2cbc3]'
                aria-label='Close modal'
              >
                <FontAwesomeIcon icon={faX} className='text-lg' />
              </button>
            </div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 place-items-center pb-4'>
              {projects.map((project: ProjectProps) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AllProjectsModal;

