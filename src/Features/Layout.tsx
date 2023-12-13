import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Grid className="app">
            <Box />
            <Sidebar />
            <Box m={'0 1rem 1rem 1rem'} flexGrow={1}>
                <Outlet />
            </Box>
        </Grid>
    )
};

export default Layout;