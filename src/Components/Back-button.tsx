import { Box, Link } from "@chakra-ui/react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    title: string;
}

const BackButton = ({title}: BackButtonProps) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box mt={4}>
            <h1>{title}</h1>
            <Link onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> Go back
            </Link>
        </Box>
    )
};

export default BackButton;