import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { spaceProjects } from '../data/spaceProjects';
import LazyImage from '../components/LazyImage';
import Meta from '../components/Meta';

const SpaceDetail = () => {
    const { slug } = useParams();
    const { i18n } = useTranslation();
    const [currentProject, setCurrentProject] = useState(null);

    // Helper function to get localized content
    const getLocalized = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            return obj[i18n.language] || obj.EN || obj.VI || '';
        }
        return obj;
    };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevProject, setPrevProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [allImages, setAllImages] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const modalRef = useRef(null);

    // Generate dynamic meta data for the current project
    const getDynamicMeta = () => {
        if (!currentProject) return {};

        const images = allImages.length > 0 ? allImages : currentProject.images;
        const desc = getLocalized(currentProject.description);
        return {
            title: `${getLocalized(currentProject.title)} | Miumiu Design Studio`,
            description: Array.isArray(desc) ? desc[0] : desc,
            image: images[0]?.image,
            url: `https://ganai.com/spaces/${currentProject.slug}`,
            keywords: `${getLocalized(currentProject.title)}, ${getLocalized(currentProject.location)}, design project, architecture, ${getLocalized(currentProject.year)}`,
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        setImagesLoaded(false);

        // Find the current project based on the URL parameter
        const project = spaceProjects.find((p) => p.slug === slug);

        if (project) {
            setCurrentProject(project);

            // Find previous and next projects for navigation
            const currentIndex = spaceProjects.findIndex(
                (p) => p.slug === slug,
            );
            setPrevProject(
                currentIndex > 0 ? spaceProjects[currentIndex - 1] : null,
            );
            setNextProject(
                currentIndex < spaceProjects.length - 1
                    ? spaceProjects[currentIndex + 1]
                    : null,
            );

            setCurrentImageIndex(0); // Reset image slider

            // Collect all images from the project including nested ones
            let collectedImages = [...project.images];
            if (project.referenceProject?.images) {
                collectedImages.push(...project.referenceProject.images);
            }
            if (project.climateAnalysis?.images) {
                collectedImages.push(...project.climateAnalysis.images);
            }
            if (project.drawProject?.images) {
                collectedImages.push(...project.drawProject.images);
            }
            if (project.AIGEN?.images) {
                collectedImages.push(...project.AIGEN.images);
            }
            setAllImages(collectedImages);

            // Preload all images
            const imagePromises = collectedImages.map((imgObj) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = imgObj.image;
                    img.onload = resolve;
                    img.onerror = resolve; // Still resolve even on error to not block
                });
            });

            Promise.all(imagePromises).then(() => {
                setImagesLoaded(true);
            });
        }

        setLoading(false);
    }, [slug]);

    const handleNextImage = () => {
        if (!currentProject) return;
        setCurrentImageIndex((prevIndex) =>
            prevIndex === allImages.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const handlePrevImage = () => {
        if (!currentProject) return;
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? allImages.length - 1 : prevIndex - 1,
        );
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    // Helper to enter fullscreen
    const enterFullscreen = (element) => {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };

    // Helper to exit fullscreen
    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };

    const openImageModal = (index) => {
        if (index >= 0 && index < currentProject.images.length) {
            setModalImageIndex(index);
            setTimeout(() => {
                setModalOpen(true);
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    if (modalRef.current) {
                        enterFullscreen(modalRef.current);
                    }
                }, 0);
            }, 0);
        }
    };

    const closeImageModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
        exitFullscreen();
    };

    const handleNextModalImage = (e) => {
        if (e) {
            e.stopPropagation();
        }
        if (!currentProject) return;
        setModalImageIndex((prevIndex) =>
            prevIndex === allImages.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const handlePrevModalImage = (e) => {
        if (e) {
            e.stopPropagation();
        }
        if (!currentProject) return;
        setModalImageIndex((prevIndex) =>
            prevIndex === 0 ? allImages.length - 1 : prevIndex - 1,
        );
    };

    // Handle keyboard navigation in modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!modalOpen) return;

            switch (event.key) {
                case 'Escape':
                    closeImageModal();
                    break;
                case 'ArrowRight':
                    handleNextModalImage(event);
                    break;
                case 'ArrowLeft':
                    handlePrevModalImage(event);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            // Reset overflow if component unmounts while modal is open
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (
                !document.fullscreenElement &&
                !document.webkitFullscreenElement &&
                !document.mozFullScreenElement &&
                !document.msFullscreenElement
            ) {
                setModalOpen(false);
                document.body.style.overflow = 'auto';
            }
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener(
            'webkitfullscreenchange',
            handleFullscreenChange,
        );
        document.addEventListener(
            'mozfullscreenchange',
            handleFullscreenChange,
        );
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
        return () => {
            document.removeEventListener(
                'fullscreenchange',
                handleFullscreenChange,
            );
            document.removeEventListener(
                'webkitfullscreenchange',
                handleFullscreenChange,
            );
            document.removeEventListener(
                'mozfullscreenchange',
                handleFullscreenChange,
            );
            document.removeEventListener(
                'MSFullscreenChange',
                handleFullscreenChange,
            );
        };
    }, []);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
            </div>
        );
    }

    if (!currentProject) {
        return (
            <div className="container-custom py-20 text-center">
                <h1 className="heading-lg mb-6 text-center">
                    Project Not Found
                </h1>
                <p className="paragraph mb-8">
                    The project you are looking for doesn't exist or has been
                    removed.
                </p>
                <Link to="/spaces" className="btn-primary">
                    Back to Spaces
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-16">
            <Meta pageKey="spaceDetail" customMeta={getDynamicMeta()} />
            {/* Hero Section */}
            <section className="bg-white py-8 md:py-12">
                <div className="container-custom">
                    <div className="mb-4 md:mb-6">
                        <Link
                            to="/spaces"
                            className="flex w-fit transform items-center text-dark-grey transition-transform duration-700 ease-in-out hover:-translate-x-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-4 w-4 md:h-5 md:w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm md:text-base">
                                Back to Spaces
                            </span>
                        </Link>
                    </div>
                    <h1 className="heading-lg mb-2">
                        {getLocalized(currentProject.title)}
                    </h1>
                    <p className="paragraph text-lg mb-0 md:text-xl">
                        {getLocalized(currentProject.location)},{' '}
                        {getLocalized(currentProject.year)}
                    </p>
                </div>
            </section>

            {/* Image Slider - redesigned to match Teoyang Studio style */}
            <section className="w-full">
                <div className="relative">
                    {/* Main full-width image */}
                    <div
                        className="relative h-[500px] w-full cursor-pointer overflow-hidden bg-light-grey"
                        onClick={() => {
                            console.log(
                                `Opening modal from main slider with index: ${currentImageIndex}`,
                            );
                            openImageModal(currentImageIndex);
                        }}
                    >
                        {!imagesLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-light-grey">
                                <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
                            </div>
                        )}
                        <div className="flex h-full w-full items-center justify-center">
                            <LazyImage
                                src={allImages[currentImageIndex]?.image}
                                alt={`${getLocalized(currentProject.title)} - Image ${currentImageIndex + 1}`}
                                className="h-[450px] w-auto object-contain"
                                transitionDuration="duration-500"
                                transitionTiming="ease-in-out-back"
                                placeholderColor="bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Minimal image navigation controls */}
                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-between px-4 md:px-8">
                        <button
                            onClick={handlePrevImage}
                            className="transform rounded-full bg-dark-grey bg-opacity-50 p-2 text-black backdrop-blur-sm transition hover:bg-opacity-70 md:p-3"
                            aria-label="Previous image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6"
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
                            onClick={handleNextImage}
                            className="transform rounded-full bg-dark-grey bg-opacity-50 p-2 text-black backdrop-blur-sm transition hover:bg-opacity-70 md:p-3"
                            aria-label="Next image"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6"
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
                    </div>

                    {/* Image counter - minimalistic style */}
                    <div className="absolute bottom-4 right-4 rounded-full bg-white bg-opacity-70 px-3 py-1 text-sm text-black backdrop-blur-sm">
                        {currentImageIndex + 1} / {allImages.length}
                    </div>
                </div>

                {/* Thumbnail Navigation - horizontal, elegant style */}
                <div className="container-custom mx-auto mt-4 px-4">
                    <div className="flex justify-center gap-2 overflow-x-auto py-2">
                        {allImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbnailClick(index)}
                                className={`relative h-20 w-20 flex-none border-2 transition-all ${
                                    currentImageIndex === index
                                        ? 'border-black opacity-100'
                                        : 'border-transparent opacity-60 hover:opacity-80'
                                }`}
                                aria-label={`View image ${index + 1}`}
                            >
                                <LazyImage
                                    src={image.image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    transitionDuration="duration-300"
                                    placeholderColor="bg-gray-200"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Information */}
            <section className="bg-white py-10 md:py-16">
                <div className="container-custom">
                    <div className="grid gap-8 md:grid-cols-3 md:gap-16">
                        <div className="md:col-span-2">
                            {getLocalized(currentProject.description).map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="paragraph md:text-lg text-content mb-6 text-xl"
                                    >
                                        {paragraph}
                                    </p>
                                ),
                            )}
                        </div>
                        <div className="space-y-8 rounded-md bg-light-grey p-6 md:rounded-none md:bg-white md:p-0">
                            <div>
                                <h3 className="mb-3 text-sm font-medium uppercase text-dark-grey">
                                    Project Details
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4">
                                    <div className="border-color-gray border-b pb-4">
                                        <p className="mb-1 text-sm uppercase text-dark-grey">
                                            Location
                                        </p>
                                        <p className="text-content">
                                            {getLocalized(
                                                currentProject.location,
                                            )}
                                        </p>
                                    </div>
                                    <div className="border-color-gray border-b pb-4 pl-1">
                                        <p className="mb-1 text-sm uppercase text-dark-grey">
                                            Year
                                        </p>
                                        <p className="text-content">
                                            {getLocalized(currentProject.year)}
                                        </p>
                                    </div>
                                    <div className="border-color-gray border-r">
                                        <p className="mb-1 text-sm uppercase text-dark-grey">
                                            Size
                                        </p>
                                        <p className="text-content">
                                            {getLocalized(currentProject.size)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="border-color-gray m-0 mb-1 border-t pt-4 text-sm uppercase text-dark-grey">
                                    Team
                                </p>
                                <ul className="mb-4">
                                    {getLocalized(currentProject.team).map(
                                        (member, index) => (
                                            <li
                                                key={index}
                                                className="text-content block"
                                            >
                                                {member}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-3 text-sm font-medium uppercase text-dark-grey">
                                    Photo Credits
                                </h3>
                                <p className="text-content">
                                    {getLocalized(currentProject.credits)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {currentProject.referenceProject && (
                <>
                    <section>
                        <h3 className="space-y-2 font-semibold">
                            {getLocalized(
                                currentProject.referenceProject.description,
                            )}
                        </h3>
                    </section>
                    <section className="bg-white py-10">
                        <div className="container-custom">
                            <div className="flex flex-col">
                                {currentProject.referenceProject.images.map(
                                    (image, imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="mb-[1px] w-full cursor-pointer"
                                            onClick={() => {
                                                // Explicitly log the index to verify it's correct
                                                console.log(
                                                    `Opening modal for image index: ${imageIndex}`,
                                                );
                                                openImageModal(imageIndex);
                                            }}
                                        >
                                            <div className="flex w-full justify-center">
                                                <LazyImage
                                                    src={image.image}
                                                    alt={`${getLocalized(currentProject.title)} - Image ${imageIndex + 1}`}
                                                    className="max-h-[80vh] max-w-full object-contain"
                                                    transitionDuration="duration-500"
                                                    transitionTiming="ease-in-out-back"
                                                    placeholderColor="bg-light-grey"
                                                />
                                            </div>
                                            {image.description && (
                                                <p className="mb-2 mt-2 text-center text-sm text-dark-grey">
                                                    {getLocalized(
                                                        image.description,
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                    <section>
                        <ul className="space-y-2">
                            {getLocalized(
                                currentProject.referenceProject.descriptionLong,
                            )}
                        </ul>
                    </section>
                </>
            )}
            {currentProject.siteAnalysis && (
                <>
                    <section className="bg-white py-10">
                        <div className="container-custom">
                            <div className="flex flex-col">
                                {currentProject.images.map(
                                    (image, imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="mb-[1px] w-full cursor-pointer"
                                            onClick={() => {
                                                // Explicitly log the index to verify it's correct
                                                console.log(
                                                    `Opening modal for image index: ${imageIndex}`,
                                                );
                                                openImageModal(imageIndex);
                                            }}
                                        >
                                            <div className="flex w-full justify-center">
                                                <LazyImage
                                                    src={image.image}
                                                    alt={`${getLocalized(currentProject.title)} - Image ${imageIndex + 1}`}
                                                    className="max-h-[80vh] max-w-full object-contain"
                                                    transitionDuration="duration-500"
                                                    transitionTiming="ease-in-out-back"
                                                    placeholderColor="bg-light-grey"
                                                />
                                            </div>
                                            {image.description && (
                                                <p className="mb-2 mt-2 text-center text-sm text-dark-grey">
                                                    {getLocalized(
                                                        image.description,
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                    <section className="mb-8">
                        <h3 className="text-lg mb-4 font-semibold">
                            {getLocalized(currentProject.siteAnalysis.title)}
                        </h3>
                        <ul className="space-y-2">
                            {currentProject.siteAnalysis.items.map(
                                (item, index) => (
                                    <li key={index}>
                                        <strong>
                                            {getLocalized(item.label)}:
                                        </strong>{' '}
                                        {getLocalized(item.content)}
                                    </li>
                                ),
                            )}
                        </ul>
                    </section>
                </>
            )}

            {currentProject.climateAnalysis && (
                <>
                    <section className="mb-8">
                        <h3 className="text-lg mb-4 font-semibold">
                            {getLocalized(currentProject.climateAnalysis.title)}
                        </h3>
                        <ul className="space-y-2">
                            {currentProject.climateAnalysis.items.map(
                                (item, index) => (
                                    <li key={index}>
                                        <strong>
                                            {getLocalized(item.label)}:
                                        </strong>{' '}
                                        {getLocalized(item.content)}
                                    </li>
                                ),
                            )}
                        </ul>
                    </section>
                    <section className="bg-white py-10">
                        <div className="container-custom">
                            <div className="flex flex-col">
                                {currentProject.climateAnalysis.images.map(
                                    (image, imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="mb-[1px] w-full cursor-pointer"
                                            onClick={() => {
                                                // Explicitly log the index to verify it's correct
                                                console.log(
                                                    `Opening modal for image index: ${imageIndex}`,
                                                );
                                                openImageModal(imageIndex);
                                            }}
                                        >
                                            <div className="flex w-full justify-center">
                                                <LazyImage
                                                    src={image.image}
                                                    alt={`${getLocalized(currentProject.title)} - Image ${imageIndex + 1}`}
                                                    className="max-h-[80vh] max-w-full object-contain"
                                                    transitionDuration="duration-500"
                                                    transitionTiming="ease-in-out-back"
                                                    placeholderColor="bg-light-grey"
                                                />
                                            </div>
                                            {image.description && (
                                                <p className="mb-2 mt-2 text-center text-sm text-dark-grey">
                                                    {getLocalized(
                                                        image.description,
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                </>
            )}
            {currentProject.drawProject && (
                <>
                    <section>
                        <h3 className="space-y-2 font-semibold">
                            {getLocalized(
                                currentProject.drawProject.description,
                            )}
                        </h3>
                    </section>
                    <section className="bg-white py-10">
                        <div className="container-custom">
                            <div className="flex flex-col">
                                {currentProject.drawProject.images.map(
                                    (image, imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="mb-[1px] w-full cursor-pointer"
                                            onClick={() => {
                                                // Explicitly log the index to verify it's correct
                                                console.log(
                                                    `Opening modal for image index: ${imageIndex}`,
                                                );
                                                openImageModal(imageIndex);
                                            }}
                                        >
                                            <div className="flex w-full justify-center">
                                                <LazyImage
                                                    src={image.image}
                                                    alt={`${getLocalized(currentProject.title)} - Image ${imageIndex + 1}`}
                                                    className="max-h-[80vh] max-w-full object-contain"
                                                    transitionDuration="duration-500"
                                                    transitionTiming="ease-in-out-back"
                                                    placeholderColor="bg-light-grey"
                                                />
                                            </div>
                                            {image.description && (
                                                <p className="mb-2 mt-2 text-center text-sm text-dark-grey">
                                                    {getLocalized(
                                                        image.description,
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                </>
            )}
            {currentProject.AIGEN && (
                <>
                    <section>
                        <h3 className="space-y-2 font-semibold">
                            {getLocalized(currentProject.AIGEN.description)}
                        </h3>
                    </section>
                    <section className="bg-white py-10">
                        <div className="container-custom">
                            <div className="flex flex-col">
                                {currentProject.AIGEN.images.map(
                                    (image, imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="mb-[1px] w-full cursor-pointer"
                                            onClick={() => {
                                                // Explicitly log the index to verify it's correct
                                                console.log(
                                                    `Opening modal for image index: ${imageIndex}`,
                                                );
                                                openImageModal(imageIndex);
                                            }}
                                        >
                                            <div className="flex w-full justify-center">
                                                <LazyImage
                                                    src={image.image}
                                                    alt={`${getLocalized(currentProject.title)} - Image ${imageIndex + 1}`}
                                                    className="max-h-[80vh] max-w-full object-contain"
                                                    transitionDuration="duration-500"
                                                    transitionTiming="ease-in-out-back"
                                                    placeholderColor="bg-light-grey"
                                                />
                                            </div>
                                            {image.description && (
                                                <p className="mb-2 mt-2 text-center text-sm text-dark-grey">
                                                    {getLocalized(
                                                        image.description,
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {currentProject.strengths && (
                <section className="mb-8">
                    <h3 className="text-lg mb-4 font-semibold">
                        {getLocalized(currentProject.strengths.title)}
                    </h3>
                    <ul className="space-y-2">
                        {currentProject.strengths.items.map((item, index) => (
                            <li key={index}>
                                <strong>{getLocalized(item.label)}:</strong>{' '}
                                {getLocalized(item.content)}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {currentProject.challengesAndSolutions && (
                <section className="mb-8">
                    <h3 className="text-lg mb-4 font-semibold">
                        {getLocalized(
                            currentProject.challengesAndSolutions.title,
                        )}
                    </h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left text-dark-grey">
                                    {i18n.language === 'VI'
                                        ? 'Thách thức'
                                        : 'Challenge'}
                                </th>
                                <th className="border p-3 text-left text-dark-grey">
                                    {i18n.language === 'VI'
                                        ? 'Giải pháp tối ưu'
                                        : 'Optimal Solution'}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProject.challengesAndSolutions.rows.map(
                                (row, index) => (
                                    <tr key={index}>
                                        <td className="border p-3">
                                            {getLocalized(row.challenge)}
                                        </td>
                                        <td className="border p-3">
                                            {getLocalized(row.solution)}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </section>
            )}
            <section className="bg-white py-10">
                <div className="container-custom">
                    <div className="flex flex-col">
                        {currentProject.images.map((image, imageIndex) => (
                            <div
                                key={imageIndex}
                                className="mb-[1px] w-full cursor-pointer"
                                onClick={() => {
                                    // Explicitly log the index to verify it's correct
                                    console.log(
                                        `Opening modal for image index: ${imageIndex}`,
                                    );
                                    openImageModal(imageIndex);
                                }}
                            >
                                <div className="flex w-full justify-center">
                                    <LazyImage
                                        src={image.image}
                                        alt={`${currentProject.title} - Image ${imageIndex + 1}`}
                                        className="max-h-[80vh] max-w-full object-contain"
                                        transitionDuration="duration-500"
                                        transitionTiming="ease-in-out-back"
                                        placeholderColor="bg-light-grey"
                                    />
                                </div>
                                {image.description && (
                                    <p className="mb-2 mt-2 text-center text-sm text-dark-grey">
                                        {getLocalized(image.description)}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Project Navigation */}
            <section className="bg-light-grey py-8 md:py-12">
                <div className="container-custom">
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                        <div className="w-full transform transition-transform duration-700 ease-in-out hover:-translate-x-2 sm:w-auto">
                            {prevProject && (
                                <Link
                                    to={`/spaces/${prevProject.slug}`}
                                    className="group flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-dark-grey md:text-sm">
                                            Previous Project
                                        </p>
                                        <p className="line-clamp-1 text-xl font-medium group-hover:underline">
                                            {getLocalized(prevProject.title)}
                                        </p>
                                    </div>
                                </Link>
                            )}
                        </div>

                        <div className="w-full transform text-right transition-transform duration-700 ease-in-out hover:translate-x-2 sm:w-auto">
                            {nextProject && (
                                <Link
                                    to={`/spaces/${nextProject.slug}`}
                                    className="group flex items-center justify-end"
                                >
                                    <div>
                                        <p className="text-xs text-dark-grey md:text-sm">
                                            Next Project
                                        </p>
                                        <p className="line-clamp-1 text-xl font-medium group-hover:underline">
                                            {getLocalized(nextProject.title)}
                                        </p>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-2 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            <section className="bg-white py-12 md:py-16">
                <div className="container-custom">
                    <h2 className="heading-md mb-8 text-center md:mb-12">
                        Explore More Projects
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {spaceProjects
                            .filter(
                                (project) => project.id !== currentProject.id,
                            )
                            .slice(0, 9)
                            .map((project) => (
                                <RelatedProjectCard
                                    key={project.id}
                                    project={project}
                                    getLocalized={getLocalized}
                                />
                            ))}
                    </div>
                </div>
            </section>

            {/* Full Screen Image Modal */}
            {modalOpen && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 z-50 bg-black"
                    onClick={closeImageModal}
                >
                    {/* Close button */}
                    <button
                        className="absolute right-4 top-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-70 md:right-6 md:top-6"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeImageModal();
                        }}
                        aria-label="Close image"
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

                    {/* Previous button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevModalImage(e);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-70 md:left-6 md:p-3"
                        aria-label="Previous image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 md:h-6 md:w-6"
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

                    {/* Next button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNextModalImage(e);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-70 md:right-6 md:p-3"
                        aria-label="Next image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 md:h-6 md:w-6"
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

                    {/* Image container - fully centered with no padding */}
                    <div
                        className="flex h-full w-full items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {currentProject &&
                            modalImageIndex >= 0 &&
                            modalImageIndex < allImages.length && (
                                <>
                                    <img
                                        key={`modal-image-${modalImageIndex}`}
                                        src={allImages[modalImageIndex].image}
                                        alt={`${getLocalized(currentProject.title)} - Full screen view`}
                                        className="h-full w-full object-contain"
                                        tabIndex={-1}
                                        draggable={false}
                                    />
                                    {/* {currentProject.images[modalImageIndex]
                                        .description && (
                                        <p className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-sm text-white">
                                            {
                                                currentProject.images[
                                                    modalImageIndex
                                                ].description
                                            }
                                        </p>
                                    )} */}
                                </>
                            )}
                    </div>

                    {/* Minimal image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black bg-opacity-50 px-3 py-1 text-sm text-white md:bottom-6">
                        {modalImageIndex + 1} / {allImages.length}
                    </div>
                </div>
            )}
        </div>
    );
};

const RelatedProjectCard = ({ project, getLocalized }) => {
    return (
        <Link
            to={`/spaces/${project.slug}`}
            className="group block transform transition-transform duration-700 ease-in-out hover:-translate-y-2"
        >
            <div className="relative mb-4 overflow-hidden pb-[56.25%]">
                <LazyImage
                    src={project.images[0].image}
                    alt={getLocalized(project.title)}
                    className="absolute inset-0 h-full w-full"
                    transitionDuration="duration-1000"
                    transitionTiming="ease-in-out-back"
                />
            </div>
            <h3 className="text-lg mb-2 font-light transition-colors">
                {getLocalized(project.title)}
            </h3>
            <p className="text-sm text-dark-grey">
                {getLocalized(project.location)}, {getLocalized(project.year)}
            </p>
        </Link>
    );
};

export default SpaceDetail;
