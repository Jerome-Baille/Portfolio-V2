import { Card, CardBody, VStack } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <VStack alignItems={"stretch"} gap={4} mb={4} id='contact'>
            <h3 className="section-title">Contact</h3>
            <Card>
                <CardBody>
                    <ContactForm />
                </CardBody>
            </Card>
        </VStack>
    );
}

export default Contact;