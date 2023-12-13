import { Box, Image, VStack } from "@chakra-ui/react";
import { Images } from "../../assets/images";
import BackButton from "../../Components/BackButton/Back-button";

const AboutDetail = () => {
    return (
        <main className="main-container">
            <VStack alignItems={'stretch'} spacing={'2rem'} mb={'5rem'}>
                <BackButton title={'Me, Myself and I'} />
                <VStack gap={'5rem'}>

                    <Box className="about-portrait" >
                        <Image src={Images.PortfolioLogo} w={'100%'} h={'100%'} className="about-portrait-content avatar" alt='Portfolio Logo' />
                        <Image src={Images.Portrait} w={'100%'} h={'100%'} className="about-portrait-content myself" alt='Portfolio Logo' />
                    </Box>

                    <Box className="about-text">
                        <p>
                            In the ebullient world of banking, I forged a sturdy foundation before veering deliberately toward my veritable passion: coding and the infinite expanses of potential it unfolds. Delving into the entrancing domain of web development, I embarked upon a voyage, engaging in the creation of an online gallery for digital art and the conception of transformative applications spanning nonprofits, businesses, and individuals.
                        </p>
                        <p>
                            My resolve emanates from an ingrained yearning to elevate existence through pioneering digital solutions. I am devoted to the craft of shaping applications that not only streamline mundane tasks but also endow individuals with the capacity to focus on their intrinsic priorities.
                        </p>
                        <p>
                            Let us embark upon a sojourn where technology intertwines with creativity, and each coded line constitutes a stride toward a profound influence within the digital panorama.
                        </p>
                    </Box>
                </VStack>
            </VStack>
        </main>
    );
};

export default AboutDetail;