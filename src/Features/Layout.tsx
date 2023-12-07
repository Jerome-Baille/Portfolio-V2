import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Grid gridTemplateColumns={'60px 1fr'} className="app">
            <Box />
            <Sidebar />
            <Box m={'0 1rem 1rem 1rem'} flexGrow={1}>
                <Outlet />
            </Box>
        </Grid>
    )
};

export default Layout;