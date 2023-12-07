import { Card, CardBody, CardFooter, Image, Flex, Grid, Tag, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
    id?: string;
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, subtitle, description, tags, imageSrc }) => (
    <ListItem>
        <Link to={`/project/${id}`}>
            <Grid gridTemplateColumns={'150px 1fr'} gap={4}>
                <Image src={imageSrc} width={'150px'} height={'150px'} className="project-logo" alt="project" />

                <Card>
                    <CardBody>
                        <h4>{title}</h4>
                        <h5>"{subtitle}"</h5>
                        <p>
                            {description}
                        </p>
                    </CardBody>
                    <CardFooter>
                        <Flex flexWrap={'wrap'} gap={4}>
                            {tags.map((tag, index) =>
                                <Tag
                                    key={index}
                                    className="project-tag"
                                >
                                    {tag}
                                </Tag>)
                            }
                        </Flex>
                    </CardFooter>
                </Card>
            </Grid>
        </Link>
    </ListItem>
);

export default ProjectCard;