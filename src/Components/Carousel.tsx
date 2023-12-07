import { Box, Image, HStack, Circle, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const nextImage = () => {
        setSelectedImage((prevSelectedImage) => (prevSelectedImage + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage((prevSelectedImage) => (prevSelectedImage - 1 + images.length) % images.length);
    };

    return (
        <Box className="carousel">
            <VStack alignItems={'stretch'} spacing={'1rem'}>
                <HStack alignItems={'center'} justifyContent={'space-between'}>
                    {images[0] === images[selectedImage] ?
                        null
                        :
                        <Circle onClick={prevImage} className="carousel-navigation carousel-navigation--left">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Circle>
                    }

                    <Image className="carousel-element" src={images[selectedImage]} alt="carousel image" />

                    {images[images.length - 1] === images[selectedImage] ?
                        null
                        :
                        <Circle onClick={nextImage} className="carousel-navigation carousel-navigation--right">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Circle>
                    }
                </HStack>
                <HStack justifyContent={'center'} spacing={'1rem'}>
                    {images.map((_, index) => (
                        <Circle key={index} size="10px" className={index === selectedImage ? "carousel-circle carousel-circle--active" : "carousel-circle"} onClick={() => setSelectedImage(index)} />
                    ))}
                </HStack>
            </VStack>
        </Box>
    );
}

export default ImageCarousel;