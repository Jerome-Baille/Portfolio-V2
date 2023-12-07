import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Grid, Image, Link, Table, Tag, Tbody, Td, Text, Tfoot, Tr, VStack } from "@chakra-ui/react";
import BackButton from "../../Components/Back-button";
import { useParams } from "react-router-dom";
import { projectsVariables } from "../../variables/projectsVariables";
import ImageCarousel from "../../Components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
    const { id } = useParams();

    const project = projectsVariables.find((project) => project.id === id);

    if (!project) return;

    return (
        <VStack alignItems={'stretch'} spacing={'2rem'}>
            <BackButton title={'Project'} />
            <Card>
                <CardHeader>
                    <VStack alignItems={'stretch'} spacing={'1rem'}>
                        <Box className="frame-plaque">
                            <VStack alignItems={'stretch'} spacing={'0.5rem'}>
                                <h1>{project.title} ({project.date})</h1>
                                <Text as="h2" fontStyle="italic">{project.subtitle}</Text>
                            </VStack>
                        </Box>

                        <Box className="frame-square">
                            {project.logo === '' ?
                                <Image src={'https://via.placeholder.com/200x200'} w={'100%'} h={'100%'} objectFit={'cover'} alt='Portfolio Logo' />
                                : <Image src={project.logo} w={'100%'} h={'100%'} objectFit={'cover'} alt='Portfolio Logo' />
                            }
                        </Box>
                    </VStack>
                </CardHeader>
                <CardBody>
                    <VStack alignItems={'stretch'} spacing={'2rem'}>
                        <p>
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
                                                                className="project-tag">
                                                                {value}
                                                            </Tag>
                                                        ))}
                                                    </Flex>


                                                    {Object.entries(project.github)
                                                        .filter(([githubKey, value]) => githubKey === key && value.trim() !== "")
                                                        .map(([githubKey, githubValue]) => (
                                                            <Link w={'fit-content'} key={githubKey} href={githubValue}>
                                                                <span>See Code <FontAwesomeIcon icon={faGithub} /></span>
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
                                                See live demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </Link>
                                        </Td>
                                    </Tr>
                                </Tfoot>
                                : null
                            }
                        </Table>

                    </VStack>
                </CardBody>
                <CardFooter>
                    {project.mockups.length > 0 ?
                        <VStack w={'100%'} alignItems={'stretch'} spacing={'2rem'}>
                            <Grid placeItems={'center'}>
                                <ImageCarousel images={project.mockups} />
                            </Grid>
                        </VStack>
                        : 'No mockups available'
                    }
                </CardFooter>
            </Card>
        </VStack>
    );
};

export default ProjectDetail;