import { VStack } from "@chakra-ui/react";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Header from "./Header";

const Home = () => {
    return (
        <main>
            <VStack alignItems={'stretch'} gap={'5rem'} padding={'0 1rem'}>
                <Header />
                <About />
                <Project />
                <Contact />
            </VStack>
        </main>
    );
}

export default Home;