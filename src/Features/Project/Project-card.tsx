import { Image, Flex, Grid, Tag, ListItem, VStack, HStack } from "@chakra-ui/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Grid className="project-card-container" gap={4}>
            <Image src={imageSrc} className="project-thumbnail" alt="project" />

            <VStack gap={4} alignItems={"flex-start"}>
                <Link to={`/project/${id}`}>
                    <HStack gap={4}>
                        <h4>{title}</h4>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon" />
                    </HStack>
                </Link>
                <h5 className="subtitle">"{subtitle}"</h5>
                <p>
                    {description}
                </p>
                <Flex flexWrap={'wrap'} gap={4}>
                    {tags.map((tag, index) =>
                        <Tag
                            key={index}
                            className="custom-tag"
                        >
                            {tag}
                        </Tag>)
                    }
                </Flex>
            </VStack>
        </Grid>
    </ListItem>
);

export default ProjectCard;