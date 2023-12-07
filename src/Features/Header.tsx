import { VStack } from "@chakra-ui/react";

const Header = () => {
    return (
        <VStack justifyContent={'center'} alignItems={'flex-start'} paddingTop={'1rem'} id="header">
            <h1 className="accent">Jérôme BAILLE</h1>
            <h2>Frontend Engineer</h2>
            <p>Tech Solutions for Your Day-to-Day</p>
        </VStack>
    )
};

export default Header;