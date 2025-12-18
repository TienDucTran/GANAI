import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const Footer = () => {
    return (
        <footer className="bg-white pb-7 lg:pb-20">
            <div className="container-custom">
                <div className="flex flex-col justify-between border-t border-gray-100 pt-6 text-sm text-dark-grey md:flex-row">
                    <p className="hidden md:block">
                        &copy; {new Date().getFullYear()} Miumiu Studio. All
                        rights reserved.
                    </p>
                    <div className="mt-2 flex justify-center gap-4 md:mt-0">
                        <a
                            href="https://www.instagram.com/ganaidesign?fbclid=IwY2xjawJ8i6NleHRuA2FlbQIxMABicmlkETFqTVVLOGJMMkFrY0pReEhLAR5M1J5FHNedZ2s9UCy5WI799CCQxOyVQUl2tB4EiBhKRx7IyGCjYTUPlC0V1w_aem_1FqoN0zyHFdETL-uNfiRhA"
                            className="footer-social instagram transition-colors"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="17"
                                    cy="7"
                                    r="1.5"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/ganaidesign"
                            className="footer-social facebook cursor-pointer transition-colors"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="footer-social twitter transition-colors"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M19 8.3c-.5.2-1 .4-1.5.4.5-.3.9-.8 1.1-1.3-.5.3-1 .5-1.6.6a2.3 2.3 0 0 0-4 2c-1.9-.1-3.6-1-4.7-2.4-.2.4-.3.8-.3 1.2 0 .8.4 1.5 1 1.9-.4 0-.7-.1-1-.3v.1c0 1.1.8 2 1.8 2.2-.2.1-.4.1-.7.1-.1 0-.2 0-.3-.1.2.8 1 1.4 1.9 1.4A4.6 4.6 0 0 1 5 17.1c-.3 0-.5 0-.8-.1A6.5 6.5 0 0 0 8.3 18c7.5 0 11.6-6.2 11.6-11.6v-.5c.4-.3.8-.7 1.1-1.1z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.tiktok.com/@yourtiktokusername"
                            className="footer-social tiktok transition-colors"
                            aria-label="TikTok"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M15.5 8.5V13a3.5 3.5 0 1 1-3.5-3.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <path
                                    d="M15.5 8.5c.7.7 1.7 1.1 2.5 1.1V7.5c-.9 0-1.7-.7-1.7-1.7h-1.1v2.7z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
