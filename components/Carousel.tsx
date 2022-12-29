import { useState } from 'react';
import { Image } from '../lib/types';
import { urlFor } from '../lib/client';
import { MinusToken } from 'typescript';

type ImageCarouselProps = {
    images: Image[],
    alt: string,
    width: number,
    height: number
}

const getImageUrls = (images: Image[], width: number, height: number) => {
    return images.map(image => {
        return urlFor(image).width(width).height(height).url();
    })
}

// Carousel component
function Carousel(props: ImageCarouselProps) {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [alt, setAlt] = useState<string>(props.alt);
    const [width, setWidth] = useState<number>(props.width);
    const [height, setHeight] = useState<number>(props.height);
    const [images, setImages] = useState<string[]>(getImageUrls(props.images, height, width));

    


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
                {/* <span className="carousel-prev" onClick={previousImage}>Previous</span> */}
                <img src={urlFor(images[currentImage]).width(width).height(height).url()} alt={alt} />
                {/* <span className="carousel-next" onClick={nextImage}>Next</span> */}
            </div>
            <div className="carousel-buttons">
                <span className="carousel-prev" onClick={previousImage}>Previous</span>
                <span className="carousel-next" onClick={nextImage}>Next</span>
            </div>
        </div>
    )
}

export default Carousel;