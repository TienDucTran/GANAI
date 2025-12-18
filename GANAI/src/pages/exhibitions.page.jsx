import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../components/Meta';
import {
    getAllExhibitions,
    getExhibitionsByCategory,
    getCategories,
} from '../data/exhibitions';

const Exhibitions = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');

    const exhibitions = getAllExhibitions();
    const categories = getCategories();

    const filteredExhibitions = getExhibitionsByCategory(activeFilter);

    const handleCardClick = (exhibitionId) => {
        navigate(`/exhibitions/${exhibitionId}`);
    };

    const handleFilterClick = (category) => {
        setActiveFilter(category);
    };

    return (
        <div className="mx-auto max-w-7xl px-5">
            <Meta pageKey="exhibitions" />

            <section className="mb-15 border-b border-gray-200 py-14 text-center dark:border-gray-700 lg:py-20">
                <h1 className="heading-lg mb-6 font-light leading-tight text-gray-900 dark:text-gray-100">
                    Exhibitions
                </h1>
                <p className="mx-auto max-w-2xl text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-400">
                    Explore our innovative exhibitions showcasing the
                    intersection of AI, design, and human creativity. From
                    current shows to upcoming events, discover how artificial
                    intelligence is reshaping the future of architecture and
                    design.
                </p>
            </section>

            <div className="mb-15 flex flex-wrap justify-center gap-5">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`cursor-pointer rounded border border-gray-300 bg-transparent px-2 py-1 md:px-6 md:py-3 text-sm font-medium capitalize text-gray-600 transition-all duration-300 hover:border-gray-900 hover:text-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-300 dark:hover:text-gray-300 ${
                            activeFilter === category
                                ? 'text-category border-gray-700'
                                : ''
                        }`}
                        onClick={() => handleFilterClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredExhibitions.length > 0 ? (
                <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {filteredExhibitions.map((exhibition) => (
                        <div
                            key={exhibition.id}
                            className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
                            onClick={() => handleCardClick(exhibition.id)}
                        >
                            <div className="h-70 relative">
                                <img
                                    src={exhibition.featuredImage}
                                    alt={exhibition.title}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        e.target.style.backgroundColor =
                                            '#f0f0f0';
                                        e.target.style.display = 'flex';
                                        e.target.style.alignItems = 'center';
                                        e.target.style.justifyContent =
                                            'center';
                                        e.target.style.color = '#666';
                                        e.target.style.fontSize = '16px';
                                        e.target.src = '';
                                        e.target.textContent =
                                            'Exhibition Image';
                                    }}
                                />
                            </div>
                            <div className="p-8">
                                <div
                                    className={`text-xs mb-4 inline-block rounded-full px-3 py-1 font-semibold uppercase tracking-wider ${
                                        exhibition.status === 'current'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                >
                                    {exhibition.status === 'current'
                                        ? 'Current Exhibition'
                                        : 'Upcoming Exhibition'}
                                </div>

                                <h2 className="mb-3 text-2xl font-normal leading-tight text-gray-900 dark:text-gray-100">
                                    {exhibition.title}
                                </h2>
                                <p className="mb-5 text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400">
                                    {exhibition.subtitle}
                                </p>
                                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    {exhibition.shortDescription}
                                </p>

                                <div className="mb-5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                                    <span className="font-medium">
                                        {exhibition.location}
                                    </span>
                                    <span className="font-normal">
                                        {exhibition.dates}
                                    </span>
                                </div>

                                <button className="inline-flex cursor-pointer items-center rounded border border-gray-900 bg-transparent px-6 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900">
                                    View Exhibition →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center text-gray-600 dark:text-gray-400">
                    <h3 className="mb-4 text-2xl text-gray-900 dark:text-gray-100">
                        No exhibitions found
                    </h3>
                    <p className="text-base leading-relaxed">
                        There are no exhibitions in this category at the moment.
                        Please check back later or browse other categories.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Exhibitions;
