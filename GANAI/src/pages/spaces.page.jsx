import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { spaceProjects } from '../data/spaceProjects';
import LazyImage from '../components/LazyImage';
import ImageGallery from '../components/ImageGallery';
import Meta from '../components/Meta';

// Function to collect all images from a project
const getAllImages = (project) => {
    let images = [...project.images];
    if (project.referenceProject?.images) {
        images.push(...project.referenceProject.images);
    }
    if (project.siteAnalysis?.images) {
        images.push(...project.siteAnalysis.images);
    }
    if (project.climateAnalysis?.images) {
        images.push(...project.climateAnalysis.images);
    }
    if (project.drawProject?.images) {
        images.push(...project.drawProject.images);
    }
    if (project.AIGEN?.images) {
        images.push(...project.AIGEN.images);
    }
    return images;
};

const SpaceCard = ({ space }) => {
    const { i18n } = useTranslation();
    const allImages = getAllImages(space);
    console.log(space);

    // Helper function to get localized content (handles en/vi and EN/VI keys and arrays)
    const getLocalized = (field) => {
        if (typeof field === 'object' && field !== null) {
            if (Array.isArray(field)) return field;
            const lang = (i18n.language || '').toLowerCase();
            const altKey = lang.toUpperCase();
            return (
                field[lang] ||
                field[altKey] ||
                field.en ||
                field.EN ||
                field.vi ||
                field.VI ||
                ''
            );
        }
        return field;
    };

    return (
        <div className="group cursor-pointer">
            <div className="relative mb-4 aspect-[4/3] overflow-hidden">
                <ImageGallery
                    images={allImages.map((img) => ({
                        ...img,
                        description: img.description
                            ? getLocalized(img.description)
                            : undefined,
                    }))}
                    alt={getLocalized(space.title)}
                    className="absolute inset-0 h-full w-full object-cover"
                    transitionDuration="duration-500"
                    transitionTiming="ease-in-out-back"
                />
            </div>
            <Link to={`/spaces/${space.slug}`}>
                <h3 className="mb-2 text-xl font-light">
                    {getLocalized(space.title)}
                </h3>
                <p className="paragraph mb-3 line-clamp-2">
                    {Array.isArray(getLocalized(space.description))
                        ? getLocalized(space.description)[0]
                        : getLocalized(space.description)}
                </p>
                <div className="flex justify-between gap-6 text-dark-grey">
                    <div>
                        <p className="text-grey-custom mb-1 text-sm uppercase">
                            Location
                        </p>
                        <p className="font-light">
                            {getLocalized(space.location)}
                        </p>
                    </div>
                    <div>
                        <p className="text-grey-custom mb-1 text-sm uppercase">
                            Year
                        </p>
                        <p className="font-light">{getLocalized(space.year)}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const Spaces = () => {
    const { i18n } = useTranslation();
    // Get featured project (first one for now)
    const featuredProject = spaceProjects[0];

    const featuredImages = getAllImages(featuredProject);

    // Helper function to get localized content (handles en/vi and EN/VI keys and arrays)
    const getLocalized = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) return obj;
            const lang = (i18n.language || '').toLowerCase();
            const altKey = lang.toUpperCase();
            return (
                obj[lang] ||
                obj[altKey] ||
                obj.en ||
                obj.EN ||
                obj.vi ||
                obj.VI ||
                ''
            );
        }
        return obj;
    };

    return (
        <div>
            <Meta pageKey="spaces" />
            {/* Hero Section */}
            <section className="bg-white py-14 lg:py-20">
                <div className="container-custom">
                    <h1 className="heading-lg mb-6 text-center">Spaces</h1>
                    <p className="paragraph mx-auto max-w-2xl text-center">
                        Our architectural projects represent the convergence of
                        art, function, and human experience. Each space is
                        designed to evoke emotion, facilitate purpose, and stand
                        as a testament to thoughtful design.
                    </p>
                </div>
            </section>

            {/* Featured Space */}
            <section className="bg-light-grey py-16">
                <div className="container-custom">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="mb-6 md:mb-0">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <ImageGallery
                                    images={featuredImages.map((img) => ({
                                        ...img,
                                        description: img.description
                                            ? getLocalized(img.description)
                                            : undefined,
                                    }))}
                                    alt={getLocalized(featuredProject.title)}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    transitionDuration="duration-500"
                                    transitionTiming="ease-in-out-back"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="heading-md mb-4">
                                Featured Project
                            </h2>
                            <h3 className="font-gelasio mb-2 text-2xl">
                                {getLocalized(featuredProject.title)}
                            </h3>
                            <p className="paragraph mb-6">
                                {Array.isArray(
                                    getLocalized(featuredProject.description),
                                )
                                    ? getLocalized(
                                          featuredProject.description,
                                      )[0]
                                    : getLocalized(featuredProject.description)}
                            </p>
                            <div className="mb-6 flex justify-between gap-8 text-dark-grey">
                                <div>
                                    <p className="text-grey-custom mb-1 text-sm uppercase">
                                        Location
                                    </p>
                                    <p className="font-light">
                                        {getLocalized(featuredProject.location)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-grey-custom mb-1 text-sm uppercase">
                                        Year
                                    </p>
                                    <p className="font-light">
                                        {getLocalized(featuredProject.year)}
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={`/spaces/${featuredProject.slug}`}
                                className="btn-primary"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spaces Grid */}
            <div className="bg-white py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {spaceProjects.map((space) => (
                            <SpaceCard key={space.id} space={space} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <h3 className="mb-4 text-xl font-light">
                            Explore More Projects
                        </h3>
                        <div className="flex flex-col gap-10">
                            {spaceProjects.slice(0, 3).map((space) => (
                                <div
                                    key={`mobile-${space.id}`}
                                    className="flex flex-col items-center"
                                >
                                    <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden">
                                        <ImageGallery
                                            images={getAllImages(space).map(
                                                (img) => ({
                                                    ...img,
                                                    description: img.description
                                                        ? getLocalized(
                                                              img.description,
                                                          )
                                                        : undefined,
                                                }),
                                            )}
                                            alt={getLocalized(space.title)}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            transitionDuration="duration-500"
                                            transitionTiming="ease-in-out-back"
                                        />
                                    </div>
                                    <Link to={`/spaces/${space.slug}`}>
                                        <h3 className="mb-2 text-xl font-light">
                                            {getLocalized(space.title)}
                                        </h3>
                                        <div className="flex gap-6">
                                            <div>
                                                <p className="mb-1 text-sm uppercase text-dark-grey">
                                                    Location
                                                </p>
                                                <p className="font-light text-dark-grey">
                                                    {getLocalized(
                                                        space.location,
                                                    )}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="mb-1 text-sm uppercase text-dark-grey">
                                                    Year
                                                </p>
                                                <p className="font-light text-dark-grey">
                                                    {getLocalized(space.year)}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spaces;
