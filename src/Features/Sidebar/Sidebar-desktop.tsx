import { Box, Flex, Grid, Image, Link } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faCalendar, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/portfolio-logo.png";
import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarDesktop = () => {
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

    const sidebarLink = ({ sectionId, icon }: { sectionId: string, icon: any }) => {
        return (
            <Link onClick={() => navigateAndScroll(sectionId)}>
                <FontAwesomeIcon icon={icon} size="xl" />
            </Link>
        )
    }

    const sidebarExternalLink = ({ href, icon }: { href: string, icon: any }) => {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="lg" />
            </Link>
        )
    }

    return (
        <Grid position={'fixed'} gridTemplateRows={'repeat(3, 1fr)'} w={'60px'} h={'100vh'}>
            <Box p={"1.5rem 5px 5px 5px"}>
                <Link onClick={() => navigateAndScroll('header')}>
                    <Image src={logo} alt="Profile Picture" />
                </Link>
            </Box>
            <Box>
                <Flex flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"} h={'100%'}>
                    {sidebarLink({ sectionId: 'about', icon: faUser })}
                    {sidebarLink({ sectionId: 'project', icon: faBriefcase })}
                    {sidebarLink({ sectionId: 'contact', icon: faEnvelope })}
                </Flex>
            </Box>
            <Box>
                <Flex flexDirection={"column"} justifyContent={"flex-end"} alignItems={"center"} height={"100%"} gap={"1rem"} pb={"1rem"}>
                    {sidebarExternalLink({ href: 'https://zcal.co/jerome-baille', icon: faCalendar })}
                    {sidebarExternalLink({ href: 'https://www.linkedin.com/in/jerome-baille/', icon: faLinkedin })}
                    {sidebarExternalLink({ href: 'https://github.com/Jerome-Baille', icon: faGithub })}
                </Flex>
            </Box>
        </Grid>
    )
}

export default SidebarDesktop;