import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Meta from '../components/Meta';
import { getExhibitionById } from '../data/exhibitions';

const ExhibitionDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [exhibition, setExhibition] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const foundExhibition = getExhibitionById(id);
        if (foundExhibition) {
            setExhibition(foundExhibition);
        } else {
            // Redirect to exhibitions page if not found
            navigate('/exhibitions');
        }
    }, [id, navigate]);

    if (!exhibition) {
        return (
            <div className="text-lg flex h-screen items-center justify-center text-gray-600 dark:text-gray-400">
                Loading exhibition...
            </div>
        );
    }

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handleBackClick = () => {
        navigate('/exhibitions');
    };

    return (
        <div className="mx-auto max-w-7xl px-5">
            <Meta pageKey="exhibition-detail" />

            <header className="py-15 mb-10 border-b border-gray-200 dark:border-gray-700">
                <div
                    className="mb-5 cursor-pointer text-sm text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    onClick={handleBackClick}
                >
                    ← Back to Exhibitions
                </div>

                <div
                    className={`text-xs mb-5 inline-block rounded-full px-3 py-1 font-semibold uppercase tracking-wider ${
                        exhibition.status === 'current'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                    }`}
                >
                    {exhibition.status === 'current'
                        ? 'Current Exhibition'
                        : 'Upcoming Exhibition'}
                </div>

                <h1 className="mb-4 text-4xl font-light leading-tight text-gray-900 dark:text-gray-100 md:text-5xl">
                    {exhibition.title}
                </h1>
                <p className="mb-6 text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-400">
                    {exhibition.subtitle}
                </p>

                <div className="mb-10 flex flex-wrap gap-10">
                    <div className="flex flex-col">
                        <span className="text-xs mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-500">
                            Dates
                        </span>
                        <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                            {exhibition.dates}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-500">
                            Location
                        </span>
                        <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                            {exhibition.location}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-500">
                            Curator
                        </span>
                        <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                            {exhibition.curator}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs mb-1 uppercase tracking-wider text-gray-500 dark:text-gray-500">
                            Category
                        </span>
                        <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                            {exhibition.category}
                        </span>
                    </div>
                </div>
            </header>

            <div className="gap-15 mb-15 grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                    <img
                        src={exhibition.images[currentImageIndex]}
                        alt={exhibition.title}
                        className="h-125 mb-5 w-full rounded-lg object-cover"
                        onError={(e) => {
                            e.target.style.backgroundColor = '#f0f0f0';
                            e.target.style.display = 'flex';
                            e.target.style.alignItems = 'center';
                            e.target.style.justifyContent = 'center';
                            e.target.style.color = '#666';
                            e.target.style.fontSize = '16px';
                            e.target.src = '';
                            e.target.textContent = 'Exhibition Image';
                        }}
                    />

                    <div className="grid grid-cols-4 gap-2">
                        {exhibition.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${exhibition.title} - Image ${index + 1}`}
                                className={`h-20 w-full cursor-pointer rounded border-2 object-cover transition-opacity duration-300 ${
                                    index === currentImageIndex
                                        ? 'border-gray-900 opacity-100 dark:border-gray-100'
                                        : 'border-transparent opacity-70'
                                }`}
                                onClick={() => handleThumbnailClick(index)}
                                onError={(e) => {
                                    e.target.style.backgroundColor = '#f0f0f0';
                                    e.target.style.display = 'flex';
                                    e.target.style.alignItems = 'center';
                                    e.target.style.justifyContent = 'center';
                                    e.target.style.color = '#666';
                                    e.target.style.fontSize = '12px';
                                    e.target.src = '';
                                    e.target.textContent = `Image ${index + 1}`;
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-lg mb-10 whitespace-pre-line leading-relaxed text-gray-900 dark:text-gray-100">
                        {exhibition.description}
                    </p>
                    <button
                        className="mt-5 inline-flex cursor-pointer items-center rounded border border-gray-900 bg-transparent px-6 py-3 text-base font-medium text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                        onClick={handleBackClick}
                    >
                        ← Back to Exhibitions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExhibitionDetail;
