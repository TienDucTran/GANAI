import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';

const Introduce = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const values = [
        {
            icon: (
                <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
            ),
            title: t('introduce.innovationTitle'),
            description: t('introduce.innovationDesc'),
            color: 'text-black',
        },
        {
            icon: (
                <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
            ),
            title: t('introduce.qualityTitle'),
            description: t('introduce.qualityDesc'),
            color: 'text-black',
        },
        {
            icon: (
                <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
            ),
            title: t('introduce.collaborationTitle'),
            description: t('introduce.collaborationDesc'),
            color: 'text-black',
        },
    ];

    const expertise = [
        {
            icon: '🏠',
            title: t('introduce.residentialDesignTitle'),
            description: t('introduce.residentialDesignDesc'),
        },
        {
            icon: '🏢',
            title: t('introduce.commercialSpacesTitle'),
            description: t('introduce.commercialSpacesDesc'),
        },
        {
            icon: '🪑',
            title: t('introduce.furnitureDesignTitle'),
            description: t('introduce.furnitureDesignDesc'),
        },
        {
            icon: '📐',
            title: t('introduce.spacePlanningTitle'),
            description: t('introduce.spacePlanningDesc'),
        },
    ];

    return (
        <div className="from-gray-50 min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Meta pageKey="introduce" />
            {/* HERO SECTION */}
            <motion.div
                className="relative overflow-hidden py-20"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0"></div>
                <div className="bg-dot-pattern absolute inset-0"></div>

                <div className="container-custom relative z-10">
                    <motion.div variants={itemVariants} className="text-center">
                        <h1 className="heading-lg  mb-6 ">
                            {t('introduce.aboutStudio')}
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
                            Crafting spaces that inspire, innovate, and endure.
                            We transform visions into extraordinary realities.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN CONTENT */}
            <div className="container-custom pb-20">
                {/* Section: About + Expertise */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
                >
                    {/* About Studio */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8 px-10"
                    >
                        <div className="relative">
                            <h2 className="heading-md mb-6 font-bold text-gray-900 dark:text-white">
                                {t('introduce.ourStoryTitle')}
                            </h2>
                        </div>
                        <div className="text-lg space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
                            <p className="border-purple-500 border-l-4 pl-6">
                                {t('introduce.ourStoryP1')}
                            </p>
                            <p className="border-pink-500 border-l-4 pl-6">
                                {t('introduce.ourStoryP2')}
                            </p>
                        </div>

                        <div>
                            <h3 className="heading-md mb-6 font-bold text-gray-900 dark:text-white">
                                {t('introduce.ourPhilosophyTitle')}
                            </h3>
                            <div className="text-lg space-y-4 text-gray-700 dark:text-gray-300">
                                <p className="border-purple-500 border-l-4 pl-6">
                                    {t('introduce.ourPhilosophyP1')}
                                </p>
                                <p className="border-purple-500 border-l-4 pl-6">
                                    {t('introduce.ourPhilosophyP2')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Expertise Visual Block */}
                    <motion.div variants={itemVariants}>
                        <div className="from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl bg-gradient-to-br p-8 shadow-xl">
                            <div className="relative z-10 grid grid-cols-2 gap-6">
                                {expertise.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: {
                                                    delay: index * 0.1,
                                                },
                                            },
                                        }}
                                        className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
                                    >
                                        <div className="mb-4 text-4xl">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg mb-2 font-semibold text-gray-900 dark:text-white">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Section: Values */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-20"
                >
                    <div className="mb-16 text-center">
                        <h2 className="heading-md mb-6 font-bold text-gray-900 dark:text-white">
                            {t('introduce.ourValuesTitle')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
                            The principles that guide our every project and
                            decision
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="from-purple-600 to-pink-600 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-20"></div>
                                <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800">
                                    <div
                                        className={`inline-flex rounded-xl bg-gradient-to-r p-4 ${value.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        {value.icon}
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                                        {value.title}
                                    </h3>
                                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Introduce;
