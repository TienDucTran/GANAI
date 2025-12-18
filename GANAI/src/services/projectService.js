import {
    allProjects,
    getProjectById,
    getProjectsByType,
} from '../data/projects';

class ProjectService {
    // Get all projects
    getAllProjects() {
        return allProjects;
    }

    // Get project by ID
    getProject(id) {
        return getProjectById(id);
    }

    // Get projects by type
    getProjectsByType(type) {
        return getProjectsByType(type);
    }

    // Get project images
    getProjectImages(projectId) {
        const project = this.getProject(projectId);
        return project ? project.images : [];
    }

    // Get project details
    getProjectDetails(projectId) {
        const project = this.getProject(projectId);
        if (!project) return null;

        return {
            id: project.id,
            title: project.title,
            location: project.location,
            year: project.year,
            size: project.size,
            team: project.team,
            credits: project.credits,
            description: project.description,
            images: project.images,
        };
    }
}

export default new ProjectService();
