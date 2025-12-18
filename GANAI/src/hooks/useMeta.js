import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import metaConfig from '../config/meta';

const useMeta = (pageKey, customMeta = {}) => {
    const location = useLocation();

    useEffect(() => {
        // Get base meta config for the page
        const baseMeta = metaConfig[pageKey] || metaConfig.default;

        // Merge with custom meta data
        const finalMeta = { ...baseMeta, ...customMeta };

        // Update document title
        document.title = finalMeta.title;

        // Update meta tags
        updateMetaTag('description', finalMeta.description);
        updateMetaTag('keywords', finalMeta.keywords);

        // Open Graph tags
        updateMetaTag('og:title', finalMeta.title);
        updateMetaTag('og:description', finalMeta.description);
        updateMetaTag('og:image', finalMeta.image);
        updateMetaTag('og:url', finalMeta.url || window.location.href);
        updateMetaTag('og:type', finalMeta.type);
        updateMetaTag(
            'og:site_name',
            finalMeta.siteName || metaConfig.default.siteName,
        );

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', finalMeta.title);
        updateMetaTag('twitter:description', finalMeta.description);
        updateMetaTag('twitter:image', finalMeta.image);
        updateMetaTag(
            'twitter:site',
            finalMeta.twitterHandle || metaConfig.default.twitterHandle,
        );

        // Canonical URL
        updateCanonicalUrl(finalMeta.url || window.location.href);

        // Structured data for better SEO
        updateStructuredData(finalMeta);
    }, [pageKey, customMeta, location.pathname]);
};

// Helper function to update or create meta tags
const updateMetaTag = (name, content) => {
    if (!content) return;

    let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

    if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
            meta.setAttribute('property', name);
        } else {
            meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
};

// Helper function to update canonical URL
const updateCanonicalUrl = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
};

// Helper function to add structured data
const updateStructuredData = (meta) => {
    // Remove existing structured data
    const existingScript = document.querySelector(
        'script[type="application/ld+json"]',
    );
    if (existingScript) {
        existingScript.remove();
    }

    // Create new structured data
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GANAI',
        url: meta.url || 'https://ganai.com',
        logo: meta.image || metaConfig.default.image,
        description: meta.description,
        sameAs: [
            'https://twitter.com/ganai_design',
            'https://linkedin.com/company/ganai',
            'https://instagram.com/ganai_design',
        ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
};

export default useMeta;
