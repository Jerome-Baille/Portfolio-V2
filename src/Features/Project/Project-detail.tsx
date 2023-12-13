import { Box, Flex, Grid, HStack, Link, Table, Tag, Tbody, Td, Tfoot, Tr, VStack } from "@chakra-ui/react";
import BackButton from "../../Components/BackButton/Back-button";
import { useParams } from "react-router-dom";
import { projectsVariables } from "../../variables/projectsVariables";
import ImageCarousel from "../../Components/Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
    const { id } = useParams();

    const project = projectsVariables.find((project) => project.id === id);

    if (!project) return;

    const projectTitle = `${project.title} (${project.date})`;

    return (
        <main className="main-container">
            <VStack alignItems={'stretch'} spacing={'2rem'} mb={'5rem'}>
                <BackButton title={projectTitle} subtitle={project.subtitle}/>

                <VStack alignItems={'stretch'} gap={'3rem'} w={'100%'}>
                    {project.mockups.length > 0 ?
                        <Box>
                            <VStack w={'100%'} alignItems={'stretch'} spacing={'2rem'}>
                                <Grid placeItems={'center'}>
                                    <ImageCarousel images={project.mockups} />
                                </Grid>
                            </VStack>
                        </Box>
                        :
                        <Box>
                            <span>
                                'No mockups available'
                            </span>
                        </Box>
                    }

                    <p className="project-description">
                        {project.description}
                    </p>

                    <Table>
                        <Tbody>
                            {Object.entries(project.fullStack)
                                .filter(([_, values]) => values.length > 0)
                                .map(([key, values]) => (
                                    <Tr key={key}>
                                        <Td>
                                            {key}
                                        </Td>

                                        <Td>
                                            <VStack alignItems={'stretch'} spacing={'1rem'}>
                                                <Flex flexWrap={'wrap'} gap={4}>
                                                    {values.map((value) => (
                                                        <Tag
                                                            key={value}
                                                            className="custom-tag">
                                                            {value}
                                                        </Tag>
                                                    ))}
                                                </Flex>


                                                {Object.entries(project.github)
                                                    .filter(([githubKey, value]) => githubKey === key && value.trim() !== "")
                                                    .map(([githubKey, githubValue]) => (
                                                        <Link w={'fit-content'} key={githubKey} href={githubValue}>
                                                            <HStack spacing={4}>
                                                                <span>See Code</span>
                                                                <FontAwesomeIcon icon={faGithub} />
                                                            </HStack>
                                                        </Link>
                                                    ))
                                                }
                                            </VStack>
                                        </Td>
                                    </Tr>
                                ))}
                        </Tbody>
                        {project.website !== '' ?
                            <Tfoot>
                                <Tr>
                                    <Td>Website</Td>
                                    <Td>
                                        <Link href={project.website}>
                                            <HStack spacing={4}>
                                                <span>
                                                    See live demo
                                                </span>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </HStack>
                                        </Link>
                                    </Td>
                                </Tr>
                            </Tfoot>
                            : null
                        }
                    </Table>
                </VStack>
            </VStack>
        </main>
    );
};

export default ProjectDetail;