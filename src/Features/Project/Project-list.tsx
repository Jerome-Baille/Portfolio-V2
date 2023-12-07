import { Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import BackButton from "../../Components/Back-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { projectsVariables } from "../../variables/projectsVariables";
import { Link as RouterLink } from "react-router-dom";

const ProjectList = () => {
    return (
        <VStack alignItems={'stretch'} spacing={'2rem'}>
            <BackButton title={'Project list'} />
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Year</Th>
                            <Th>Project</Th>
                            <Th>Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {projectsVariables.sort((a, b) => b.date - a.date).map((project, index) => (
                            <Tr key={index}>
                                <Td>{project.date}</Td>
                                <Td>
                                    <RouterLink to={`/project/${project.id}`}>
                                        {project.title}
                                    </RouterLink>
                                </Td>
                                <Td>
                                    <Link href={project.website} isExternal>
                                        {project.website !== '' ? <FontAwesomeIcon icon={faExternalLinkAlt} /> : ''}
                                    </Link>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </VStack>
    );
};

export default ProjectList;