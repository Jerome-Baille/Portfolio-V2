import { FormControl, FormLabel, Input, Button, Textarea, VStack, HStack } from "@chakra-ui/react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Field, Form, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'
import { emailJSVariables } from "../../variables/emailJsVariables";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const handleFormSubmit = (values: ContactFormValues) => {
        emailjs.send(
            emailJSVariables.SERVICE_ID,
            emailJSVariables.TEMPLATE_ID,
            values as unknown as Record<string, unknown>,
            emailJSVariables.PUBLIC_KEY
        )
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (err) {
                console.log('FAILED...', err);
            });
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                handleFormSubmit(values);
                setSubmitting(false);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <VStack gap={4} alignItems={"flex-end"}>
                        <Field name="name">
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={!!(form.errors.name && form.touched.name)}>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Input {...field} id="name" placeholder="Name" />
                                    <ErrorMessage name="name" />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="email">
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input {...field} id="email" placeholder="Email" />
                                    <ErrorMessage name="email" />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="message">
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={!!(form.errors.message && form.touched.message)}>
                                    <FormLabel htmlFor="message">Message</FormLabel>
                                    <Textarea {...field} id="message" placeholder="Message" />
                                    <ErrorMessage name="message" />
                                </FormControl>
                            )}
                        </Field>
                        <Button isLoading={isSubmitting} type="submit">
                            <HStack spacing={2}>
                                <span>Send</span>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </HStack>
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
};

export default ContactForm;