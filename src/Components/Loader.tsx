import { Box, Image } from "@chakra-ui/react";
import { Images } from "../assets/images";

const Loader = () => {
    return (
        <Box>
            <Image src={Images.PortfolioLogo} alt="Loader" />
        </Box>
    )
};

export default Loader;