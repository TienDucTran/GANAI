import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ImageModal = ({ isOpen, onClose, images, initialIndex = 0, title }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Set up keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, currentIndex]);

    // Handle scroll prevention when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            // Store the original overflow value
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            // Store the original overflow in a data attribute for cleanup
            document.body.setAttribute(
                'data-original-overflow',
                originalOverflow,
            );
        } else {
            // Restore the original overflow value
            const originalOverflow =
                document.body.getAttribute('data-original-overflow') || '';
            document.body.style.overflow = originalOverflow;
            document.body.removeAttribute('data-original-overflow');
        }
    }, [isOpen, initialIndex]);

    // Cleanup on component unmount
    useEffect(() => {
        return () => {
            // Ensure we restore scroll when component unmounts
            const originalOverflow =
                document.body.getAttribute('data-original-overflow') || '';
            document.body.style.overflow = originalOverflow;
            document.body.removeAttribute('data-original-overflow');
        };
    }, []);

    if (!isOpen) return null;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                className="absolute right-4 top-4 z-[60] rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                onClick={onClose}
                aria-label="Close modal"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Title if provided */}
            {title && (
                <div className="absolute left-0 top-4 w-full text-center text-xl font-light text-white">
                    {title}{' '}
                    <span className="text-sm opacity-80">
                        ({currentIndex + 1}/{images.length})
                    </span>
                </div>
            )}

            {/* Image container */}
            <div
                className="relative max-h-[85vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[currentIndex]}
                    alt={title || `Image ${currentIndex + 1}`}
                    className="max-h-[85vh] max-w-[90vw] object-contain"
                />

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80 md:-left-12"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
                            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80 md:-right-12"
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ImageModal;
