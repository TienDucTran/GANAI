import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../config';
import {
    logoDark,
    logo,
} from '../assets/images';
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    // i18next hook
    const { t, i18n } = useTranslation();

    // Set language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('language') || 'EN';
        if (i18n.language !== savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);

    // Apply theme on initial load and when it changes
    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'EN' ? 'VI' : 'EN';

        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <>
            <header className="dark:border-gray-700 dark:bg-gray-900">
                <div className="container-custom">
                    <div className="flex flex-col items-center justify-between">
                        {/* Mobile menu (hidden by default) */}
                        <div
                            className={`w-full overflow-hidden border-b border-gray-100 bg-white uppercase transition-all ease-in-out dark:border-gray-700 dark:bg-gray-900 ${
                                mobileMenuOpen
                                    ? 'max-h-100 opacity-100'
                                    : 'max-h-0 opacity-0'
                            } sm:hidden`}
                        >
                            <nav className="container-custom flex flex-col space-y-3 py-4">
                                <Link
                                    to="/"
                                    className={`nav-link ${
                                        isActive('/') ? 'nav-link-active' : ''
                                    } dark:text-gray-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('home')}
                                </Link>
                                <Link
                                    to={config.routes.spaces}
                                    className={`nav-link ${isActive(config.routes.spaces) ? 'nav-link-active' : ''} dark:text-gray-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('spaces')}
                                </Link>
                                <Link
                                    to={config.routes.exhibitions}
                                    className={`nav-link ${isActive(config.routes.exhibitions) ? 'nav-link-active' : ''} dark:text-gray-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('exhibitions')}
                                </Link>
                                <Link
                                    to={config.routes.products}
                                    className={`nav-link ${isActive(config.routes.products) ? 'nav-link-active' : ''} dark:text-gray-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('products')}
                                </Link>
                                <Link
                                    to={config.routes.introduce}
                                    className={`nav-link ${isActive(config.routes.introduce) ? 'nav-link-active' : ''} dark:text-gray-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('introduce')}
                                </Link>
                                <Link
                                    to={config.routes.contact}
                                    className={`nav-link ${isActive(config.routes.contact) ? 'nav-link-active' : ''} dark:text-gray-300`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('contact')}
                                </Link>
                                {/* Theme toggle for mobile */}
                                <button
                                    className="nav-link dark:text-gray-300"
                                    onClick={() => {
                                        toggleTheme();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    <span className="flex items-center justify-center">
                                        {isDarkTheme ? (
                                            <svg
                                                className="mr-2 h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                className="mr-2 h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                            </svg>
                                        )}
                                        {t('theme')}
                                    </span>
                                </button>
                                {/* Language toggle for mobile */}
                                <button
                                    className="nav-link dark:text-gray-300"
                                    onClick={() => {
                                        toggleLanguage();
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                            ></path>
                                        </svg>
                                        {i18n.language}
                                    </span>
                                </button>
                            </nav>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="p-2 dark:text-white sm:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={
                                mobileMenuOpen ? 'Close menu' : 'Open menu'
                            }
                        >
                            <svg
                                className="h-6 w-6 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        mobileMenuOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                ></path>
                            </svg>
                        </button>
                        <Link
                            to="/"
                            className="font-gelasio pb-5 text-6xl font-medium dark:text-white"
                            tabIndex={-1}
                            draggable={false}
                        >
                            {isDarkTheme ? (
                                <img
                                    src={logoDark}
                                    alt="Miumiu Studio"
                                    className="logo"
                                />
                            ) : (
                                <img
                                    src={logo}
                                    alt="Miumiu Studio"
                                    className="logo"
                                />
                            )}
                        </Link>
                        {/* Desktop navigation */}
                        <nav className="hidden items-center space-x-2 uppercase sm:flex lg:space-x-4">
                            <Link
                                to="/"
                                className={`nav-link ${isActive('/') ? 'nav-link-active' : ''} dark:text-gray-300`}
                            >
                                {t('home')}
                            </Link>
                            <Link
                                to={config.routes.spaces}
                                className={`nav-link ${isActive(config.routes.spaces) ? 'nav-link-active' : ''} dark:text-gray-300`}
                            >
                                {t('spaces')}
                            </Link>
                            <Link
                                to={config.routes.exhibitions}
                                className={`nav-link ${isActive(config.routes.exhibitions) ? 'nav-link-active' : ''} dark:text-gray-300`}
                            >
                                {t('exhibitions')}
                            </Link>
                            <Link
                                to={config.routes.products}
                                className={`nav-link ${isActive(config.routes.products) ? 'nav-link-active' : ''} dark:text-gray-300`}
                            >
                                {t('products')}
                            </Link>
                            <Link
                                to={config.routes.introduce}
                                className={`nav-link ${isActive(config.routes.introduce) ? 'nav-link-active' : ''} dark:text-gray-300`}
                            >
                                {t('introduce')}
                            </Link>
                            <Link
                                to={config.routes.contact}
                                className={`nav-link ${isActive(config.routes.contact) ? 'nav-link-active' : ''} dark:text-gray-300`}
                            >
                                {t('contact')}
                            </Link>

                            {/* Theme toggle for desktop */}
                            <button
                                className="ml-4 space-x-2 text-dark-grey transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                {isDarkTheme ? (
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                )}
                            </button>

                            {/* Language toggle for desktop */}
                            <button
                                className="space-x-4 text-dark-grey transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
                                onClick={toggleLanguage}
                                aria-label="Toggle language"
                            >
                                <span className="flex items-center">
                                    <svg
                                        className="mr-1 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                        ></path>
                                    </svg>
                                    {i18n.language}
                                </span>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
