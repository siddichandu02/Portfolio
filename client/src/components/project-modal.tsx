import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  challenges: string[];
  solutions: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-0 shadow-neuro">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-neuro">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-primary to-purple text-white shadow-neuro hover:shadow-neuro-hover transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Project Overview</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Challenges Faced</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Solutions Implemented</h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {project.githubUrl && (
              <Button
                asChild
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-neuro hover:shadow-neuro-hover transition-all"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-purple text-white shadow-neuro hover:shadow-neuro-hover transition-all"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
