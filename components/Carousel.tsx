import { useState } from 'react';
import { Image } from '../lib/types';
import { urlFor } from '../lib/client';

type ImageCarouselProps = {
    images: Image[],
    alt: string,
    width: number
}

// Carousel component
function Carousel(props: ImageCarouselProps) {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [images, setImages] = useState<Image[]>(props.images);
    const [alt, setAlt] = useState<string>(props.alt);
    const [width, setWidth] = useState<number>(200);

    const nextImage = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    }

    const previousImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else {
            setCurrentImage(images.length - 1);
        }
    }

    return (
        <div className="carousel">
            <div className="carousel-image">
                <img src={urlFor(images[currentImage]).width(width).url()} alt={alt} />
            </div>
            <div className="carousel-buttons">
                <button className="carousel-button" onClick={previousImage}>Previous</button>
                <button className="carousel-button" onClick={nextImage}>Next</button>
            </div>
        </div>
    )
}

export default Carousel;