import { Box, HStack, Link, VStack } from "@chakra-ui/react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import './Back-button.css';

interface BackButtonProps {
    title: string;
    subtitle?: string;
}

const BackButton = ({ title, subtitle }: BackButtonProps) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <VStack mt={'1.5rem'} gap={6} align={'flex-start'}>
            <h1 className="accent">{title}</h1>
            {subtitle && <h2 className="subtitle">"{subtitle}"</h2>}
            <Box>
                <Link onClick={goBack} className="back-button">
                    <HStack spacing={4}>
                        <FontAwesomeIcon icon={faArrowLeft} className="back-button-icon" />
                        <span>Go Back</span>
                    </HStack>
                </Link>
            </Box>
        </VStack>
    )
};

export default BackButton;