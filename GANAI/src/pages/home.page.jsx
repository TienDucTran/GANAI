import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../config';
import { drhealcare1 } from '../assets/images';
import Meta from '../components/Meta';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Meta pageKey="home" />
            {/* Hero Section */}
            <section className="bg-white py-14 lg:py-20">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h1 className="heading-lg mb-8 uppercase">
                            {t('home.heroTitle')}
                        </h1>
                        <p className="paragraph mb-10 max-w-2xl">
                            {t('home.heroDescription')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to={config.routes.spaces}
                                className="btn-primary"
                            >
                                {t('home.exploreSpaces')}
                            </Link>
                            <Link
                                to={config.routes.introduce}
                                className="btn-secondary"
                            >
                                {t('home.aboutStudio')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Design Philosophy */}
            <section className="bg-grey bg-opacity-30 py-20">
                <div className="container-custom">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="flex h-full items-center justify-center">
                            <img
                                className="block h-full w-full object-cover object-center"
                                href="noImg"
                                src={drhealcare1}
                            ></img>
                        </div>
                        <div>
                            <h2 className="heading-md mb-6">
                                {t('home.designPhilosophy')}
                            </h2>
                            <p className="paragraph mb-6">
                                {t('home.designPhilosophyDesc1')}
                            </p>
                            <p className="paragraph mb-6">
                                {t('home.designPhilosophyDesc2')}
                            </p>
                            <Link
                                to={config.routes.introduce}
                                className="inline-flex transform items-center font-medium text-black transition-transform duration-700 ease-in-out hover:translate-x-1"
                            >
                                {t('home.learnMore')}{' '}
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="heading-md mb-6">
                            {t('home.getInTouch')}
                        </h2>
                        <p className="paragraph mb-8">
                            {t('home.contactDesc')}
                        </p>
                        <Link
                            to={config.routes.contact}
                            className="btn-primary"
                        >
                            {t('home.contactUs')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Category Card Component
const CategoryCard = ({ title, description, link }) => {
    const { t } = useTranslation();
    return (
        <div className="card-minimal">
            <div className="image-container mb-6 aspect-video bg-grey">
                <div className="flex h-full items-center justify-center text-dark-grey">
                    {title} {t('home.image')}
                </div>
            </div>
            <h3 className="font-gelasio mb-3 text-xl">{title}</h3>
            <p className="mb-4 text-dark-grey">{description}</p>
            <Link
                to={link}
                className="inline-flex transform items-center font-medium text-black transition-transform duration-700 ease-in-out hover:translate-x-1"
            >
                {t('home.explore')} {title} <span className="ml-2">→</span>
            </Link>
        </div>
    );
};

export default Home;
