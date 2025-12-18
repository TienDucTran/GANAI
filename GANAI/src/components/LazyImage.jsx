import { useState, useEffect, useRef } from 'react';

const LazyImage = ({
    src,
    alt,
    className = '',
    placeholderColor = 'bg-gray-200',
    transitionDuration = 'duration-400',
    transitionTiming = 'ease-in-out-back',
    fallbackSrc = 'https://via.placeholder.com/400x300',
    enableHoverEffect = false,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const imgRef = useRef(null);

    // Set up intersection observer to detect when image is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px', // Start loading images 100px before they appear in viewport
                threshold: 0.1, // Trigger when at least 10% of the image is visible
            },
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    // Load the image when it's in view
    useEffect(() => {
        if (!isInView) return;

        setImageSrc(src);

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setIsLoaded(true);
        };

        img.onerror = () => {
            setImageSrc(fallbackSrc);
            setIsLoaded(true);
        };
    }, [isInView, src, fallbackSrc]);

    const hoverEffectClasses = enableHoverEffect
        ? 'group-hover:scale-105 group-hover:brightness-105 transform-gpu'
        : '';

    return (
        <div
            ref={imgRef}
            className={`overflow-hidden ${!isLoaded ? placeholderColor : ''} ${className}`}
            style={{ minHeight: '10px' }}
            {...props}
        >
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    className={`h-full w-full object-cover transition ${transitionDuration} ${transitionTiming} ${
                        isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'
                    } ${hoverEffectClasses}`}
                    loading="lazy"
                />
            )}
        </div>
    );
};

export default LazyImage;
