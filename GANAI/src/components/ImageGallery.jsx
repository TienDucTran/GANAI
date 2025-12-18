import React, { useState } from 'react';
import LazyImage from './LazyImage';
import ImageModal from './ImageModal';
import { useSwipeable } from 'react-swipeable';

const ImageGallery = ({
    images,
    alt,
    className = '',
    transitionDuration = 'duration-500',
    transitionTiming = 'ease-in-out-back',
    preventLinkNavigation = true,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNavigatingImages, setIsNavigatingImages] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => goToNext(new Event('swipe')),
        onSwipedRight: () => goToPrevious(new Event('swipe')),
        trackTouch: true,
        trackMouse: false,
    });
    const goToPrevious = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsNavigatingImages(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );

        // Reset the flag after a delay to allow normal link navigation again
        setTimeout(() => setIsNavigatingImages(false), 300);
    };

    const goToNext = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsNavigatingImages(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );

        // Reset the flag after a delay to allow normal link navigation again
        setTimeout(() => setIsNavigatingImages(false), 300);
    };

    const handleContainerClick = (e) => {
        // If we're currently navigating between images, prevent the link navigation
        if (isNavigatingImages && preventLinkNavigation) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        // If we're clicking on the image itself (not the navigation buttons), open the modal
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            e.stopPropagation();
            setIsModalOpen(true);
        }
    };

    if (!images || images.length === 0) {
        return (
            <div className={`relative ${className}`}>
                <LazyImage
                    src="https://via.placeholder.com/400x300"
                    alt={alt || 'Placeholder'}
                    className="h-full w-full object-cover"
                    transitionDuration={transitionDuration}
                    transitionTiming={transitionTiming}
                    enableHoverEffect={true}
                />
            </div>
        );
    }

    return (
        <>
            <div
                {...handlers}
                className={`group relative cursor-pointer ${className}`}
                onClick={handleContainerClick}
            >
                <LazyImage
                    src={images[currentIndex].image}
                    alt={`${alt} - ${currentIndex + 1} of ${images.length}`}
                    className="h-full w-full object-cover"
                    transitionDuration={transitionDuration}
                    transitionTiming={transitionTiming}
                    enableHoverEffect={true}
                />

                {/* Image counter */}
                {images.length > 1 && (
                    <div className="text-xs absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}

                {/* Navigation arrows - only show if there's more than one image */}
                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition duration-300 hover:opacity-100 group-hover:opacity-80 sm:block"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition duration-300 hover:opacity-100 group-hover:opacity-80 sm:block"
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Modal */}
            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                images={images}
                initialIndex={currentIndex}
                title={alt}
            />
        </>
    );
};

export default ImageGallery;
