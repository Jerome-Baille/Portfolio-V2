import { Box, Flex, Grid, Image, Link } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faCalendar, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/portfolio-logo.png";
import { scroller} from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateAndScroll = (sectionId: string) => {
        if (location.pathname !== '/home') {
            navigate('/home');
            setTimeout(() => {
                scroller.scrollTo(sectionId, {
                    smooth: true,
                    offset: 0,
                    duration: 1000,
                });
            }, 500);
        } else {
            scroller.scrollTo(sectionId, {
                smooth: true,
                offset: 0,
                duration: 1000,
            });
        }
    };

    return (
        <Grid position={'fixed'} gridTemplateRows={'repeat(3, 1fr)'} w={'60px'} h={'100vh'}>
            <Box p={"5px"}>
                <Link onClick={() => navigateAndScroll('header')}>
                    <Image src={logo} alt="Profile Picture" />
                </Link>
            </Box>
            <Box>
                <Flex flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"} h={'100%'}>
                    <Link onClick={() => navigateAndScroll('about')}>
                        <FontAwesomeIcon icon={faUser} size="xl" />
                    </Link>
                    <Link onClick={() => navigateAndScroll('project')}>
                        <FontAwesomeIcon icon={faBriefcase} size="xl" />
                    </Link>
                    <Link onClick={() => navigateAndScroll('contact')}>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </Link>
                </Flex>
            </Box>
            <Box>
                <Flex flexDirection={"column"} justifyContent={"flex-end"} alignItems={"center"} height={"100%"} gap={"1rem"} pb={"1rem"}>
                    <Link href={'https://zcal.co/jerome-baille'}>
                        <FontAwesomeIcon icon={faCalendar} size="lg" />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/jerome-baille/'}>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </Link>
                    <Link href={'https://github.com/Jerome-Baille'}>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Link>
                </Flex>
            </Box>
        </Grid>
    )
}

export default Sidebar;