import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';

const Contact = () => {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const inputRef = useRef(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const isValidPhoneNumber = (number) => {
        const digitsOnly = number.replace(/\D/g, '');
        return /^0\d{9}$/.test(digitsOnly) || /^84\d{9}$/.test(digitsOnly);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Backspace') {
            setIsDeleting(true);
        } else {
            setIsDeleting(false);
        }
    };

    const handleChange = (e) => {
        let rawValue = e.target.value;
        let digits = rawValue.replace(/\D/g, '');

        let formatted = digits;

        if (!isDeleting) {
            if (digits.length > 4 && digits.length <= 7) {
                formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`;
            } else if (digits.length > 7) {
                formatted = `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
            }
        }

        setPhoneNumber(formatted);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidPhoneNumber(phoneNumber)) {
            setError(t('contact.error.invalidPhone'));
            inputRef.current?.focus(); // Scroll/focus on error
            return;
        }

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setPhoneNumber('');

            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="py-20">
            <Meta pageKey="contact" />
            <motion.h1
                className="heading-lg text-center mb-8 "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {t('contact.title')}
            </motion.h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* Contact Information */}
                <motion.div
                    className="flex flex-col space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div>
                        <h2 className="text-primary mb-4 text-2xl font-semibold">
                            {t('contact.visitUs')}
                        </h2>
                        <p className="text-secondary mb-1">
                            {t('contact.address1')}
                        </p>
                        <p className="text-secondary mb-1">
                            {t('contact.address2')}
                        </p>
                        <p className="text-secondary mb-1">
                            {t('contact.address3')}
                        </p>
                        <p className="text-secondary mb-4">
                            {t('contact.address4')}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-primary mb-4 text-2xl font-semibold">
                            {t('contact.contactUs')}
                        </h2>
                        <p className="text-secondary mb-1 select-text">
                            <span className="font-medium">
                                {t('contact.phone')}:
                            </span>{' '}
                            0868 855 509
                        </p>
                        <p className="text-secondary mb-1 select-text">
                            <span className="font-medium">
                                {t('contact.email')}:
                            </span>{' '}
                            ganaidesign@gmail.com
                        </p>
                    </div>

                    <div>
                        <h2 className="text-primary mb-4 text-2xl font-semibold">
                            {t('contact.openingHours')}
                        </h2>
                        <p className="text-secondary mb-1">
                            {t('contact.hours.weekdays')}
                        </p>
                        <p className="text-secondary mb-1">
                            {t('contact.hours.saturday')}
                        </p>
                        <p className="text-secondary mb-1">
                            {t('contact.hours.sunday')}
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="rounded-lg bg-white p-6 shadow-md"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-primary mb-6 text-2xl font-semibold">
                        {t('contact.form.title')}
                    </h2>

                    {submitted ? (
                        <div className="bg-green-50 rounded-md p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="text-green-400 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-green-800 text-sm font-medium">
                                        {t('contact.form.success')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="phoneNumber"
                                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {t('contact.form.label')}
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onKeyDown={handleKeyDown}
                                        onChange={handleChange}
                                        placeholder={t(
                                            'contact.form.placeholder',
                                        )}
                                        required
                                        ref={inputRef}
                                        pattern="[0-9\s\-]*"
                                        inputMode="numeric"
                                        className={`text-lg focus:ring-blue-500/20 block w-full rounded-xl border-2 py-4 pl-10 pr-4 transition-all duration-300 focus:outline-none focus:ring-4 ${
                                            error
                                                ? 'border-red-300 focus:border-red-500'
                                                : 'focus:border-blue-500 border-gray-200'
                                        } bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
                                    />
                                </div>
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-600 mt-2 flex items-center text-sm"
                                    >
                                        <svg
                                            className="mr-1 h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {error}
                                    </motion.p>
                                )}
                                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                                    {t('contact.form.helper')}
                                </p>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className={`btn-primary inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm ${
                                        submitting ? 'cursor-not-allowed' : ''
                                    }`}
                                >
                                    {submitting
                                        ? t('contact.form.sending')
                                        : t('contact.form.submit')}
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-primary mb-6 text-2xl font-semibold">
                    {t('contact.findUs')}
                </h2>
                <div className="h-96 w-full overflow-hidden rounded-lg shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.249670866924!2d106.73915247472937!3d10.79693308931346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752536be33550f%3A0x4a9e06e70e84a3fc!2s24A%2C%20Khu%20%C4%91%C3%B4%20th%E1%BB%8B%20An%20Ph%C3%BA%2C%20An%20Ph%C3%BA%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1sen!2svn!4v1716128658796!5m2!1sen!2svn"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
