import { VStack } from "@chakra-ui/react";

const Header = () => {
    return (
        <VStack justifyContent={'center'} alignItems={'flex-start'} paddingTop={'1.5rem'} id="header">
            <h1 className="accent header-name">Jérôme Baille</h1>
            <VStack ml={'40px'} alignItems={'flex-start'} gap={4}>
                <h2>Frontend Engineer</h2>
                <p className="subtitle">Tech Solutions for Your Day-to-Day</p>
            </VStack>
        </VStack>
    )
};

export default Header;