import { Box, VStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <VStack alignItems={"stretch"} gap={'2rem'} mb={4} id='contact'>
            <h3 className="section-title">Contact</h3>
            <Box>
                <ContactForm />
            </Box>
        </VStack>
    );
}

export default Contact;