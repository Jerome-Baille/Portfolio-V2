import { Box, HStack, List, VStack } from "@chakra-ui/react";

import ProjectCard from "./Project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { projectsVariables } from "../../variables/projectsVariables";

import './Project.css';

const Project = () => {
  return (
    <VStack alignItems={'stretch'} gap={'2rem'} id="project">
      <h3 className="section-title">Projects</h3>
      <List spacing={'5rem'}>
        {projectsVariables.sort((a, b) => b.date - a.date).slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            imageSrc={project.screenshot}
          />
        ))}
      </List>
      <Box mt={4} w={'fit-content'}>
        <NavLink to="/project/list" className="project-list-link" >
          <HStack gap={4}>
            <span>See more</span>
            <FontAwesomeIcon icon={faArrowRight} className="project-list-link-icon" />
          </HStack>
        </NavLink>
      </Box>
    </VStack>
  );
};

export default Project;