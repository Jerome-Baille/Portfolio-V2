import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Image, Link, VStack, useDisclosure } from "@chakra-ui/react";
import { faBars, faBriefcase, faCalendar, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/portfolio-logo.png";
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface sidebarLinkProps {
    sectionId: string,
    icon: any,
    text: string
}

const SidebarMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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

    const sidebarLink = ({ sectionId, icon, text }: sidebarLinkProps) => {
        return (
            <Link onClick={() => {navigateAndScroll(sectionId); onClose()}}>
                <HStack gap={4}>
                    <span>{text}</span>
                    <FontAwesomeIcon icon={icon} size="xl" />
                </HStack>
            </Link>
        )
    }

    const sidebarExternalLink = ({ href, text, icon }: { href: string, text: string, icon: any }) => {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <HStack gap={4}>
                    <span>{text}</span>
                    <FontAwesomeIcon icon={icon} size="lg" />
                </HStack>
            </Link>
        )
    }

    return (
        <>
            <div className="sidebar-mobile">
                <Button colorScheme="teal" variant="outline" onClick={onOpen}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </div>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent className="sidebar-drawer">
                    <DrawerHeader borderBottomWidth="1px">
                        <Link onClick={() => { navigateAndScroll('header'); onClose() }}>
                            <Image src={logo} className="sidebar-logo--mobile" alt="Profile Picture" />
                        </Link>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack justifyContent={'center'} gap={'3rem'} my={8}>
                            {sidebarLink({ sectionId: 'about', icon: faUser, text: 'About' })}
                            {sidebarLink({ sectionId: 'project', icon: faBriefcase, text: 'Projects' })}
                            {sidebarLink({ sectionId: 'contact', icon: faEnvelope, text: 'Contact' })}
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <VStack alignItems={'end'} gap={'1rem'}>
                            {sidebarExternalLink({ href: 'https://zcal.co/jerome-baille', text: 'Z-Cal', icon: faCalendar })}
                            {sidebarExternalLink({ href: 'https://www.linkedin.com/in/jerome-baille/', text: 'LinkedIn', icon: faLinkedin })}
                            {sidebarExternalLink({ href: 'https://github.com/Jerome-Baille', text: 'GitHub', icon: faGithub })}
                        </VStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SidebarMobile;