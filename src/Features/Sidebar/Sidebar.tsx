import { useMediaQuery } from 'react-responsive';
import SidebarDesktop from "./Sidebar-desktop";
import SidebarMobile from "./Sidebar-mobile";

import './Sidebar.css';

const Sidebar = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 768px)'
    });
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });

    return (
        <>
            {isDesktopOrLaptop && <SidebarDesktop />}
            {isMobile && <SidebarMobile />}
        </>
    )
}

export default Sidebar;