import { HStack, Link, VStack } from "@chakra-ui/react";
import { NavLink as RouterLink } from 'react-router-dom';
import { Docs } from "../../assets/docs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import './About.css';

const About = () => {
    return (
        <VStack alignItems={'stretch'} gap={'2rem'} id='about'>
            <h3 className="section-title">About</h3>

            <VStack alignItems={'flex-start'} gap={4}>
                <p>
                    In the pursuit of excellence, Jérôme graduated with a Mlit and a GD in Computer Science. Additionally, he holds a Full-Stack Developer Professional Certification from Meta and a Cybersecurity Professional Certification from Google. With a solid foundation in banking, he transitioned towards his true passion—coding and web development. He has worked on several projects across Europe for international companies, non-profits and individuals. With 9 years of experience, he acquired a specific set of skills that position him as a versatile and accomplished professional in the world of technology.
                </p>

                <HStack spacing={'3rem'}>
                    <Link as={RouterLink} to='/about' w={'fit-content'}>
                        <HStack spacing={4} className="about-link">
                            <p>
                                Want to know more ?
                            </p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon"/>
                        </HStack>
                    </Link>
                    <Link href={Docs.Resume_ANG_EN} w={'fit-content'} isExternal>
                        <HStack spacing={4} className="about-link">
                            <p>
                                Otherwise, check out my resume
                            </p>
                            <FontAwesomeIcon icon={faFilePdf} className="link-icon" />
                        </HStack>
                    </Link>
                </HStack>
            </VStack>
        </VStack>
    );
}

export default About;