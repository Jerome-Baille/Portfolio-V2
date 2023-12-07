import { Box, List, VStack } from "@chakra-ui/react";

import ProjectCard from "./Project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { projectsVariables } from "../../variables/projectsVariables";

const Project = () => {
  return (
    <VStack alignItems={'stretch'} id="project">
      <h3 className="section-title">Projects</h3>
      <List spacing={4}>
        {projectsVariables.sort((a, b) => b.date - a.date).slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            imageSrc={project.logo}
          />
        ))}
      </List>
      <Box mt={4} w={'fit-content'}>
        <NavLink to="/project/list">
          See more <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </Box>
    </VStack>
  );
};

export default Project;