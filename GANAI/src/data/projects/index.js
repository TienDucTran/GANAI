import { spaceProjects } from '../spaceProjects';

// Export all project data
export const allProjects = [...spaceProjects];

// Export individual project arrays
export { spaceProjects };

// Helper function to get project by ID
export const getProjectById = (id) => {
    return allProjects.find((project) => project.id === id);
};

// Helper function to get projects by type
export const getProjectsByType = (type) => {
    switch (type) {
        case 'space':
            return spaceProjects;
        default:
            return allProjects;
    }
};
